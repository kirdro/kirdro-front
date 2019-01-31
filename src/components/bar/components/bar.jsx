import React from 'react';
import { useGlobal } from 'reactn';

const Bar = () => {
    const [statusBar, onClick] = useGlobal('statusBar');
    const [isPressedButtonMenu, onClick2] = useGlobal('isPressedButtonMenu');
    const onClickBarItem = (status) => (e) => {
        onClick(status)
        onClick2(false)
    }
    return (
        <div className={'bar'}>
            <div className="itemBar"><span onClick={onClickBarItem('Work')}>Work</span></div>
            <div className="itemBar"><span onClick={onClickBarItem('Services')}>Services</span></div>
            <div className="itemBar"><span onClick={onClickBarItem('About')}>About</span></div>
            <div className="itemBar"><span onClick={onClickBarItem('Contact')}>Contact</span></div>
            <div className="itemBar"><span onClick={onClickBarItem('Blog')}>Blog</span></div>
            <div className="itemBar"><span onClick={onClickBarItem('Galerry')}>Gelarry</span></div>
            
        </div>
    );
};

export default Bar;
