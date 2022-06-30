import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import trực tiếp như thế này thì các components sẽ luôn luôn được tải ở lần đầu tiên khi truy cập vào trang web
// import Home from "./modules/Home/pages/Home";
// import Login from "./modules/Auth/pages/Login";
// import Register from "./modules/Auth/pages/Register";
// import MovieDetails from "./modules/Movie/pages/MovieDetails";
// import MovieList from "./modules/AdminMovie/pages/MovieList";
// import AddMovie from "./modules/AdminMovie/pages/AddMovie";
// import UpdateMovie from "./modules/AdminMovie/pages/UpdateMovie";

import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import AdminRoute from "./routes/AdminRoute";

// Dynamic import
const Home = lazy(() => import("./modules/Home/pages/Home"));
const MovieDetails = lazy(() => import("./modules/Movie/pages/MovieDetails"));
const Login = lazy(() => import("./modules/Auth/pages/Login"));
const Register = lazy(() => import("./modules/Auth/pages/Register"));
const MovieList = lazy(() => import("./modules/AdminMovie/pages/MovieList"));
const AddMovie = lazy(() => import("./modules/AdminMovie/pages/AddMovie"));
const UpdateMovie = lazy(() =>
  import("./modules/AdminMovie/pages/UpdateMovie")
);

function App() {
  return (
    // Component Suspense sẽ hiển thị fallback UI thay thế khi các components/pages đang được import
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        {/* User */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin */}
        <Route
          path="/admin"
          element={
            // Khi url khớp với path admin, nó sẽ gọi tới component AdminRoute trước
            // trong component AdminRoute ta kiểm tra nếu user hợp lệ thì return về children chính là component AdminLayout
            // Ngược lại return về Navigate để điều hướng qua 1 trang khác
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/add" element={<AddMovie />} />
          <Route path="movies/update/:movieId" element={<UpdateMovie />} />
        </Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
