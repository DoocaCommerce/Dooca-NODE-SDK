const Controller = require('./controller');

class Stocks extends Controller {
    constructor() {
        super();
        this.url = '/stock/:id';
    }
}

module.exports = Stocks;