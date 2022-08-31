class StoreItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    isValid() {
        if (!this.name || this.price < 0) {
            return false;
        }
        return true;
    }
}

module.exports = StoreItem;