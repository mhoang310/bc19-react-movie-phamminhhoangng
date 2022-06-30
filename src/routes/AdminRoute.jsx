import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// Component dùng để xử lý kiểm tra xem user có phải là admin hay không
// Nếu là admin mới cho phép truy cập
// Nếu không phải là admin sẽ redirect về 1 trang nào đó
const AdminRoute = ({ children }) => {
    // Thực hiện logic kiểm tra

    // B1: Kết nối tới redux store lấy thông tin user đang đăng nhập
    const { user } = useSelector((state) => state.auth);
    // B2: Kiểm tra xem có đăng nhập hay chưa hoặc user có phải là admin hay không
    // user.maLoaiNguoiDung !== "QuanTri" | "KhachHang"
    if (!user || user.maLoaiNguoiDung !== "QuanTri") {
        // Chưa đăng nhập hoặc user không phải là admin
        // => Redirect về page /not-found
        return <Navigate to="/admin/movies" />;
    }

    return children;
};

export default AdminRoute;

  // <Route path="/admin" element={<AdminRoute><AdminMovie /></AdminRoute>} />


