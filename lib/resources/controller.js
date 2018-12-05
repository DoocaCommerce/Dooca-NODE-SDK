const utils = require('../utils');
const api = require('../api');

class Controller {
    constructor() { }

    async getDefault(url, params) {
        const { data } = await api.request().get(url, { params });
        return data;
    }

    async putDefault(url, args) {
        const { data } = await api.request().put(url, args);
        return data;
    }

    async postDefault(url, args) {
        const { data } = await api.request().post(url, args);
        return data;
    }

    /**
     * Get result list from api
     * @param {Object} args
     */
    get(args) {
        let { url, params } = utils.formatResource(this.url, args);
        console.log('controller.GET', url, params);
        return this.getDefault(url, params);
    }

    /**
     * Get first result
     * @param {Object} args
     */
    getFirst(args) {
        if (typeof args !== 'object') {
            args = { id: args };
        }
        let { url } = utils.formatResource(this.url, args);
        console.log('controller.GETFIRST', url);
        return this.getDefault(url);
    }

    /**
     * Create a new register
     * @param {Object} data
     * @param {Function} callback
     */
    create(data, callback) {
        let { url, params } = utils.formatResource(this.url);
        console.log('controller.CREATE', url, params);
        return this.postDefault(url, data);
    }

    /**
     * Update register
     * @param {Object} args id or { id: id }
     * @param {Object} data body send
     * @param {Function} callback
     */
    update(args, data, callback) {
        if (typeof args !== 'object') {
            args = { id: args };
        }
        let { url, params } = utils.formatResource(this.url, args);
        console.log('controller.UPDATE', url, data);
        return this.putDefault(url, data);
    }

    /**
     * Remove register
     * @param {Object} args
     * @param {Function} callback
     */
    async delete(args, callback) {
        if (typeof args !== 'object') {
            args = { id: args };
        }
        let { url } = utils.formatResource(this.url, args);
        console.log('controller.DELETE', url);
        const { data } = api.request().delete(url);
        return data;
    }
}

module.exports = Controller;