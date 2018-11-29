const dooca = require('../');
const mock = require('./mock');

(async () => {

    dooca.configure(mock.configure);

    try {

        const params = {
            sort: '-id_brand',
            limit: 1,
            offset: 2,
        };

        const getData = await dooca.stocks.get(params);
        console.log(getData);

    } catch (e) {
        console.log(e.toString());
    }

})();