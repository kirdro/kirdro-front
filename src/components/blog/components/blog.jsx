import React from 'react';
import MainTitle from "../../title";
import '../style/blog_style.less'
import Item from "./item_list_blogs";
import {useGlobal} from "reactn";

const Blog = () => {
    const [ blog, setBlog ] = useGlobal('blog');

    let componentBlogs = null;
    if (blog.lenght !== 0) {
        componentBlogs = blog.map((data, index) => {

            return (<Item key={`itemBlogs${index}`} data={data}/>)
        })
    }
    return (
        <div className={'listBlogs'}>
            <div className="flexBoxBlogs">
                {componentBlogs}
            </div>

        </div>
    );
};

export default Blog;
