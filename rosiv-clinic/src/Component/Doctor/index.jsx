import React from './style.css'
import Admin from '../../Images/Admin.png'
import './style.css'
import CheckIcon from '@mui/icons-material/Check';

const Doctor = () => {

    return (
        <div>
            <div className="doctorSay">
                <div className="image">
                    <img src={Admin} alt="doctor.png"/>
                    <span>
                        <h5>Dr.Rauphl</h5>
                        <p>Urologist</p>
                    </span>
                </div>
                <label className='rightDetails'>
                     <span>
                        <h1>how to get back to natural life after treated from health meidcare</h1>
                        <p>
                            At Rosivylle, there's no one size-fits allapproach to mental health.
                            We tailor our care plans to fit each person's unique needs.
                        </p>
                    </span>
                    <span className='healthHack'>
                        <h5><CheckIcon /> Complete daily task</h5>
                        <h5><CheckIcon /> Drinking water</h5>
                        <h5><CheckIcon /> care of time management</h5>
                        <h5><CheckIcon /> quality time with family</h5>
                        <h5><CheckIcon /> healthy food</h5>
                        <h5><CheckIcon /> gym workout</h5>
                        <h5><CheckIcon /> daily morning work</h5>
                        <h5><CheckIcon /> good sleep</h5>
                    </span>
                    <small>
                    </small>
                        <button className='button'><a href="/contactpage">Contact Us</a></button>
                </label>
            </div>
        </div>
    )
}
export default Doctor;