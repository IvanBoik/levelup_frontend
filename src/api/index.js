import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8081/api"
});

api.interceptors.request.use( config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
});

api.interceptors.response.use(
    config => {
        return config;
    },
    async error => {
        if (error.response.status === 401) {
            const response = await api.post("/users/auth/new_access_token", localStorage.getItem("refreshToken"));
            localStorage.setItem("accessToken", response.data);
            return api.request(error.config);
        }
    }
);

export default api;
