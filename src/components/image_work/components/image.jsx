import React from 'react';
import '../style/stale_image.less'

const Image = () => {
    return (
        <div className={'contentImage'}>
            <img src="https://cdn-images-1.medium.com/max/2600/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg" alt=""/>
            <div className="borderBox">
                <div className="border"></div>
            </div>
        </div>
    );
};

export default Image;
