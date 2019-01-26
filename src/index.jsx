
import ReactDOM from 'react-dom'
import './main.less'
import React, { useState,memo } from 'react';

import styled from 'styled-components'
import MainButton from './components/buttonMenu'

import { setGlobal,useGlobal } from 'reactn';
import BarMain from './components/bar'
import WorkBox from './components/work'

let DivBoxWithBackground = styled.div`
filter: ${props => props.isPressed ? 'blur(10px)' : 'blur(0px)'};
`
let DivBoxImage = styled.div`
background: url("https://pp.userapi.com/c317731/v317731253/2ae9/hzLyIA9dGfA.jpg") no-repeat center;
background-size: 100%;
background-position: bottom;
display: ${props => props.statusBar === 'Main' ? 'block' : 'none'};
`
const MainComponent = memo(() => {
    const [isPressed, onClick] = useGlobal('isPressedButtonMenu');
    const [statusBar, onClick2] = useGlobal('statusBar');

    const onClickLogo = () => {
        onClick2('Main')
    }

    let componentInContent
    if (statusBar === 'Main') {
        componentInContent = null;
    }
    else if (statusBar === 'Work') {
        componentInContent = <WorkBox/>
    }
    console.log('>>>>>', statusBar, componentInContent)
    return (
        <div className={'main'}>
            <div className="container">
                <DivBoxWithBackground isPressed={isPressed} className="box">
                    <div onClick={onClickLogo} className="logo"></div>
                    <DivBoxImage statusBar={statusBar} className="boxImage">
                        <div className="titleSite">
                            <div className={'title'}>
                                <h1>Kirdro</h1>
                                <span>Hello! it's my site. My life, my style!</span>
                            </div>
                        </div>
                    </DivBoxImage>

                    <div className="content">
                        {componentInContent}
                    </div>
                </DivBoxWithBackground>
                <BarMain/>
                <MainButton/>

            </div>
        </div>
    );
});

setGlobal({
    isPressedButtonMenu: false,
    statusBar:'Main'
});



ReactDOM.render(<MainComponent/>, document.getElementById('ReactComponent'));

