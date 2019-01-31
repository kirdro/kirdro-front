import React,{ useState,memo , useEffect} from 'react';
import ItemLightBox from "./item_light_box";
import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipe,PhotoSwipeGallery} from 'react-photoswipe';
// import "react-image-lightbox/style.css";


import Gallery from 'react-photo-gallery';

let options = {

    index:0,
    showHideOpacity:true,
    showAnimationDuration:1,
    bgOpacity:0.5,
    loop:true,
    mainClass:'boxPhotoSwipe',
    history:false
}

const LightBox = memo(({listImages}) => {
    let [isOpen, onClose] = useState(false)




    const onClick = () => {
        // console.log('>>>>>>>>')
        onClose(false);
    }
    const onClickItem = (e, data) => {
        // console.log('>>>>>', )
        options.index = data.index;
        onClose(true);

    }
    let componentImagesNode = listImages.map((data, index) => {
        return (<ItemLightBox onClickItem={onClickItem} data={data} index={index} key={`itemLight${index}`} />)
    })


    return (
        <div className={'lightBox'}>
            {/*{componentImagesNode}*/}
            <Gallery photos={listImages} onClick={onClickItem} />
            <PhotoSwipe isOpen={isOpen} items={listImages} options={options} onClose={onClick}/>


        </div>
    );
});

export default LightBox;
