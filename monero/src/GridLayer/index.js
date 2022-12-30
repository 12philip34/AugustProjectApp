import React from 'react';
import style from './style.module.css'

function GridLayer (props) {
    return (
        <div>
            <div className={style.gridContainer}>
                <div className={style.leftLayer}>
                    <h3 className={style.header}>{props.header}</h3>
                    <p className={style.paragraph}>{props.paragraph}</p>
                    <button className={style.button}><a href="">{props.button}</a></button>
                </div>
                <div className={style.rightLayer}>
                    <img src={props.Image} alt="image.png"/>
                </div>
            </div>
        </div>
    );
}

export default GridLayer;