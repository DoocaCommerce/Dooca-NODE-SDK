const dooca = require('..');
const mock = require('./mock');

(async () => {

    dooca.configure(mock.configure);

    try {

        // const getTree = await dooca.categories.getTree();
        // console.log(getTree);

        const getData = await dooca.categories.get({ limit: 1 });
        console.log(getData);

    } catch (e) {
        console.log(e.toString());
    }

})();