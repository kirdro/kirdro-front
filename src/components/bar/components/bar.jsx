import React from 'react';
import { useGlobal } from 'reactn';

const Bar = () => {
    const [statusBar, onClick] = useGlobal('statusBar');
    const [isPressedButtonMenu, onClick2] = useGlobal('isPressedButtonMenu');
    const [ buttons, setButtons ] = useGlobal('buttonsMenu');
    const onClickBarItem = (status) => (e) => {
        onClick(status)
        onClick2(false)
    }
    let componentButton = null;
    if (buttons !== null) {
        componentButton = buttons.map((data, index) => {
            if (data.isShow) {
                return (<div key={`itemButtons${index}`} className="itemBar"><span onClick={onClickBarItem(data.title)}>{data.title}</span></div>)
            }
            return null;
        })
    }
    return (
        <div className={'bar'}>
            {componentButton}
            
        </div>
    );
};

export default Bar;
