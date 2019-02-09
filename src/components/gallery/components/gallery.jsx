
import '../style/gallery.less'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LightBoxMain from "../../light_box";
import MainTitle from "../../title";
import { setGlobal,useGlobal } from 'reactn';



const GalleryBox = () => {
    const [ photos, setPhotos ] = useGlobal('gallery');
    // image1.src = 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg';


    return (
        <div className={'galleryBox'}>
            <MainTitle text={'My photo gallery'}/>
            <LightBoxMain listImages={photos}/>
        </div>
    );
};







export default GalleryBox;
