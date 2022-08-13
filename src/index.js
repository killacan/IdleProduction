import './styles/main.scss'
// import laughing from './assets/laughing.svg'

const Game = require("./game.js")
const IronMine = require("./ironMine.js")
// const Node = require("./node.js'")

window.Game = Game;
window.IronMine = IronMine;
// window.Node = Node;



document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById('game-canvas')

    let el = document.querySelector(".game-canvas")
    // let ctx = canvas.getContext("2d")

    // ctx.moveTo(0, 0);
    // ctx.lineTo(200, 100);
    // ctx.stroke();
    // Box width
    
    var bw = 600;
    // Box height
    var bh = 600;
    // Padding
    var p = 10;

    // var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    function drawBoard(){
    for (var x = 0; x <= bw; x += 60) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 60) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "white";
    context.stroke();
    }

    drawBoard();

    let game = new Game(el)

    game.map.setupBoard()
})