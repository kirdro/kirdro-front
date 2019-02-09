import React from 'react';
import styled from 'styled-components'
import '../style/style_about.less'

const DivImageAbout = styled.div`
    height: 385px;
    background: url(${props => 'http://api.kirdro.site' + props.url}) no-repeat center;
    background-size: 63%;
    width: 100%;
    position: relative;
`

const About = ({
                   about
               }) => {
    // console.log('>>>>>>>>>',about[0])
    let url = '';
    let discription = '';
    let email = '';
    if (about !== null) {
        url = about[0].image[0].url;
        discription = about[0].discription;
        email = about[0].email;
    }
    return (
        <div className={'About'}>
            <DivImageAbout url={url} ></DivImageAbout>
            <div className="bodyAbout">
                <p>{discription}</p>
                <span>{email}</span>
            </div>
        </div>
    );
};

export default About;
