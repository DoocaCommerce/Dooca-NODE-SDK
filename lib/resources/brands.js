const Controller = require('./controller');

class Brand extends Controller {
    constructor() {
        super();
        this.url = '/brand/:id';
    }
}

module.exports = Brand;