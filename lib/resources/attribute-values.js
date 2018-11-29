const Controller = require('./controller');

class AttributesValues extends Controller {
    constructor() {
        super();
        this.url = '/attribute/:id';
    }
}

module.exports = AttributesValues;