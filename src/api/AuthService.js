import $api from "./index";
import axios from "axios";

export default class AuthService {
    static async login(email, password) {
        const response = await axios.post("http://localhost:8080/api/users/auth/authenticate", {email, password});
        return response.data;
    }

    static async registration(user) {
        const response = await axios.post("http://localhost:8080/api/users/auth/register", user);
        return response.data;
    }

    static async logout() {
        return await axios.post("/user/logout");
    }
}