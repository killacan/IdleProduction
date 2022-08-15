class Map {

    constructor (el, rss) {
        // going to set up the grid. 
        this.grid = this.setupGrid();
        this.el = el
        this.rss = rss
        this.setupBoard()
        // this.setupRSS()
        this.selectedBuilding = null
  
        
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

    // setupRSS() {
    //     let ul = document.createElement('ul');
    //     for (let i = 0; i < 1; i++) {
    //         let li = document.createElement('li');
    //         ul.append(li);
            
    //     }

    //     this.rss.append(ul);
    // }

      
      
  
      

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

// function drawBoard(){
//     var context = canvas.getContext("2d");

//     let canvas = document.getElementById('game-canvas')
//     var bw = 600;
//     // Box height
//     var bh = 600;
//     // Padding
//     var p = 10;

//   for (var x = 0; x <= bw; x += 60) {
//       context.moveTo(0.5 + x + p, p);
//       context.lineTo(0.5 + x + p, bh + p);
//   }

//   for (var x = 0; x <= bh; x += 60) {
//       context.moveTo(p, 0.5 + x + p);
//       context.lineTo(bw + p, 0.5 + x + p);
//   }
//   context.strokeStyle = "white";
//   context.stroke();
//   }

const BuildError = function (msg) {this.meg = msg; };

module.exports = BuildError;
module.exports = Map