import axios from "axios";
import api from "./index";

export default class AuthService {
    static async login(email, password) {
        return await api.post("/users/auth/sign_in", {email, password});
    }

    static async registration(user) {
        return await api.post("/users/auth/sign_up", user);
    }

    static async googleAuthorization(user) {
        return await api.post("/users/auth/google", {
            id: null,
            email: user.email,
            name: user.given_name,
            surname: user.family_name,
            avatar: null
        });
    }
}