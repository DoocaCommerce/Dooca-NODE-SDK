const dooca = require('..');
const mock = require('./mock');

(async () => {

    dooca.configure(mock.configure);

    try {

        const getData = await dooca.attributeValues.get();
        console.log(getData);

    } catch (e) {
        console.log(e.toString());
    }

})();