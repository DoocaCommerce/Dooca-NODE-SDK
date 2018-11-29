const Controller = require('./controller');

class Customers extends Controller {
    constructor() {
        super();
        this.url = '/customer/:id';
    }
}

module.exports = Customers;