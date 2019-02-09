import React from 'react';
import Blog from "./components/blog";
import styled from 'styled-components'
import {useGlobal} from "reactn";

const DivImageBlock = styled.div`
    height: 385px;
    background: url(${props => 'http://api.kirdro.site' + props.url}) no-repeat center;
    background-size: 100%;
    width: 100%;
    position: relative;
`

const MainBlog = () => {
    const [ blogSection, setBlogSection ] = useGlobal('blogSection');
    let url = null
    if (blogSection !== null) {
        url = blogSection[0].image.url
    }

    return (
        <div className={'blogMain'}>
            <DivImageBlock url={url} className={'ImageBlock'} >
                <h1>{blogSection[0].title}</h1>
            </DivImageBlock>
            <Blog/>
        </div>
    );
};

export default MainBlog;
