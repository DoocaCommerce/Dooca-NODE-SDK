const Controller = require('./controller');

class Orders extends Controller {
    constructor() {
        super();
        this.url = '/order/:id';
    }
}

module.exports = Orders;