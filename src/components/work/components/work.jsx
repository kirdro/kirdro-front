import React from 'react';
import MainImageWork from "../../image_work";



const Work = () => {
    return (
        <div className={'workContent'}>
            <div className="itemGrid">
                <h1>
                    Clients & Ventures
                </h1>
                <p>
                    Envy Labs is located at the busy intersection of happy clients and successful products. We were advised not to build dead center of a major thoroughfare, but eventually the honking becomes background noise, and, darn it, the location is amazing and there are no HOA fees.
                </p>
            </div>
            <div className="itemGrid">
                <div className="imageBoxItem">
                    <MainImageWork/>
                </div>
            </div>
            <div className="itemGrid"></div>
            <div className="itemGrid"></div>
            <div className="itemGrid"></div>
            <div className="itemGrid"></div>
            <div className="itemGrid"></div>
            <div className="itemGrid"></div>
        </div>
    );
};

export default Work;
