const { Adventurer } = require('./adventurer');

class Hero extends Adventurer {
    constructor(name, level=10, gold=250) {
        super(name, level)
        this.gold = gold;
    }
}

module.exports = { Hero };