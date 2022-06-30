// Định nghĩa các function gọi API liên quan đến movie
import axiosClient from "./axiosClient";

export const getMovies = () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
        params: {
            maNhom: "GP01",
        },
    });
};

export const getMovieDetails = (movieId) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
        params: {
            maPhim: movieId,
        },
    });
};

export const getBanners = () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
};

export const deleteMovie = (movieId) => {
    return axiosClient.get("QuanLyPhim/XoaPhim");
};

export const createMovie = (movie) => {
    console.log("Object movie:", movie);
    // Chú ý: khi thêm/cập nhật mà có những dữ liệu đặc biệt như File,...
    // Ta cần phải dùng đối tượng FormData để làm việc với những dữ liệu này
    const formData = new FormData();
    for (let key in movie) {
        formData.append(key, movie[key]);
    }
    formData.append("maNhom", "GP01");

    return axiosClient.post("QuanLyPhim/ThemPhimUploadHinh", formData);
};
