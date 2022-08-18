const Node = require("./node")

class Market extends Node {

    constructor (pos) {
        super(pos)
        this.nodepos = pos
        // this.map = super.map
        this.name = "Market"
        this.cost = 500
        this.description = "having a market makes your goods more valuable"
        // this.map = this.updateRSS.bind(this)
    }

    updateRSS() {
        // console.log(this)
        // this.money += 100
    }
}

module.exports = Market