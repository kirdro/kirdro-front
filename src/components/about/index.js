import React from 'react';
import {useGlobal} from "reactn";
import About from "./components/about";

const MainAbout = ({
                       statusBar
}) => {
    const [ about, setAbout ] = useGlobal('about');
    if (statusBar === 'About') {
        return (
            <div className={'MainAbout'}>
                <About about={about}/>
            </div>
        );
    }
    return null;

};

export default MainAbout;
