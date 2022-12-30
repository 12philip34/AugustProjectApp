import React from 'react'
import './style.css'
import s1 from '../../Images/shos1.JPG'
import s2 from '../../Images/shos2.jpg'
import s3 from '../../Images/shos3.jpg'
import s4 from '../../Images/shos4.JPG'
import s5 from '../../Images/shos5.jpg'

const AboutPage = () => {

    return (
        <div>
            <div>
            <div className="sliderBox">
                <span><h1>Book an Appointment</h1></span>
                 <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                    <img src={s1} className="d-block w-100" alt="whoweare/Images.png" />
                    </div>
                    <div className="carousel-item">
                      <img src={s2} className="d-block w-100" alt="whoweare/Images.png" />
                    </div>
                    <div className="carousel-item active">
                      <img src={s3} className="d-block w-100" alt="whoweare/Images.png" />
                    </div>
                    <div className="carousel-item">
                      <img src={s4} className="d-block w-100" alt="whoweare/Images.png" />
                    </div>
                    <div className="carousel-item">
                     <img src={s5} className="d-block w-100" alt="whoweare/Images.png" />
                    </div>
                  </div>
                 </div>
                </div>
            </div>

            <form>
             
            </form>
        </div>
    )
}

export default AboutPage;