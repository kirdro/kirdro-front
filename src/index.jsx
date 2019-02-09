
import ReactDOM from 'react-dom'
import './main.less'
import React, { useState,memo,useEffect } from 'react';

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
import MainTitle from "./components/title";
import Api from "./api";
import Action from "./actions";
import MainBlog from "./components/blog";
import MainArticle from "./components/article";
import MainSkills from "./components/skills";
import MainAbout from "./components/about";

let DivBoxWithBackground = styled.div`
filter: ${props => props.isPressed ? 'blur(10px)' : 'blur(0px)'};
`
let DivBoxImage = styled.div`
background: url("https://pp.userapi.com/c317731/v317731253/2ae9/hzLyIA9dGfA.jpg") no-repeat center;
background-size: 100%;
background-position: center;
display: ${props => props.statusBar === 'Main' ? 'block' : 'none'};
`

let DivLogo = styled.div`
  position: absolute;
  background: url(${props => props.logoTemp}) no-repeat center;
  background-size: 100%;
  width: 100px;
  height: 100px;
  left: 10px;
  cursor: pointer;
  z-index: 1;
`
const MainComponent = memo(() => {
    const [isPressed, onClick] = useGlobal('isPressedButtonMenu');
    const [statusBar, onClick2] = useGlobal('statusBar');
    const [ photos, setPhotos ] = useGlobal('gallery');
    const [ blog, setBlog ] = useGlobal('blog');
    const [ logo, setLogo ] = useGlobal('logo');
    const [ titleHomePage, settitleHomePage ] = useGlobal('titleHomePage');
    const [ buttons, setButtons ] = useGlobal('buttonsMenu');
    const [ blogSection, setBlogSection ] = useGlobal('blogSection');
    const [ skills, setSkills ] = useGlobal('skills');
    const [ about, setAbout ] = useGlobal('about');

    useEffect(() => {


        Api.getFetch('http://api.kirdro.site/photos', setPhotos, Action.getPhotos)

        Api.getFetch('http://api.kirdro.site/blogs', setBlog, Action.getBlog)
        Api.getFetch('http://api.kirdro.site/logos', setLogo, Action.getLogo)
        Api.getFetch('http://api.kirdro.site/titlehomepages', settitleHomePage, Action.getTtitleHomePage)
        Api.getFetch('http://api.kirdro.site/menubuttons', setButtons, Action.getButtons)
        Api.getFetch('http://api.kirdro.site/blogsections', setBlogSection, Action.getBlogSections)
        Api.getFetch('http://api.kirdro.site/skills', setSkills, Action.getSkills)
        Api.getFetch('http://api.kirdro.site/abouts', setAbout, Action.getAbout)

    }, []);

    // console.log('>>>>>>>>>>>', titleHomePage)

    let logoTemp = null;
    if (logo !== null) {
        logoTemp = logo[0].image.url
    }

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
    else if (statusBar === 'Skills') {
        componentInContent = <MainSkills/>
    }
    else if (statusBar === 'Gallery') {
        componentInContent = <MainGallery/>
    }
    else if (statusBar === 'Blog') {
        componentInContent = <MainBlog/>
    }
    else if (statusBar === 'Blog/Article') {
        componentInContent = <MainArticle/>
    }
    let somePlaylist = {
        name: 'Song',
        src: Song
    }

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
                <DivBoxWithBackground  isPressed={isPressed} className="box">
                    <DivLogo  logoTemp={`http://api.kirdro.site${logoTemp}`} onClick={onClickLogo} className="logo"></DivLogo>
                    <DivBoxImage statusBar={statusBar} className="boxImage">
                        <div className="titleSite">
                            <div className={'title'}>
                                <h1>{titleHomePage !== null ? titleHomePage[0].title : ''}</h1>
                                <span>{titleHomePage !== null ? titleHomePage[0].discription : ''}</span>
                            </div>
                        </div>
                    </DivBoxImage>

                    {statusBar === 'Main' ? null : <div className="content">
                        {componentInContent}
                        <MainAbout statusBar={statusBar} />
                    </div>}
                </DivBoxWithBackground>
                <BarMain/>
                <MainButton/>

                <ReactAudioPlayer
                    src={Song}
                    autoPlay={false}
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
    statusBar:'Main',
    gallery: [],
    blog: null,
    article: null,
    logo:null,
    titleHomePage:null,
    buttonsMenu:null,
    blogSection:null,
    skills:null,
    about:null
});



ReactDOM.render(<MainComponent/>, document.getElementById('ReactComponent'));

