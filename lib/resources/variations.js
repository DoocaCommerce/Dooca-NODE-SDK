const Controller = require('./controller');

class Variations extends Controller {
    constructor() {
        super();
        this.url = '/variation/:id';
    }
}

module.exports = Variations;