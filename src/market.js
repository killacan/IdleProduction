const Node = require("./node")

class Market extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        // this.map = super.map
        this.name = "Market"
        this.cost = 2500
        this.description = "Having a market makes your goods 20% more valuable."
        // this.map = this.updateRSS.bind(this)
        this.powerCost = 10
    }

    updateRSS() {
        // console.log(this)
        // this.money += 100
    }
}

module.exports = Market