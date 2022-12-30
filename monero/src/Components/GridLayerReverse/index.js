import React from 'react';
import style from './style.module.css'

function GridLayer (props) {
    return (
        <div>
            <div className={style.gridContainerReverse}>
            <div className={style.rightLayerReverse}>
                <img src={props.ImageReverse} alt="image.png"/>
            </div>
                <div className={style.leftLayerReverse}>
                    <h3 className={style.headerReverse}>{props.headerReverse}</h3>
                    <p className={style.paragraphReverse}>{props.paragraphReverse}</p>
                    <button className={style.buttonReverse}><a href="">{props.buttonReverse}</a></button>
                </div>
            </div>
        </div>
    );
}

export default GridLayer;