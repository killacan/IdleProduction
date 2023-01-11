const Node = require("./node")

class CoalMine extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "CoalMine"
        this.cost = 500
        this.description = "A coal mine will make coal at 5 per tick. Coal is not a very valuable resource, but is useful when combined with a Coal Power Plant or Steel Mill."
        this.childNames = ["SteelMill"]
        this.receivable = []
        this.powerCost = 5

    }


    updateRSS () {
        
        this.resources["coal"] ||=  this.resources["coal"] = 0
        this.resources["coal"] += 5
    
    }
}

module.exports = CoalMine