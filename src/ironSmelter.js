const Node = require("./node")

class IronSmelter extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "IronSmelter"
        this.cost = 500
        this.description = "Iron Smelter will take Iron Ore at 5 iron Ore per second, and convert it to Iron Ingots"
        this.parentName = "IronMine"
        this.childName = "SteelMill"
        this.receivable = ["ironOre"]
    }


    updateRSS () {
        this.resources["ironIngots"] ||=  this.resources["ironIngots"] = 1
        if (this.resources["ironOre"] > 5) {
            this.resources["ironOre"] -= 5
            this.resources["ironIngots"]++
        }
        // console.log(this.resources["ironOre"])
        // console.log(this.map)
    }
}

module.exports = IronSmelter