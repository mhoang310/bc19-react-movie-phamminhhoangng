import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../slices/movieSlice";

// Data: tenPhim, moTa, trailer, ngayKhoiChieu, hinhAnh, maNhom

const AddMovie = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            tenPhim: "",
            moTa: "",
            trailer: "",
            hinhAnh: "",
            ngayKhoiChieu: "",
        },
    });

    const [previewImg, setPreviewImg] = useState(null);
    const { isLoading, error } = useSelector((state) => state.adminMovie);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const payload = {
            ...values,
            hinhAnh: values.hinhAnh[0],
        };

        try {
            await dispatch(createMovie(payload)).unwrap();
            // Sau khi thêm phim thành công
            navigate("/admin/movies");
        } catch (error) {
            // Show message thêm phim thất bại
            alert("Thêm phim không thành công");
        }
    };

    const handleChangeImage = (evt) => {
        // Đối với input type=file để lấy được file vừa upload:
        const files = evt.target.files;
        if (!files[0]) return;
        // Set value cho thuộc tính hinhAnh của form
        setValue("hinhAnh", files);
        // Xử lý show hình ảnh ra khi user chọn 1 hình ảnh nào đó
        const fileReader = new FileReader();
        // Encode file image thành string base64
        fileReader.readAsDataURL(files[0]);
        // Khi hoàn thành sẽ gọi tới hàm onload
        fileReader.onload = (e) => {
            setPreviewImg(e.target.result);
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField type="text" label="Tên Phim" {...register("tenPhim")} />
            </div>
            <br />
            <div>
                <TextField type="text" label="Mô Tả" {...register("moTa")} />
            </div>
            <br />
            <div>
                <TextField type="text" label="Trailer" {...register("trailer")} />
            </div>
            <br />
            <div>
                <Button variant="contained" color="success">
                    <label htmlFor="hinhAnh">Hình Ảnh</label>
                </Button>
                <div>{previewImg && <img src={previewImg} alt="preview" />}</div>
                {/* <input type="file" id="hinhAnh" hidden {...register("hinhAnh")} /> */}
                <input type="file" id="hinhAnh" hidden onChange={handleChangeImage} />
            </div>
            <br />

            <div>
                <TextField
                    type="text"
                    label="Ngày khởi chiếu"
                    {...register("ngayKhoiChieu")}
                />
            </div>
            <br />

            <Button type="submit" variant="contained" color="primary">
                Thêm Phim
            </Button>
        </form>
    );
};

export default AddMovie;
