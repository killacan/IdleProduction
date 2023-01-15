const Node = require("./node")

class CopperSmelter extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "CopperSmelter"
        this.cost = 400
        this.description = "Copper Smelter will take Copper Ore at 5 copper Ore per 5 ticks, and convert it to Copper Ingots. Copper Ingots are much more valuable than Iron Ingots."
        this.parentNames = ["CopperMine"]
        this.childNames = ["CopperExtruder"]
        this.receivable = ["copperOre"]
        this.requestTotal = {copperOre: 10}
        this.loops = 0
        this.powerCost = 10
    }


    updateRSS () {
        this.loops++
        if (this.loops > 5) {
            this.loops = 0
            this.resources["copperIngots"] ||=  this.resources["copperIngots"] = 0
            if (this.resources["copperOre"] >= 5) {
                this.resources["copperOre"] -= 5
                this.resources["copperIngots"] += 1
            }
        }
    }
}

module.exports = CopperSmelter