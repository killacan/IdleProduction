const Node = require("./node")

class CopperSmelter extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "CopperSmelter"
        this.cost = 500
        this.description = "Copper Smelter will take Copper Ore at 5 copper Ore per 5 seconds, and convert it to Copper Ingots. Copper Ingots are much more valuable than Iron Ingots."
        this.parentNames = ["CopperMine"]
        this.childNames = ["Copper Extruder"]
        this.receivable = ["copperOre"]
        this.requestTotal = {copperOre: 5}
        this.loops = 0
    }


    updateRSS () {
        // console.log(this.resources, "inside RSS update Copper Smelter")
        this.loops++
        if (this.loops > 5) {
            this.loops = 0
            this.resources["copperIngots"] ||=  this.resources["copperIngots"] = 0
            if (this.resources["copperOre"] >= 5) {
                this.resources["copperOre"] -= 5
                this.resources["copperIngots"] += 1
            }
        }
        // console.log(this.resources["copperOre"])
        // console.log(this.map)
    }
}

module.exports = CopperSmelter