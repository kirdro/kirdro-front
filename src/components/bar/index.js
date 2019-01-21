
import Bar from "./components/bar";
import styled from 'styled-components'
import React, { useState,memo } from 'react';
import { useGlobal } from 'reactn';
import './style/bar.less'

const BarMainDiv = styled.div`
opacity: ${props => props.isPressed ? 1 : 0};
pointer-events: ${props => props.isPressed ? 'auto' : 'none'};
`


const BarMain = memo(() => {
    const [isPressed, onClick] = useGlobal('isPressedButtonMenu');
    return (
        <BarMainDiv isPressed={isPressed} className={'boxBar'}>
            <Bar/>
        </BarMainDiv>
    );
});

export default BarMain;
