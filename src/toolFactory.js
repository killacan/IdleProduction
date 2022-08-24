const Node = require("./node")

class ToolFactory extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "ToolFactory"
        this.cost = 10000
        this.description = "The Tool Factory will take in Copper Ingots and Steel and turn it into tools. Tools are very valuable, but take a long time to make."
        this.parentNames = ["CopperSmelter", "SteelMill"]
        this.receivable = ["copperIngots", "steelIngots"]
        this.requestTotal = {copperIngots: 10, steelIngots: 10}
        this.loops = 0
        this.powerCost = 20
    }

    updateRSS() {
        // console.log(this.resources, "I am inside the Tool Factory")
        this.loops++
        if (this.loops > 10) {
            this.loops = 0
            this.resources["tools"] ||= this.resources["tools"] = 0
            if (this.resources["copperIngots"] >= 10 && this.resources["steelIngots"] >= 10) {
                this.resources["copperIngots"] -= 10
                this.resources["steelIngots"] -= 10
                this.resources["tools"] += 4
            }
        }
    }
}
module.exports = ToolFactory