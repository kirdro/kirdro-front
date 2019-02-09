import React from 'react';
import {useGlobal} from "reactn";
import '../style/style_article.less';
var moment = require('moment');

const Article = () => {
    const [article, getArticle] = useGlobal('article');
    // console.log('>>>>>>>>>>>>', article)
    let componentsArticle = article.discr.map((data, index) => {
        // console.log('>>>>>>>>>>>>!!!!!!', data)
        if (typeof data === 'string') {
            return(
                <div key={`itemArticle${index}`} className={'boxTitle itemArticle'}>
                    <p>{data}</p>
                </div>
            )
        }
        else if (typeof data === 'number') {
            // console.log('>>>>>>>>>>>>!!!!!!', article.image[data])
            return(
                <div className={'boxTitle itemArticleImage'}>
                    <img src={'http://api.kirdro.site' + article.Image[data].url} alt=""/>
                </div>
            )
        }
        return(
            null
        )
    })
    return (
        <div className={'Article'}>
            <div className="contentArticle">
                <img className={'mainImage'} src={'http://api.kirdro.site' + article.mainImage.url} alt=""/>
                <span className={'author'}>{article.author}</span>
                <div className={'boxTitle itemArticle'}>
                    <h1>{article.title}</h1>
                    <span>{moment(article.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss")}</span>
                </div>
                {componentsArticle}
            </div>
        </div>
    );
};

export default Article;
