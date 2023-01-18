const Node = require("./node")

class WindMill extends Node {

    constructor(pos){
        super(pos)
        this.nodepos = pos
        this.name = "WindMill"
        this.cost = 50
        this.description = "Basic power production, does not require a fuel input. Power is needed to run machines. Every extra 200 power provides 1 income per tick"
        this.power = 50
        this.powerCost = 0

    }

    updateRSS() {

    }
}

module.exports = WindMill