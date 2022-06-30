import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();        

    useEffect(() => {
        // Dùng movieId để dispatch action lấy chi tiết phim
        // dispatch(getMovieDetails(movieId))
        console.log(movieId);
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <img src="" alt="" />
                </div>
                <div className="col-sm-6">
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
