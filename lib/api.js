const axios = require('axios');

let options = {};
let url = 'https://api.dooca.store';

exports.configure = (params) => {

    if (params.mode && (params.mode === 'production')) {
        url = 'https://api.dooca.com.br';
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