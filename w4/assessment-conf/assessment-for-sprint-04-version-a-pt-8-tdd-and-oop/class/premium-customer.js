const Customer = require('./customer');

class PremiumCustomer extends Customer {
    constructor(username) {
        super(username);
        this.money = 5;
    }
}

module.exports = PremiumCustomer;