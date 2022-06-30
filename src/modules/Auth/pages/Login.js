import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../slices/authSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    // mode mặc định là onSubmit
    // Quyết định khi nào sẽ kích hoạt validation
    mode: "onTouched",
  });

  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(login(values));
  };

  const onError = (error) => {
    console.log(error);
  };

  if (user) {
    // Sau khi đăng nhập thành công
    // Redirect user về trang Home
    // user.maLoaiNguoiDung === "QuanTri" | "KhachHang"

    if (user.maLoaiNguoiDung === "QuanTri") {
      return <Navigate to="/admin/movies" />;
    }

    return <Navigate to="/" />;
  }

  return (
    <div className="jss1066">
      <div className="container col-5">
        <div className="card text-center">
          <h1 className="text-danger">Log in</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="mb-4">
                <label>Tài khoản</label>                
                <input
                  type="text"
                  {...register("taiKhoan", {
                    required: {
                      value: true,
                      message: "Tài khoản không được để trống",
                    },
                    minLength: {
                      value: 5,
                      message: "Tài khoản phải từ 5 đến 20 kí tự",
                    },
                    maxLength: {
                      value: 20,
                      message: "Tài khoản phải từ 5 đến 20 kí tự",
                    },
                  })}
                />
                <br />
                {errors.taiKhoan && <span className="text-danger">{errors.taiKhoan.message}</span>}
              </div>

              <div className="mb-4">
                <label>Mật khẩu</label>                
                <input                  
                  type="password"
                  {...register("matKhau", {
                    required: {
                      value: true,
                      message: "Mật khẩu không được để trống",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message: "Mật khẩu không đúng định dạng",
                    },
                  })}
                />
                <br />
                {errors.matKhau && <span className="text-danger">{errors.matKhau.message}</span>}
              </div>
              
              <div className="m-3">
                <button className="btn btn-outline" disabled={isLoading}>Đăng Nhập</button>
                <br />
                {error && <p className="text-danger">{error}</p>}
              </div>
              
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Login;
