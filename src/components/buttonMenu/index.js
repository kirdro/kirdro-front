
import './style/button_box.less'
import ButtonManu from './components/button'
import React, { useState,memo } from 'react';

const MainButton = memo(() => {
    return (
        <div className={'buttonMenuBox'}>
            <ButtonManu/>
        </div>
);
});

export default MainButton;
