const Node = require("./node")

class Market extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        // this.map = super.map
        this.name = "Market"
        this.cost = 500
        this.description = "The market is where goods go to be sold."
        // this.map = this.updateRSS.bind(this)
    }

    updateRSS() {
        // console.log(this)
        // this.money += 100
    }
}

module.exports = Market