import axios from "axios";
import store from "../store";

// Setup cấu hình mặc định cho axios để sử dụng cho ứng dụng
const axiosClient = axios.create({
    // setup url mặc định
    baseURL: "https://movienew.cybersoft.edu.vn/api/",
    // setup header có TokenCybersoft
    headers: {
        TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxOSIsIkhldEhhblN0cmluZyI6IjI1LzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2OTMzNDQwMDAwMCIsIm5iZiI6MTYzNzk0NjAwMCwiZXhwIjoxNjY5NDgyMDAwfQ.TumAQWyBApm0qV2BOdFeXHmfMi9OQfvjTTG-Vs-cxf4",
    },
});

// axios response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        // format response trước khi trả ra cho nơi gọi request
        return response.data.content;
    },
    (error) => {
        // format error trước khi trả ra cho nơi gọi request
        return Promise.reject(error.response.data.content);
    }
);

// axios request interceptor
axiosClient.interceptors.request.use((config) => {
    // Thay đổi config của request trước khi gửi lên server

    // Kết nối tới redux store lấy thông tin đăng nhập của user
    const { user } = store.getState().auth;
    // Kiểm tra nếu có thông tin user => đã đăng nhập => lấy key accessToken từ user và gán cho Authorization của request headers
    if (user) {
        const { accessToken } = user;
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

export default axiosClient;
