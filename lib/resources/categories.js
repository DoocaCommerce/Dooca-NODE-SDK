const api = require('../api');
const utils = require('../utils');
const Controller = require('./controller');

class Categories extends Controller {
    constructor() {
        super();
        this.url = '/category/:id';
    }

    /**
     * Get category tree
     * @param {Object} args 
     */
    getTree(args) {
        let { url, params } = utils.formatResource(this.url, args, '/tree');
        console.log('categories.getTree', url);
        return super.getDefault(url, params);
    }
}

module.exports = Categories;
