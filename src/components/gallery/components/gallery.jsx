
import '../style/gallery.less'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LightBoxMain from "../../light_box";
import MainTitle from "../../title";


const listImages = [
    {
        src: "https://pp.userapi.com/c846419/v846419419/d21d1/DM6QDdKsX4w.jpg",
        thumbnail: "https://pp.userapi.com/c846419/v846419419/d21d1/DM6QDdKsX4w.jpg",
        // thumbnailWidth: 271,
        // thumbnailHeight: 320,
        tags: [{value: "Nature", title: "Nature | Flowers"}],
        caption: "Orange Macro (Tom Eversley - isorepublic.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    {
        src: "https://pp.userapi.com/c845420/v845420537/103679/Vlm6K4oPawk.jpg",
        thumbnail: "https://pp.userapi.com/c845420/v845420537/103679/Vlm6K4oPawk.jpg",
        // thumbnailWidth: 320,
        // thumbnailHeight: 190,
        tags: [{value: "Architecture", title: "Architecture | Outdoors"},
            {value: "Industrial", title: "Industrial"}],
        caption: "286H (gratisography.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    {
        src: "https://pp.userapi.com/c850736/v850736849/1404e/_8WgnYzzh8I.jpg",
        thumbnail: "https://pp.userapi.com/c850736/v850736849/1404e/_8WgnYzzh8I.jpg",
        // thumbnailWidth: 320,
        // thumbnailHeight: 148,
        tags: [{value: "People", title: "People"},
            {value: "Architecture", title: "Architecture | Outdoors"},
            {value: "Industrial", title: "Industrial"}],
        caption: "315H (gratisography.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    {
        src: "https://pp.userapi.com/c841630/v841630921/6bfc9/LWt0oOdBZKk.jpg",
        thumbnail: "https://pp.userapi.com/c841630/v841630921/6bfc9/LWt0oOdBZKk.jpg",
        // thumbnailWidth: 320,
        // thumbnailHeight: 213,
        caption: "201H (gratisography.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    {
        src: "https://pp.userapi.com/c845124/v845124921/6efd1/7cTqQOGc9RY.jpg",
        thumbnail: "https://pp.userapi.com/c845124/v845124921/6efd1/7cTqQOGc9RY.jpg",
        // thumbnailWidth: 248,
        // thumbnailHeight: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    // {
    //     src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
    //     thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
    //     // thumbnailWidth: 320,
    //     // thumbnailHeight: 113,
    //     tags: [{value: "People", title: "People"},
    //         {value: "Industrial", title: "Industrial"}],
    //     caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    // },
    {
        src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
        // thumbnailWidth: 313,
        // thumbnailHeight: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)",
        w: 1200,
        h: 900,
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        // thumbnailWidth: 320,
        // thumbnailHeight: 213,
        tags: [{value: "Nature", title: "Nature | Flowers"}],
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
        w: 1200,
        h: 900,
    },
    {
        src: "https://pp.userapi.com/c846419/v846419419/d21d1/DM6QDdKsX4w.jpg",
        thumbnail: "https://pp.userapi.com/c846419/v846419419/d21d1/DM6QDdKsX4w.jpg",
        // thumbnailWidth: 271,
        // thumbnailHeight: 320,
        tags: [{value: "Nature", title: "Nature | Flowers"}],
        caption: "Orange Macro (Tom Eversley - isorepublic.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    {
        src: "https://pp.userapi.com/c845420/v845420537/103679/Vlm6K4oPawk.jpg",
        thumbnail: "https://pp.userapi.com/c845420/v845420537/103679/Vlm6K4oPawk.jpg",
        // thumbnailWidth: 320,
        // thumbnailHeight: 190,
        tags: [{value: "Architecture", title: "Architecture | Outdoors"},
            {value: "Industrial", title: "Industrial"}],
        caption: "286H (gratisography.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    {
        src: "https://pp.userapi.com/c850736/v850736849/1404e/_8WgnYzzh8I.jpg",
        thumbnail: "https://pp.userapi.com/c850736/v850736849/1404e/_8WgnYzzh8I.jpg",
        // thumbnailWidth: 320,
        // thumbnailHeight: 148,
        tags: [{value: "People", title: "People"},
            {value: "Architecture", title: "Architecture | Outdoors"},
            {value: "Industrial", title: "Industrial"}],
        caption: "315H (gratisography.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    {
        src: "https://pp.userapi.com/c841630/v841630921/6bfc9/LWt0oOdBZKk.jpg",
        thumbnail: "https://pp.userapi.com/c841630/v841630921/6bfc9/LWt0oOdBZKk.jpg",
        // thumbnailWidth: 320,
        // thumbnailHeight: 213,
        caption: "201H (gratisography.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    {
        src: "https://pp.userapi.com/c845124/v845124921/6efd1/7cTqQOGc9RY.jpg",
        thumbnail: "https://pp.userapi.com/c845124/v845124921/6efd1/7cTqQOGc9RY.jpg",
        // thumbnailWidth: 248,
        // thumbnailHeight: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    // {
    //     src: "https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg",
    //     thumbnail: "https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
    //     // thumbnailWidth: 320,
    //     // thumbnailHeight: 113,
    //     tags: [{value: "People", title: "People"},
    //         {value: "Industrial", title: "Industrial"}],
    //     caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
    // },
    {
        src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
        // thumbnailWidth: 313,
        // thumbnailHeight: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        // thumbnailWidth: 320,
        // thumbnailHeight: 213,
        tags: [{value: "Nature", title: "Nature | Flowers"}],
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
        title: 'Title',
        discr: 'Orange Macro (Tom Eversley - isorepublic.com)',
        w: 1200,
        h: 900,
    }
]

class GalleryBox extends Component {

    render() {
        let image1 = new Image()
        // image1.src = 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg';
        // console.log('>>>>>>>>>>', image1.height)
        listImages.forEach((item) => {
            image1.src = item.src;
            item.w = image1.width;
            item.h = image1.height;
            item['width'] = image1.width;
            item['height'] = image1.height;
        })
        // console.log('>>>>>>>>>>', listImages)
        return (
            <div className={'galleryBox'}>
                <MainTitle text={'My photo gallery'}/>
                <LightBoxMain listImages={listImages}/>
            </div>
        );
    }
}




export default GalleryBox;
