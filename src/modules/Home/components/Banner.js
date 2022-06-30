import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBanners } from '../slices/bannerSlice';

const Banner = () => {
    const { data, isLoading, error } = useSelector((state) => state.banner);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBanners());
    }, []);

    console.log(data);
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className />
                <li data-target="#demo" data-slide-to={1} className />
                <li data-target="#demo" data-slide-to={2} className="active" />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img src="./img/doctor-strange-2.jpg" alt="Los Angeles" width="100%" height={500} />
                </div>
                <div className="carousel-item">
                    <img src="./img/jurassic-world.jpg" alt="Chicago" width="100%" height={500} />
                </div>
                <div className="carousel-item active">
                    <img src="./img/haunting-house.jpg" alt="New York" width="100%" height={500} />
                </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>
    );
};

export default Banner;
