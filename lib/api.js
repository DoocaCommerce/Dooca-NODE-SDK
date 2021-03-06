const axios = require('axios');

let options = {};
let url = 'https://api.dooca.store';

exports.configure = (params) => {

    if (params.mode && (params.mode === 'production')) {
        url = 'https://api-v4.dooca.com.br';
    }

    if (params.url) {
        url = params.url;
    }

    options = {
        baseURL: url,
        headers: {
            'Shop-ID': params.shopId,
            'Authorization': 'Bearer ' + params.token
        }
    };
};

exports.request = () => {
    return axios.create(options);
};