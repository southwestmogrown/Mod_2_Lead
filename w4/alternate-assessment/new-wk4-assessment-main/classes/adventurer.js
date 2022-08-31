class Adventurer {
    constructor(name, level=1) {
        this.name = name;
        this.level = level;
        this.gold = 0;
        this.items = [];
    }

    addGold(amount) {
        this.gold += amount;
    }

    subtractGold(amount) {
        if (this.gold - amount < 0) throw new Error("Not enough gold to subtract.")
        this.gold -= amount;
    }
}

module.exports = { Adventurer };