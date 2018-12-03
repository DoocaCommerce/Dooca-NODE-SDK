const Controller = require('./controller');

class Colors extends Controller {
    constructor() {
        super();
        this.url = '/color/:id';
    }
}

module.exports = Colors;