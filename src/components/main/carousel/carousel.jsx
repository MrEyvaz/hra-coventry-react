import React from 'react';
import '../carousel/carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import hraCarouselImage1 from './../../assets/carousel-images/slider-1.jpg'
import hraCarouselImage2 from './../../assets/carousel-images/slider-2.jpg'

function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: '30px' }}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={hraCarouselImage1} className="d-block mx-auto" style={{ width: '90%', height: '500px', objectFit: 'cover' }} alt="Slider 1" />
                </div>
                <div className="carousel-item">
                    <img src={hraCarouselImage2} className="d-block mx-auto" style={{ width: '90%', height: '500px', objectFit: 'cover' }} alt="Slider 2" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;