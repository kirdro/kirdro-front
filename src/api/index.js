


class Api {
    static getFetch (url,func,actionFunc) {
        var myInit = { method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        fetch(url, myInit).then(response => {
            // console.log('fetch', response.json());
            return response.json()
        }).then(json => {
            // console.log('>>>>>>>>>>>>', json)
            actionFunc(json,func)

        }).catch((err) => {
            // alert()
            console.log('ERRROR', err);
            // console.log('<<<<<<<<', err)
        });
    }
}

export default Api