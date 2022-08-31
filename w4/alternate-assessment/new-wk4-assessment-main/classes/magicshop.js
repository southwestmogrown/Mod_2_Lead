class MagicShop {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    greeting() {
        let greeting = 'Welcome! We have many items for sale.';
        this.items.map(item => greeting += ` ${item.name} for ${item.price} gold.`)
        return greeting;
    }

    static sellItem(shop, adventurer, item) {
        if (item.price > adventurer.gold) throw new Error(`Can not sell ${item.name}, ${adventurer.name} does not have enough gold.`)
        adventurer.gold -= item.price;
        adventurer.items.push(item);
        shop.items.splice(shop.items.indexOf(item), 1);
    }
}

module.exports = { MagicShop };