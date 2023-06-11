import $api from "./index";
import axios from "axios";

export default class AuthService {
    static async login(email, password) {
        const params = new URLSearchParams();
        params.append("client_secret", "3JEtO5mr0JRnjXsxR8b4jSWwRpTg6DWC");
        params.append("client_id", "levelup_backend");
        params.append("grant_type", "password");
        params.append("username", email);
        params.append("password", password);

        const access = (await axios.post("http://localhost:8080/realms/levelup/protocol/openid-connect/token", params)).data;
        const user = (await axios.get(`http://localhost:8081/api/users/user_by_email/${email}`, {
            headers: {
                Authorization: `Bearer ${access.access_token}`
            }
        })).data;
        user.password = password;
        return {
            accessToken: access.access_token,
            refreshToken: access.refresh_token,
            user: user
        };
    }

    static async registration(userForKeycloak, userForBackend) {
        const params = new URLSearchParams();
        params.append("client_secret", "3JEtO5mr0JRnjXsxR8b4jSWwRpTg6DWC");
        params.append("client_id", "levelup_backend");
        params.append("grant_type", "client_credentials");
        const realmAccessToken = (await axios.post("http://localhost:8080/realms/levelup/protocol/openid-connect/token", params)).data;

        console.log(realmAccessToken);
        try {
            await axios.post("http://localhost:8080/admin/realms/levelup/users",
                userForKeycloak,
                {
                    headers: {
                        Authorization: `Bearer ${realmAccessToken.access_token}`
                    }
                });

            await axios.post("http://localhost:8081/api/users/auth/registration",
                userForBackend,
                {
                    headers: {
                        Authorization: `Bearer ${realmAccessToken.access_token}`
                    }
                });

            const result = await this.login(userForBackend.email, userForBackend.password);
            console.log(result);
            return result;
        }
        catch (e) {
            console.log(e);
        }
    }

    static async googleAuthorization(user) {
        const responseUser = (await axios.post("http://localhost:8081/api/users/auth/google", {
            email: user.email,
            name: user.given_name,
            surname: user.family_name,
            password: null
        })).data;
        console.log("responseUser: " + responseUser);

        let access;

        try {
            const firstTryAuthParams = new URLSearchParams();
            firstTryAuthParams.append("client_secret", "3JEtO5mr0JRnjXsxR8b4jSWwRpTg6DWC");
            firstTryAuthParams.append("client_id", "levelup_backend");
            firstTryAuthParams.append("grant_type", "password");
            firstTryAuthParams.append("username", responseUser.email);
            firstTryAuthParams.append("password", responseUser.password);

            access = (await axios.post("http://localhost:8080/realms/levelup/protocol/openid-connect/token", firstTryAuthParams)).data;
        } catch (e) {
            const realmAccessParams = new URLSearchParams();
            realmAccessParams.append("client_secret", "3JEtO5mr0JRnjXsxR8b4jSWwRpTg6DWC");
            realmAccessParams.append("client_id", "levelup_backend");
            realmAccessParams.append("grant_type", "client_credentials");
            const realmAccessToken = (await axios.post("http://localhost:8080/realms/levelup/protocol/openid-connect/token", realmAccessParams)).data;

            await axios.post("http://localhost:8080/admin/realms/levelup/users",
                {
                    enabled: true,
                    email: responseUser.email,
                    credentials: [{
                        type: "password",
                        value: responseUser.password,
                        temporary: false
                    }],
                    firstName: responseUser.name,
                    lastName: responseUser.surname,
                    username: responseUser.email
                },
                {
                    headers: {
                        Authorization: `Bearer ${realmAccessToken.access_token}`
                    }
                });

            const secondTryAuthParams = new URLSearchParams();
            secondTryAuthParams.append("client_secret", "3JEtO5mr0JRnjXsxR8b4jSWwRpTg6DWC");
            secondTryAuthParams.append("client_id", "levelup_backend");
            secondTryAuthParams.append("grant_type", "password");
            secondTryAuthParams.append("username", responseUser.email);
            secondTryAuthParams.append("password", responseUser.password);

            access = (await axios.post("http://localhost:8080/realms/levelup/protocol/openid-connect/token", secondTryAuthParams)).data;
        }

        return {
            user: responseUser,
            accessToken: access.access_token,
            refreshToken: access.refresh_token
        };
    }
}