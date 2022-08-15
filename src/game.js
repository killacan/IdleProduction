const Map = require("./map")

class Game {

    constructor (el) {
        this.money = 1000
        this.map = new Map(el)
        this.el = el
        // initial money value
        // map
        // initial resources
        // all buildings
        this.bindEvents(); 

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
            //this.update_total_money() -- for later
            //call production
            //call transport
            // totals up resources
        }, 1000)
    }

    updateTotalMoney () {
        let e = document.getElementById("total_money");
        e.innerHTML = this.money
    }
}

module.exports = Game;