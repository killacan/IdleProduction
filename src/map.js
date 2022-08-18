class Map {

    constructor (el, iro, num, build) {
        this.money = 150000
        this.num = num
        this.el = el;
        this.iro = iro;
        this.build = build;
        this.selectedBuilding = null;
        this.allBuildings = {};
        this.possibleBuildings = ["IronMine", "IronSmelter", "SteelMill", "CopperMine", "CopperSmelter", "CopperExtruder", "ToolFactory", "Market"]
        this.imgPaths = {"IronMine": "src/assets/ironMine3.png", "IronSmelter": "src/assets/ironIngot2.png", "SteelMill": "src/assets/Smelter2.png", "CopperMine": "src/assets/CopperIHardlyKnowHer.png", "CopperSmelter": "src/assets/CopperIngot.png", "CopperExtruder": "src/assets/CopperWireIHardlyKnonwHer.png", "ToolFactory": "src/assets/Wrench.png", "Market": ""}
        this.allRSS = {};
        this.grid = this.setupGrid();
        this.setupBoard()
        // this.setupRSS()
        this.setupBuild()
        
        
    }
    
    setupGrid () {
        // initial buildings with resources next
        const grid = [];
        
        for (let i = 0; i < 10; i++ ) {
            grid.push([]); 
            for (let j = 0; j < 10; j++) {
                grid[i].push(null);
            }
        }

        for (let i = 0; i < this.possibleBuildings.length; i++) {
            this.allBuildings[this.possibleBuildings[i]] = []
        }
        console.log(this.allBuildings)
        return grid;
    }

    // startingMarket () {
    //     this.placeBuilding([5,5], new Market([5,5], this))
    // }

    // put in a building checker. 

    
    setupBoard() {
        testBox = document.querySelector(".grid-boxes");
        if (testBox) {
            testBox.remove();
        }
        let ul = document.createElement('ul');
        ul.classList.add('grid-boxes')
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let li = document.createElement('li');
                li.dataset.pos = JSON.stringify([i,j]);
                li.dataset.building = JSON.stringify(this.grid[i][j]);
                if (this.getBuilding([i,j])) {
                    let img = new Image();
                    img.src = this.imgPaths[this.getBuilding([i,j]).name]
                    li.append(img)
                    // console.log([i,j], this.imgPaths[this.getBuilding([i,j]).name] , "see meeeeee")
                }
                // console.log(li.dataset.building)
                ul.append(li);
            }
        }
        
    this.el.append(ul);
    
    }

    setupBuild() {

        // console.log(this.build);
        let ul = document.createElement('ul');
        for (let i = 0; i < this.possibleBuildings.length; i++) {
            let li = document.createElement('li');
            li.dataset.build = JSON.stringify(this.possibleBuildings[i]);
            let img = new Image(); 
            img.src = Object.values(this.imgPaths)[i];
            li.append(img);
            ul.append(li);
        }
        
    this.build.append(ul);
    }

    updateRSS () {
        // console.log(this.allBuildings.length > 0)
        this.allRSS = {}
        // console.log(Object.values(this.allBuildings))

        if (Object.values(this.allBuildings).flat().length > 0) {
            for (let i = 0; i < Object.values(this.allBuildings).flat().length ; i++) {
                let obRSS = Object.entries(Object.values(this.allBuildings).flat()[i].resources)
                console.log(obRSS, "obRSS")
                if (obRSS)
                for (let k = 0; k < obRSS.length; k++) {
                    if (!this.allRSS[obRSS[k][0]]) this.allRSS[obRSS[k][0]] = 0
                    this.allRSS[obRSS[k][0]] += parseInt(obRSS[k][1])
                }
                
                
            }

        }
    }

    placeBuilding(pos, type) {
        // take in the type of building. Create the building and place it on the map.
        if (!this.isEmptyPos(pos)) {
            throw new BuildError('Not an empty spot!')
        } else if (this.money < type.cost) {
            throw new BuildError('Not Enough Money!')
        } else {
            this.grid[pos[0]][pos[1]] = type;
            this.allBuildings[type.name].push(type);
            this.money -= type.cost
        }


    }

    getBuilding(pos) {
        return this.grid[pos[0]][pos[1]]
    }

    

    isEmptyPos(pos){
        if (!this.isValidPos(pos)) {
            throw new BuildError('Is not a valid spot!')
        }

        return (this.grid[pos[0]][pos[1]] === null);
    }

    isValidPos(pos) {
        return (0 <= pos[0]) && (pos[0] < 10) && (0 <= pos[1]) && (pos[1] < 10)
    }

}


const BuildError = function (msg) {this.meg = msg; };

module.exports = BuildError;
module.exports = Map