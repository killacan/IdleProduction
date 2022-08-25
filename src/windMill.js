const Node = require("./node")

class WindMill extends Node {

    constructor(pos){
        super(pos)
        this.nodepos = pos
        this.name = "WindMill"
        this.cost = 100
        this.description = "basic power production, does not require a fuel input. Power is needed to run machines. Every extra 100 power provides 1 income per tick"
        this.power = 100
        this.powerCost = 0

    }

    updateRSS() {

    }
}

module.exports = WindMill