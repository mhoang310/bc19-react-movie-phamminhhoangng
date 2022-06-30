import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";

import { register as registerAction } from "../slices/authSlice";
import * as yup from "yup";

const validationSchema = yup.object({
    taiKhoan: yup
        .string() // tài khoản là 1 chuỗi
        .required("Tài khoản không được để trống.") // Không được để trống
        .min(5, "Tài khoản phải từ 5 đến 20 kí tự") // Ít nhất 5 kí tự
        .max(20, "Tài khoản phải từ 5 đến 20 kí tự"), // Nhiều nhất 20 kí tự

    matKhau: yup
        .string()
        .required("Mật khẩu không được để trống.")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            "Mật khẩu không đúng định dangj"
        ),

    email: yup
        .string()
        .required("Email không được để trống")
        .email("Email không đúng định dạng"),

    hoTen: yup.string().required("Họ tên không được để trống"),
    soDt: yup.string().required("Số điện thoại không được để trống"),
});

const Register = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            hoTen: "",
            soDt: "",
        },
        resolver: yupResolver(validationSchema),
        mode: "onTouched",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values) => {
        dispatch(registerAction(values)).then(() => {
            // Sau khi xử lý async action thành công
            // Có nghĩa là đăng ký thành công => Chuyển về đăng nhập
            navigate("/login");
        });
    };

    return (
        <div className="jss1066">
            <div className="container col-5">
                <div className="card text-center">
                    <h1 className="text-danger">Register</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                {/* <label>Tài khoản</label>
                                <input type="text" {...register("taiKhoan")} />
                                {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>} */}

                                {/* Nếu UI component không hỗ trợ thuộc tính ref thì không thể sử dụng register */}
                                <TextField
                                    {...register("taiKhoan")}
                                    label="Tài Khoản"
                                    error={!!errors.taiKhoan}
                                    helperText={errors.taiKhoan?.message}
                                />

                                {/* Chỉ sử dụng cách này khi UI lib không hỗ trợ sử dụng register */}
                                {/* <Controller
                                    name="taiKhoan"
                                    control={control}
                                    render={({ field, fieldState }) => {
                                        console.log(field, fieldState);
                                        return (
                                        <TextField
                                            {...field}
                                            label="Tài Khoản"
                                            error={fieldState.error}
                                            helperText={fieldState.error?.message}
                                        />
                                        );
                                    }}
                                    /> */}
                            </div>
                            <div>
                                <TextField
                                    {...register("matKhau")}
                                    type="password"
                                    label="Mật khẩu"
                                    error={!!errors.matKhau}
                                    helperText={errors.matKhau?.message}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text" {...register("email")} />
                                <br />
                                {errors.email && <span className="text-danger">{errors.email.message}</span>}
                            </div>
                            <div>
                                <label>Họ tên</label>
                                <input type="text" {...register("hoTen")} />
                                <br />
                                {errors.hoTen && <span className="text-danger">{errors.hoTen.message}</span>}
                            </div>
                            <div>
                                <label>Số điện thoại</label>
                                <input type="text" {...register("soDt")} />
                                <br />
                                {errors.soDt && <span className="text-danger">{errors.soDt.message}</span>}
                            </div>

                            <button className="btn btn-outline">Đăng Ký</button>
                        </form>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Register;
