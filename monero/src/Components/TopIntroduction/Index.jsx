import React from 'react';
import style from './style.module.css'
import backgroundVideo from '../../Images/Bg-mp4.mp4'

const TopIntroduction = (props) => {

    return (
        <div>
            <section className={style.topContainer}>
                <video autoPlay muted loop className={style.myVideo}>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className={style.introduction}>
                    <label>
                        <h3>Monero Means Money</h3>
                        <p>Private, decentralized cryptocurrency that keeps your finances confidential and secure.</p>
                       <span className={style.btnBox}>
                            <button className={style.aboutBtn}>About monero</button>
                        <button className={style.joinBtn}>join community</button>
                       </span>
                    </label>
                </div>
            </section>
        </div>
    )
}

export default TopIntroduction;