const Controller = require('./controller');

class Stocks extends Controller {
    constructor() {
        super();
        this.url = '/attribute/:id';
    }
}

module.exports = AttributesValues;