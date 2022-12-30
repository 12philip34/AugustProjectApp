import React from 'react'
import './style.css'
import s1 from '../../Images/shos1.JPG'
import s2 from '../../Images/shos2.jpg'
import s3 from '../../Images/shos3.jpg'
import s4 from '../../Images/shos4.JPG'
import s5 from '../../Images/shos5.jpg'

const ContactPage = () => {

    return (
        <div>
            <div>
            <div className="sliderBox">
            <span><h1>Contact Us</h1></span>
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
            <div className='registerAsContainer'>
                <div className='leftSection'>
                    <div className='leftSectionInnerContainer'>
                        <label className='name'>
                           <span>
                              <label htmlFor="firstName">FirstName</label>
                            <input type="text" id='firstName' placeholder='Type here' required/>
                          </span>
                          <span>
                              <label htmlFor="lastName">LastName</label>
                            <input type="text" id='lastName' placeholder='Type here' required/>
                          </span>
                        </label>
                        <span className='email'>
                            <label htmlFor="mail"> Email</label>
                            <input type="email" id='mail' placeholder='Enter your mail' required/>
                        </span>
                           <span className='textarea'>
                                <textarea placeholder='Message here' required/>
                           </span>
                            <button>Submit</button>
                    </div>
                </div>
                <div className='rightSection'>
                    <div className='contentTwo'>
                        <h1>
                            Please, <br/>
                            feel free to contact us
                        </h1>
                        <h4>
                            #1 Ogutum Street,
                            off ConOil Filling Station, <br/>
                            Mgbuoba/NTA Road, Port Harcourt Nigeria
                        </h4>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;