class Map {

    constructor (el) {
        // going to set up the grid. 
        this.grid = Map.setupGrid();
        this.el = el
        this.setupBoard()
        
    }

    setupGrid () {
        // initial buildings with resources
        const grid = [];

        for (let i = 0; i < 10; i++ ) {
            grid.push([]); 
            for (let j = 0; j < 10; j++) {
                grid[i].push(null);
            }
        }

        return grid
    }

    setupBoard() {
        let ul = document.createElement('ul');
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            let li = document.createElement('li');
            li.dataset.pos = JSON.stringify([i,j]);
            ul.append(li);
          }
        }
        
        this.el.append(ul);
    
      }

    placeBuilding(pos, type) {
        // take in the type of building. Create the building and place it on the map.
        if (!this.isEmptyPos(pos)) {
            throw new BuildError('Not an empty spot!')
        }

        this.grid[pos[0]][pos[1]] = type
    }

    findBuilding(pos) {
        
    }

    isEmptyPos(pos){
        if (!Map.isValidPos(pos)) {
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