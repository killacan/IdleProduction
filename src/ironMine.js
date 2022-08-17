const Node = require("./node")

class IronMine extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "IronMine"
        this.cost = 200
        this.description = "an Iron mine can be placed anywhere, it will continually make 1 Iron Ore per second"
        this.childName = "IronSmelter"
        this.receivable = []
    }


    updateRSS () {
        this.resources["ironOre"] ||=  this.resources["ironOre"] = 0
        this.resources["ironOre"]++
        console.log(this.resources["ironOre"], "working in the mine")
        // console.log(this.map)
    }
}

module.exports = IronMine