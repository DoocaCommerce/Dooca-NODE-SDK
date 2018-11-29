const dooca = require('..');
const mock = require('./mock');

(async () => {

    dooca.configure(mock.configure);

    try {

        const getData = await dooca.orders.get({ limit: 2, offset: 0 });
        console.log(getData);

    } catch (e) {
        console.log(e.toString());
    }

})();