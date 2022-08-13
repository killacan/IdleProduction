class Game {

    constructor (el) {
        this.money = 1000
        this.map = new Map(el)
        // initial money value
        // map
        // initial resources
        // all buildings

    }

    tick () {
        setInterval(() => {
            //call production
            //call transport
            // totals up resources
        }, 1000)
    }
}

module.exports = Game;