const Node = require("./node")

class WindMill extends Node {

    constructor(pos){
        super(pos)
        this.nodepos = pos
        this.name = "WindMill"
        this.cost = 100
        this.description = "basic power production, does not require a fuel input, provides a very slow, but automatic income of 1 money per second."
        this.power = 100

    }

    updateRSS() {

    }
}

module.exports = WindMill