import React from 'react';
import {PhotoSwipe} from 'react-photoswipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBurn} from '@fortawesome/free-solid-svg-icons'





const ItemLightBox = ({data, onClickItem, index}) => {
    let componentTags = null
    if (data.tags !== undefined) {
        componentTags = data.tags.map((data, index) => {
            return (<div className={'boxTag'} key={`Tag${index}`}>
                <span>{data.title}</span>
            </div>)
        })
    }
    const onClickItemTemp = () => {
        onClickItem(index)
    }
    return (
        <div onClick={onClickItemTemp} className={'itemLightBox'}>
            <img src={data.src} alt=""/>
            <div className="boxTags">
                {componentTags}
            </div>

            <div className="boxtext">
                <div className="icon">
                    <FontAwesomeIcon icon={faBurn} size={'2x'} />
                </div>
                <h2>{data.name}</h2>
                <span>{
                    data.discr
                }</span>
            </div>
        </div>
    );
};

export default ItemLightBox;
