const dooca = require('../');
const mock = require('./mock');

(async () => {

    dooca.configure(mock.configure);

    try {

        const params = { limit: 1, offset: 0 };
        const getData = await dooca.attributes.get(params);
        console.log(getData);

    } catch (e) {
        console.log(e.toString());
    }

})();