const Node = require("./node")

class IronSmelter extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "IronSmelter"
        this.cost = 250
        this.description = "Iron Smelter will take Iron Ore at 5 iron Ore per tick, and convert it to Iron Ingots"
        this.parentNames = ["IronMine"]
        this.childNames = ["SteelMill"]
        this.receivable = ["ironOre"]
        this.requestTotal = {ironOre: 10}
        this.powerCost = 10
    }


    updateRSS () {
        this.resources["ironIngots"] ||=  this.resources["ironIngots"] = 0
        if (this.resources["ironOre"] >= 5) {
            this.resources["ironOre"] -= 5
            this.resources["ironIngots"] += 1
        }
    }
}

module.exports = IronSmelter