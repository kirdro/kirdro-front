class Action {
    static getPhotos(array, func) {
        array.forEach((item) => {
            let image1 = new Image()
            image1.src = 'http://api.kirdro.site' + item.image.url;
            image1.onload = function() {
                // alert(this.width + 'x' + this.height);
                // console.log('>>>>>>>>>>', this.naturalWidth,this.height)
                item.h = image1.naturalHeight;
                item['width'] = image1.naturalWidth / 100;
                item['height'] = image1.naturalHeight / 100;
                item.w = image1.naturalWidth;
            }
            item.w = image1.width;
            item.src = 'http://api.kirdro.site' + item.image.url;
            item.h = image1.height;
            item['width'] = image1.width / 100;
            item['height'] = image1.height / 100;
            item['thumbnail'] = 'http://api.kirdro.site' + item.image.url
            item['caption'] = item.discription

        })
        func(array)
    }
    static getBlog(array, func) {
        func(array)
    }
    static getLogo(array, func) {
        func(array)
    }
    static getTtitleHomePage(array, func) {
        func(array)
    }
    static getButtons(array, func) {
        func(array)
    }
    static getBlogSections(array, func) {
        func(array)
    }
    static getSkills(array, func) {
        func(array)
    }
    static getAbout(array, func) {
        func(array)
    }
}
export default Action;