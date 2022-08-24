const Node = require("./node")

class CopperMine extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "CopperMine"
        this.cost = 400
        this.description = "A copper mine can be placed anywhere, it will continually make 1 Copper Ore per 5 seconds. Copper is much more valuable than Iron."
        this.childNames = ["CopperSmelter"]
        this.receivable = []
        this.loops = 0
        this.powerCost = 5
    }


    updateRSS () {
        this.loops++ 
        if (this.loops > 5) {
            this.loops = 0
            this.resources["copperOre"] ||=  this.resources["copperOre"] = 0
            this.resources["copperOre"]++
            // console.log(this.resources["copperOre"], "working in the mine")
            // console.log(this.map)
        }
    }
}

module.exports = CopperMine