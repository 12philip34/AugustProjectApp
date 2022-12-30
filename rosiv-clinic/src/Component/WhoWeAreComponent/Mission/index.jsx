import React from 'react'
import './style.css'


const Mission = () => {

    return (
        <div>
            <div className="gridMission">
                <div className="gridOne">
                    <div className="leftMission">
                        <div className="innerLeft">
                            <p>
                                At Rosivylle Clinic & Urology Centre,
                                we provide holistic care for a wide range of urological conditions.
                                We offer open General surgeries and utilize endoscopic and laser
                                technologies to treat diverse urological
                                disorders like benign prostrate enlargement, bladder,
                                ureteric and kidney stones.
                            </p>
                            <p>
                                Other urological sub-specialty care we provide includes:
                            </p>
                            <ul>
                                <li>Oncology (kidney, bladder, prostrate cancers)</li>
                                <li>Urinary tract reconstruction</li>
                                <li>Pediatric Urological surgerie</li>
                                <li>Male infertility among others</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightMission">
                        <h1>What we do</h1>
                    </div>
                </div>
                <div className="gridTwo">
                    <div className="rightMission">
                        <h1>Our vision</h1>
                    </div>
                    <div className="leftMission">
                        <div className="innerLeft">
                            <p>
                                In addition to subspecialty urological care,
                                we also manage various medical and surgical conditions
                                cutting across other medical specialties.
                                At Rosivylle, we are focused on wellness.
                                We strive to enhance the quality of life, not mere sickness management.
                                Our healthcare delivery system is attuned to providing transparent,
                                inclusive, cost-effective services that are in harmony with
                                the growing local needs.
                            </p>
                            <p className='vision'>
                                To provide personalized and highest quality medical care.
                            </p>
                            <h3>CORE VALUES</h3>
                            <ul>
                                <li>Professionalism</li>
                                <li>Passion</li>
                                <li>Collaboration</li>
                                <li>Accountability and Quality</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="gridThree">
                    <div className="leftMission">
                        <div className="innerLeft">
                           <h3>Our mission provides a framework to achieve our vision.</h3>
                            <ul>
                                <li>Patient: is paramount</li>
                                <li>Performance: is standardized</li>
                                <li>Principle: is to be a socially responsible</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rightMission">
                        <h1>Our mission</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;