const Map = require("./map")

class Game {

    constructor (el, rss, num) {
        this.money = 1000
        this.map = new Map(el, rss)
        this.el = el
        this.num = num
        // initial money value
        // map
        // initial resources
        // all buildings
        this.bindEvents(); 
        this.tick()
        this.updateTotalMoney(num)

    }

    bindEvents() {
        this.el.addEventListener("click", this.handleClick)
    }

    handleClick(e) {
        const ele = e.target; 
        
        console.log(ele.tagName.toLowerCase() === 'li');
        if (ele.tagName.toLowerCase() === 'li') {
            // going to have to add a node here. 
        }
    }

    tick () {
        setInterval(() => {
            this.updateTotalMoney(this.num)
            console.log("tick")
            console.log(this.money)
            //call production
            //call transport
            // totals up resources
            this.money = this.money += 1
        }, 1000)
    }

    updateTotalMoney (e) {
        e.innerHTML = this.money
    }
}

module.exports = Game;