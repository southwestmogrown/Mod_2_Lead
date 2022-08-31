class Customer {
    constructor(username) {
        this.name = username;
        this.money = 0;
        this.purchases = [];
    }

    addFunds(monies) {
        this.money += monies;
    }

    withdrawFunds(monies) {
        if (this.money - monies < 0) throw new Error();
        this.money -= monies;
    }
}

module.exports = Customer;