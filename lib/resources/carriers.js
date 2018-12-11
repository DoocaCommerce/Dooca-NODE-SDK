const Controller = require('./controller');

class Carrier extends Controller {
    constructor() {
        super();
        this.url = '/carrier/:id';
    }
}

module.exports = Carrier;