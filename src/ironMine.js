const Node = require("./node")

class IronMine extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "IronMine"
        this.cost = 100
        this.description = "An Iron mine can be placed anywhere, it will continually make 1 Iron Ore per tick."
        this.childNames = ["IronSmelter"]
        this.receivable = []
        this.powerCost = 5
    }


    updateRSS () {
        this.resources["ironOre"] ||=  this.resources["ironOre"] = 0
        this.resources["ironOre"]++
    }
}

module.exports = IronMine