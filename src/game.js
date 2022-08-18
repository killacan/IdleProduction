const Map = require("./map")
const IronMine = require("./ironMine")
const Market = require("./market")
const IronSmelter = require("./ironSmelter")
const SteelMill = require("./steelMill")

class Game {

    constructor (el, iro, num, build, info, sell, iroing, steing, music) {
        this.map = new Map(el, iro, num, build)
        this.el = el
        this.iro = iro
        this.build = build
        this.sell = sell 
        this.iroing = iroing
        this.steing = steing
        this.info = info
        this.music = music
        this.toggle = false
        this.toggleMusic = false
        this.descriptions = {IronMine: new IronMine().description, IronSmelter: new IronSmelter().description, SteelMill: new SteelMill().description }
        this.handleClickGrid = this.handleClickGrid.bind(this)
        this.handleClickBuild = this.handleClickBuild.bind(this)
        this.handleClickSell = this.handleClickSell.bind(this)
        this.bindEvents(); 
        this.tick()
        this.updateTotalMoney(num, this.map.iro)
        this.musicHandler()
        

    }

    bindEvents() {
        this.el.addEventListener("click", this.handleClickGrid)
        this.build.addEventListener("click", this.handleClickBuild)
        this.sell.addEventListener("click", this.handleClickSell)
    }

    musicHandler() {
        let backgroundMusic = new Audio(); 
        backgroundMusic.src = "src/assets/4Harris Heller-Not-Enough-Movement.wav"
        let backgroundOn = false
        this.music.addEventListener("click",function() {
            if (backgroundOn === false) {
                backgroundOn = true
                backgroundMusic.play()
            } else {
                backgroundOn = false
                backgroundMusic.pause()
            }
        })
    }

    handleClickGrid(e) {
        const ele = e.target; 
        that = this
        console.log(ele)
        console.log(ele.tagName.toLowerCase() === 'li');
        if (ele.tagName.toLowerCase() === 'li'&& this.map.selectedBuilding) {
            // we have a pos and a name of building. building name is a string. 
            let pos = JSON.parse(ele.dataset.pos)
            // this.updateParentsAndChildren()
            // console.log(JSON.parse(ele.dataset.pos))
            // console.log(JSON.parse(this.map.selectedBuilding))
            if (JSON.parse(this.map.selectedBuilding) === "IronMine") {
                this.map.placeBuilding(pos, new IronMine(pos))
                // this.updateParentsAndChildren()
                console.log(this.map.getBuilding(pos))
                console.log(this.map.allBuildings)

            } else if (JSON.parse(this.map.selectedBuilding) === "IronSmelter") {
                this.map.placeBuilding(pos, new IronSmelter(pos))
                // this.updateParentsAndChildren()
                console.log(this.map.getBuilding(pos))
                console.log(this.map.allBuildings)

            } else if (JSON.parse(this.map.selectedBuilding) === "SteelMill") {
                this.map.placeBuilding(pos, new SteelMill(pos))
            } else if (JSON.parse(this.map.selectedBuilding) === "CopperOreMine") {
                
            } else if (JSON.parse(this.map.selectedBuilding) === "CopperSmelter") {
                
            } else if (JSON.parse(this.map.selectedBuilding) === "CopperExtruder") {
                
            } else if (JSON.parse(this.map.selectedBuilding) === "ToolFactory") {
                
            } else if (JSON.parse(this.map.selectedBuilding) === "Market") {
                this.map.placeBuilding(pos, new Market(pos))
                console.log(that.map.getBuilding(pos))
                console.log(that.map.allBuildings)
            }
            
        }
    }

    handleClickBuild(e) {
        const ele = e.target;
        console.log(e.target.parentNode)
        if (ele.tagName.toLowerCase() === 'img') {
            this.map.selectedBuilding = ele.parentNode.dataset.build
            console.log(this.map.selectedBuilding)
        }
    }

    handleClickSell(e) {
        const ele = e.target;
        console.log(ele.tagName)

        if (ele.tagName.toLowerCase() === "button") {
            this.toggle = true
        }
    }

    handleClickMusic(e) {
        const ele = e.target;
        console.log(ele.tagName)

        if (ele.tagName.toLowerCase() === "button" && this.toggleMusic) {
            this.toggleMusic = false
        } else {
            this.toggleMusic = true
        }
    }

    tick () {
        setInterval(() => {
            this.updateTotalMoney(this.map.num, this.map.iro)
            this.map.setupBoard()
            // console.log(Object.values(this.map.allBuildings))
            Object.values(this.map.allBuildings).flat().forEach((ele) => ele.updateRSS())
            this.map.updateRSS()
            this.transferToMarket()
            this.transferToChildren()
            // console.log(this.map.allRSS["ironOre"])
            // console.log(this.map.allRSS)
            //call production
            //call transport
            // totals up resources
            // this.map.money = this.map.money += 1
        }, 1000)
    }

    updateTotalMoney (mon) {
        mon.innerHTML = this.map.money
        if (!this.map.allRSS["ironOre"]) {
            this.map.iro.innerHTML = 0
        } else {
            this.map.iro.innerHTML = this.map.allRSS["ironOre"]
        }
        // console.log(new IronMine().description)

        if (!!this.map.selectedBuilding) {
            this.info.innerHTML = this.descriptions[JSON.parse(this.map.selectedBuilding)]
        }
        
        !this.map.allRSS["ironIngots"] ? this.iroing.innerHTML = 0 : this.iroing.innerHTML = this.map.allRSS["ironIngots"]
        !this.map.allRSS["steelIngots"] ? this.steing.innerHTML = 0 : this.steing.innerHTML = this.map.allRSS["steelIngots"]
    }

    transferToMarket () {
        if (this.toggle) {
            Object.values(this.map.allBuildings).flat().forEach ((building) => {
                let rssArr = Object.entries(building.resources);
                console.log(rssArr, "rssArr");
                rssArr.forEach((sub) => {
                    if (sub[0] === "ironOre") {
                        building.resources["ironOre"] = 0;
                        this.map.money += sub[1];
                    } else if (sub[0] === "ironIngots") {
                        building.resources["ironIngots"] = 0; 
                        this.map.money += (sub[1] * 6)
                    } else if (sub[0] === "steelIngots") {
                        building.resources["steelIngots"] = 0;
                        this.map.money += (sub[1] * 70)
                    }
                });
                // iterate through building rss, and subtract from total in building. 
                // calculate distance from the market. 
            });
        }
        this.toggle = false
    }

    transferToChildren() {
        // iterate through buildings(buildArr). check parents (parA) (later in order of proximity) and subtract resources until requirements met. 
        let bldgArr = Object.values(this.map.allBuildings).flat()
        bldgArr.forEach(building => {
            let parA = this.map.allBuildings[building.parentName]
            // console.log(parA, building)
            if (!parA) { return }
            for (let i = 0; i < parA.length; i++) {
                let requestTotal = Object.entries(building.requestTotal).flat()
                let requestRSS = requestTotal[0]
                if (!building.resources[requestRSS]) {building.resources[requestRSS] = 0}
                let requestAmount = requestTotal[1] - building.resources[requestRSS]
                // console.log(requestTotal[1], requestTotal[0] , "requestChecker ")
                // debugger

                if (!parA[i].resources[requestRSS]) {
                    // console.log("check1")
                } else if (parA[i].resources[requestRSS] < requestAmount) {
                    // console.log("check2")
                    building.resources[requestRSS] += parA[i].resources[requestRSS]
                    parA[i].resources[requestRSS] = 0
                } else if (parA[i].resources[requestRSS] > requestAmount) {
                    building.resources[requestRSS] += requestAmount
                    parA[i].resources[requestRSS] -= requestAmount
                }
            }
        })  
    }
}

module.exports = Game;