const PremiumCustomer = require("./premium-customer");

class Store {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        if (!item.isValid()) throw new Error();
        this.items.push(item);
        return this.items;
    }

    getStoreItemPrices() {
        return this.items.map(item => `${item.name}: $${item.price}`);
    }

    doTransaction(customer, item) {
        const itemToPurchase = this.items.find(storeItem => storeItem.name === item);

        if (customer instanceof PremiumCustomer) {
            itemToPurchase.price -= 1;
        }

        if (itemToPurchase.price > customer.money) throw new Error();
        this.items.splice(this.items.indexOf(itemToPurchase), 1);
        customer.money -= itemToPurchase.price;
        customer.purchases.push(itemToPurchase.name);
    }
}

module.exports = Store;