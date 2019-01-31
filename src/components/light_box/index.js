import React from 'react';
import LightBox from "./components/light_box";
import './style/light_box_style.less'

const LightBoxMain = ({listImages}) => {
    return (
        <div className={'mainLightBox'}>
            <LightBox listImages={listImages}/>
        </div>
    );
};

export default LightBoxMain;
