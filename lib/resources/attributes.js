const Controller = require('./controller');

class Attributes extends Controller {
    constructor() {
        super();
        this.url = '/attribute-group/:id';
    }
}

module.exports = Attributes;