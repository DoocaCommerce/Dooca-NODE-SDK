const querystring = require('querystring');
const api = require('./api');

module.exports = function () {

    function configure(params) {
        api.configure(params);
    }

    return {
        configure: configure,
        brands: new (require('./resources/brands')),
        colors: new (require('./resources/colors')),
        categories: new (require('./resources/categories')),
        attributes: new (require('./resources/attributes')),
        attributeValues: new (require('./resources/attribute-values')),
        products: new (require('./resources/products')),
        variations: new (require('./resources/variations')),
        orders: new (require('./resources/orders')),
        fulfillments: new (require('./resources/fulfillments')),
        stocks: new (require('./resources/stocks')),
        carriers: new (require('./resources/carriers')),
    };

};