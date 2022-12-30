import React, { useEffect } from 'react'
import './style.css'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Slider = (props) => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <section className='Slidecontainer'>
                <div className="innerBox">
                    <div className="left">
                        <span data-aos="fade-right" data-aos-duration="1000"><SentimentVeryDissatisfiedIcon/>Depressed?</span>
                        <h1 data-aos="fade-right" data-aos-duration="1200">There's no one face</h1>
                        <h1 data-aos="fade-right" data-aos-duration="1400"> to mental health</h1>
                        <h1 data-aos="fade-right" data-aos-duration="1600">conditions</h1>
                        <h5 data-aos="fade-right" data-aos-duration="1800">
                            At Rosivylle, there's no one size-fits
                            all approach to mental health.
                            We tailor our care plans to fit each person's unique needs.
                        </h5>
                        <label className='providerLabel' data-aos="fade-right" data-aos-duration="2000">
                            <button>
                               <a href="/appointment"> Find a Provider</a>
                            </button>
                            <h6>
                                <PhoneInTalkIcon/>
                                (234)90-321-222-456
                            </h6>
                        </label>
                    </div>
                    <div className="right">
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Slider;