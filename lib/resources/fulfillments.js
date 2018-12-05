const Controller = require('./controller');

class Fulfillments extends Controller {
    constructor() {
        super();
        this.url = '/fulfillment/:id';
        this.status = [
            'attended',
            'invoiced',
            'shipped',
            'delivered'
        ];
    }

    /**
     * @param {String} status
     */
    checkStatus(status) {
        return this.status.indexOf(status) >= 0;
    }

    /**
     * Update status of a fulfillment
     * @param {String} status in: attended | invoiced | shipped | delivered
     * @param {Object} data
     */
    updateStatus(id, status, data) {
        status = status.toLowerCase();

        if (!id) {
            throw Error('Invalid ID: please add a id of fulfillment');
        }

        if (!data) {
            throw Error('Invalid data: please add a data body of fulfillment');
        }

        if (!this.checkStatus(status)) {
            throw Error('Invalid status, must contains: ' + this.status.join(' | '));
        }

        const args = { id };
        let { url } = utils.formatResource(url, args);
        url += '/' + status;
        console.log('fulfillments.updateStatus', status, data);
        return super.putDefault(url, data);
    }

}

module.exports = Fulfillments;