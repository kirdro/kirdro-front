import React from 'react';
import styled from 'styled-components'
import {useGlobal} from "reactn";
var moment = require('moment');

let DivHeader = styled.div`
background: url(${props => props.url}) no-repeat center !important;
background-size: 530px !important;

    width: 100%;
    height: 209px;
    display: flex;
    justify-content: center;
    background: #fff;
    align-items: center;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`

const Item = ({data}) => {
    console.log('>>>>>>>', data)
    const [statusBar, onClick] = useGlobal('statusBar');
    const [article, getArticle] = useGlobal('article');
    const onClickBlogItem = () => {
        onClick('Blog/Article');
        getArticle(data)
    }
    return (
        <div onClick={onClickBlogItem} className={'itemListBlogs'}>
            <DivHeader url={'http://api.kirdro.site' + data.mainImage.url}  className={'headerItemBlogs'}>
                {/*<img src={'http://api.kirdro.site' + data.image[0].url} alt=""/>*/}
            </DivHeader>
            <div className="footerItemBlogs">
                <div className="meta">
                    {data.author}
                </div>
                <div className="date">
                    {moment(data.date).fromNow()}
                </div>
                <h3>
                    {data.title}
                </h3>
            </div>
        </div>
    );
};

export default Item;
