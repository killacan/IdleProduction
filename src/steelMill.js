const Node = require("./node")

class SteelMill extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        this.name = "SteelMill"
        this.cost = 1000
        this.description = "A Steel Mill will turn 10 of your Iron Ingots into valuable Steel!"
        this.parentName = "IronSmelter"
        this.childName = "ToolFactory"
        this.receivable = ["ironIngots"]
        this.requestTotal = {ironIngots: 10}
    }

    updateRSS() {
        console.log(this.resources, "I am inside the steel mill")
        this.resources["steelIngots"] ||= this.resources["steelIngots"] = 0
        if (this.resources["ironIngots"] >= 10) {
            this.resources["ironIngots"] -= 10
            this.resources["steelIngots"] += 1
        }
    }
}
module.exports = SteelMill