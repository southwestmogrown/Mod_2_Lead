const User = require('./user');

class Patient extends User {
    constructor(username, month, day, year) {
        super(username, month, day, year);
        this.insurance = null;
    }

    setInsurance(provider) {
        this.insurance = provider;
    }

    getInsurance() {
        return this.insurance;
    }
}

module.exports = Patient;