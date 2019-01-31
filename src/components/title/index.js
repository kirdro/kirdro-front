import React from 'react';
import Title from "./components/title";

const MainTitle = ({text}) => {
    return (
        <div className={'MainTitle'}>
            <Title text={text}/>
        </div>
    );
};

export default MainTitle;
