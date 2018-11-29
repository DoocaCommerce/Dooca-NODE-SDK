const Controller = require('./controller');

class Products extends Controller {
    constructor() {
        super();
        this.url = '/product/:id';
    }
}

module.exports = Products;