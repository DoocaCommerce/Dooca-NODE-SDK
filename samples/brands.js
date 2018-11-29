const dooca = require('../');
const mock = require('./mock');

(async () => {
    console.log('INIT');
    dooca.configure(mock.configure);

    try {

        const params = {
            sort: '-id_brand',
            limit: 1,
            offset: 0,
        };

        const getData = await dooca.brands.getFirst(168);
        console.log(getData);

    } catch (e) {
        console.log(e.toString());
    }

})();
