import React from 'react'

export default function Slide() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg" className="d-block w-100" style={{height: '250px'}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg" className="d-block w-100" style={{height: '250px'}} alt="..." />
                </div>
                {/* <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
