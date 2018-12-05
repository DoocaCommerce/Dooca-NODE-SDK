const dooca = require('..');
const mock = require('./mock');

(async () => {

    dooca.configure(mock.configure);

    // get orders
    try {
        const getData = await dooca.orders.get({ limit: 2, offset: 0 });
        console.log(getData);
    } catch (e) {
        console.log(e.response.data);
    }

    // update order status
    // try {
    //     const response = await dooca.orders.updateStatus(651, 'approved');
    //     console.log(response);
    // } catch (e) {
    //     console.log(e.response.data);
    // }

})();