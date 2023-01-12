const Node = require("./node")

class Dot {
    
    constructor (pos1, pos2) {
        this.startPos = pos1
        this.endPos = pos2
        this.name = "Dot"
        this.dposX = (this.startPos[0] - this.endPos[0]) / 60;
        this.dposY = (this.startPos[1] - this.endPos[1]) / 60;
        this.theRealStartPos = pos1
    }

    move () {
        // console.log(this.startPos, this.endPos, "inside the move function")
        this.startPos
        this.endPos
        
        this.startPos = [this.startPos[0] - this.dposX, this.startPos[1] - this.dposY];
    }

    draw (ctx) {
        // console.log("inside the draw function")
        ctx.beginPath();
        ctx.arc(this.startPos[1], this.startPos[0], 4, 0, 2 * Math.PI);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.closePath();
    }
}

module.exports = Dot