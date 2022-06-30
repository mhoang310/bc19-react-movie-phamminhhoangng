import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMovieShowing } from '../slices/movieShowingSlice';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const MovieShowing = () => {
    const { data, isLoading, error } = useSelector((state) => state.movieShowing);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMovieShowing());
    }, []);

    return (
        <div className="container">
            <div className="row">
                {data.map((movie) => {
                    return (
                        <div key={movie.maPhim} className="col-sm-4" >
                            <div className="card">
                                <img
                                    src={movie.hinhAnh}
                                    alt={movie.tenPhim}
                                    className="card-img"
                                    width="100%"
                                    height="300px"
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{movie.tenPhim}</h3>
                                    {/* <Link className="btn btn-success" to={`/movies/${movie.maPhim}`}>
                                        Details
                                    </Link> */}
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() => navigate(`/movies/${movie.maPhim}`)}                                        
                                    >
                                        Details
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"                                       

                                    >
                                        <a target="_blank" href={movie.trailer} rel="noreferrer">
                                            Trailer
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div>
                <button className="btn btn-secondary" onClick={() => changePage(1)}>
                    1
                </button>
                <button className="btn btn-secondary" onClick={() => changePage(2)}>
                    2
                </button>
            </div> */}
        </div>

        // <div>
        //     {data.map((movie) => {
        //         return (
        //             <div key={movie.maPhim} className="container" >
        //                 <div className="row">
        //                     <div className="col-sm-3">
        //                         <img src={movie.hinhAnh} alt="" />
        //                     </div>
        //                 </div>

        //                 {/* <Typography variant="body1" component="span">
        //                     {movie.tenPhim}
        //                 </Typography> */}
        // <Button
        //     variant="contained"
        //     color="success"
        //     onClick={() => navigate(`/movies/${movie.maPhim}`)}
        // >
        //     Details
        // </Button>
        //             </div>
        //         );
        //     })}
        // </div>
    );
};

export default MovieShowing;
