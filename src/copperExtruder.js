const Node = require("./node")

class CopperExtruder extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "CopperExtruder"
        this.cost = 1000
        this.description = "A Copper Extruder will turn 5 of your Copper Ingots into 3 Copper Wire every 10 ticks!"
        this.parentNames = ["CopperSmelter"]
        this.childNames = ["ToolFactory"]
        this.receivable = ["copperIngots"]
        this.requestTotal = {copperIngots: 10}
        this.loops = 0
        this.powerCost = 15
    }

    updateRSS() {
        this.loops++
        if (this.loops > 10) {
            this.loops = 0
            this.resources["copperWire"] ||= this.resources["copperWire"] = 0
            if (this.resources["copperIngots"] >= 5) {
                this.resources["copperIngots"] -= 5
                this.resources["copperWire"] += 3
            }
        }
    }
}
module.exports = CopperExtruder