import React, { useEffect } from 'react'
import './style.css'
import bladder from '../../Images/bladder.jpg'
import incontience from '../../Images/incontinence.jpg'
import kidney from '../../Images/kidney.jpg'
import prostate from '../../Images/prostate.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Conditions = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <div className="stateConditions">
                <h5 data-aos="fade-right" data-aos-duration="1800">
                    We help people living with
                </h5>
                <h5 data-aos="fade-right" data-aos-duration="2000">a variety of health conditions.</h5>
                <div className="cardBox">
                    <div className="card" data-aos="fade-in"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="3000">
                        <div className="card-img">
                            <img src={incontience} alt=""/>
                        </div>
                        <div className="card-body">
                            <h1>Stress Incontinence</h1>
                            <p> Un-comforting the human body causing stress.</p>
                            <p>Caused by the urinary gland</p>
                        </div>
                        <a href='/whatwedo' className='button'>View Conditions</a>
                    </div>
                    <div className="card" data-aos="fade-in"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="3000">
                        <div className="card-img">
                            <img src={bladder} alt=""/>
                        </div>
                        <div className="card-body">
                            <h1> Over-active bladder</h1>
                            <p>Urge Incontinence and Overactive Bladder</p>
                            <p>Both in male and female</p>
                        </div>
                        <a href='/whatwedo' className='button'>View Conditions</a>
                    </div>
                    <div className="card" data-aos="fade-in"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="3000">
                        <div className="card-img">
                            <img src={prostate} alt=""/>
                        </div>
                        <div className="card-body">
                            <h1>prostate Conditions</h1>
                            <p>Pain from the prostate gland and other part</p>
                            <p>With similar symptoms.</p>
                        </div>
                        <a href='/whatwedo' className='button'>View Conditions</a>
                    </div>
                    <div className="card" data-aos="fade-in"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="3000">
                        <div className="card-img">
                            <img src={kidney} alt=""/>
                        </div>
                        <div className="card-body">
                            <h1>Kidney Stone</h1>
                            <p>Sudden pain from the loin to the groinFeeling sick.</p>
                            <p>possibly vomitingBloody</p>
                        </div>
                        <a href='/whatwedo' className='button'>View Conditions</a>
                    </div>

                </div>
                <div className="meetUs">
                    <div className="innerMeetUsBox" data-aos="fade-in" data-aos-duration="2000">
                        <h1>When should you see a urologist?</h1>
                        <p>Primary care doctor can treat you for mild urinary problems, such as a UTI. <br/>
                        Your primary care doctor may refer you to a urologist if your symptoms <br/>
                        don’t improve or if you have a condition that needs  <br/>
                        treatments they can’t provide. <br/>
                        </p>
                        <button className='button'><a href='/appointment'>Book Appointment</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Conditions;