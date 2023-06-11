// import axios from "axios";
//
// export const API_URL = "http://localhost:8080/api";
//
// const api = axios.create();
//
// const getNewAccessToken = async (refreshToken) => {
//     const newAccessToken = await api.post("http://localhost:8080/api/users/auth/new_access", {refreshToken});
//     localStorage.setItem("accessToken", newAccessToken.data.accessToken);
//     return newAccessToken.data.accessToken;
// }
//
// const getNewAccessTokenAfterRefresh = async (refreshToken) => {
//     const refreshResponse = await api.post("http://localhost:8080/api/users/auth/new_refresh", {refreshToken});
//     localStorage.setItem("accessToken", refreshResponse.data.accessToken);
//     localStorage.setItem("refreshToken", refreshResponse.data.refreshToken);
//     return refreshResponse.data.accessToken;
// }
//
// export default axios.interceptors.request.use(async config => {
//     const accessToken = localStorage.getItem("accessToken");
//     const refreshToken = localStorage.getItem("refreshToken");
//
//     if (config.url.includes("auth")) {
//         return config;
//     }
//
//     if (accessToken === 'null' || refreshToken === 'null') {
//         return config;
//     }
//
//     if (accessToken === 'undefined' || refreshToken === 'undefined') {
//         return config;
//     }
//
//     try {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//         await api.get("http://localhost:8080/api/users/test", config);
//         return config;
//     }
//     catch (e) {
//         try {
//             const newAccessToken = await getNewAccessToken(refreshToken);
//             config.headers.Authorization = `Bearer ${newAccessToken}`;
//             await api.get("http://localhost:8080/api/users/test", config);
//             return config;
//         }
//         catch (e) {
//             const newAccessToken = await getNewAccessTokenAfterRefresh(refreshToken);
//             config.headers.Authorization = `Bearer ${newAccessToken}`;
//             return config;
//         }
//     }
// });