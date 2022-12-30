import React from 'react'
import './style.css'
import sone from '../../../Images/sone.jpg'
import sthree from '../../../Images/shree.jpg'
import sfour from '../../../Images/sfour.jpg'
import sfive from '../../../Images/sfive.jpg'
import ssix from '../../../Images/ssix.jpg'

const WhoWeAreSlider = () => {

    return (
        <div>
            <div className="sliderBox">
                <span><h1>What we do</h1></span>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src={sfive} className="d-block w-100" alt="whoweare/Images.png" />
                        </div>
                        <div className="carousel-item">
                            <img src={ssix} className="d-block w-100" alt="whoweare/Images.png" />
                        </div>
                        <div className="carousel-item active">
                            <img src={sone} className="d-block w-100" alt="whoweare/Images.png" />
                        </div>
                        <div className="carousel-item">
                            <img src={sthree} className="d-block w-100" alt="whoweare/Images.png" />
                        </div>
                        <div className="carousel-item">
                            <img src={sfour} className="d-block w-100" alt="whoweare/Images.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAreSlider;