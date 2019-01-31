import React from 'react';
import '../style/title_style.less'

const Title = ({text}) => {
    return (
        <div className={'title'}>
            <h2>{text}</h2>
        </div>
    );
};

export default Title;
