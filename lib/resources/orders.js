const Controller = require('./controller');
const utils = require('../utils');

class Orders extends Controller {
    constructor() {
        super();
        this.url = '/order/:id';
        this.status = [
            'pending',
            'paid',
            'approved',
            'denied',
            'canceled'
        ];
    }

    /**
     * @param {String} status
     */
    checkStatus(status) {
        return this.status.indexOf(status) >= 0;
    }

    /**
     * Update status of a order
     * @param {String} status in: pending | paid | approved | denied | canceled
     * @param {Object} data
     */
    updateStatus(id, status, data = {}) {
        status = status.toLowerCase();

        if (!id) {
            throw Error('Invalid ID: please add a id of order');
        }

        if (!this.checkStatus(status)) {
            throw Error('Invalid status, must contains: ' + this.status.join(' | '));
        }

        const args = { id };

        let { url } = utils.formatResource(this.url, args);
        url += '/' + status;
        console.log('orders.updateStatus', status, data);
        return super.putDefault(url, data);
    }
}

module.exports = Orders;