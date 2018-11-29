module.exports = {
    formatResource: (url, params = {}, urlAppend = '') => {
        if (params != {}) {
            Object.keys(params).forEach(function (key) {
                if (url.indexOf(':' + key) >= 0) {
                    url = url.replace(':' + key, params[key]);
                    delete params[key];
                }
            });
        }

        url = url.replace(/\/$/, '');
        url = url.replace(/\/:.*/, '');

        return {
            url: url + urlAppend,
            params: params
        };
    }
};
