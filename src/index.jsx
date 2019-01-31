
import ReactDOM from 'react-dom'
import './main.less'
import React, { useState,memo } from 'react';

import styled from 'styled-components'
import MainButton from './components/buttonMenu'

import { setGlobal,useGlobal } from 'reactn';
import BarMain from './components/bar'
import WorkBox from './components/work'
import Mainservices from "./components/services";
import MainGallery from "./components/gallery";
import MetaTags from 'react-meta-tags';
import ReactAudioPlayer from 'react-audio-player';
import Song from './songs/bensound-dreams.mp3'

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
    else if (statusBar === 'Services') {
        componentInContent = <Mainservices/>
    }
    else if (statusBar === 'Galerry') {
        componentInContent = <MainGallery/>
    }
    let somePlaylist = {
        name: 'Song',
        src: Song
    }
    console.log('>>>>>', Song)
    return (
        <div className={'main'}>
            <MetaTags>
                <title>Kirdro</title>
                <link rel="apple-touch-icon" sizes="57x57" href="./img/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="./img/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="./img/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="./img/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="./img/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="./img/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="./img/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="./img/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="./img/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="./img/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="./img/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon-16x16.png" />
                <link rel="manifest" href="./img/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="./img/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
            </MetaTags>
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

                <ReactAudioPlayer
                    src={Song}
                    autoPlay
                    loop
                    volume={0.3}
                    controls={true}
                />

            </div>
        </div>
    );
});

setGlobal({
    isPressedButtonMenu: false,
    statusBar:'Main'
});



ReactDOM.render(<MainComponent/>, document.getElementById('ReactComponent'));

