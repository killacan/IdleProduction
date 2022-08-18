import './styles/main.scss'
// import laughing from './assets/laughing.svg'

const Game = require("./game.js")
const IronMine = require("./ironMine.js")
// const Node = require("./node.js'")

window.Game = Game;
window.IronMine = IronMine;
// window.Node = Node;



document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById('game-canvas');

    let el = document.querySelector(".grid");
    let iro = document.getElementById('total-iron-ore');
    let iroing = document.getElementById('total-iron-ingots');
    let steing = document.getElementById('total-steel-ingots')
    let num = document.getElementById('total-money');
    let bui = document.querySelector('.builder-menu');
    let info = document.getElementById('description');
    let sell = document.querySelector('.sell');
    let music = document.querySelector('.music')
    let copOre = document.getElementById('total-copper-ore');
    let copIng = document.getElementById('total-copper-ingots');
    let copwire = document.getElementById('total-copper-wire')
    let toolsnum = document.getElementById('total-tools')
    let tutbutton = document.getElementById('tut-button')
    let tutbox = document.querySelector('.tutorial-holder')
    // let ctx = canvas.getContext("2d")

    // ctx.moveTo(0, 0);
    // ctx.lineTo(200, 100);
    // ctx.stroke();
    
    // Box width
    let bw = 600;
    // Box height
    let bh = 600;
    // Padding
    let p = 10;

    // let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    function drawBoard(){
        for (let x = 0; x <= bw; x += 60) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (let x = 0; x <= bh; x += 60) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }
        context.strokeStyle = "white";
        context.stroke();
    }

    drawBoard();

    tutbutton.addEventListener("click", closeBox)

    function closeBox () {
        tutbox.classList.add("hidden")
    }

    // console.log(rss)

    console.log(music)
    let gamev = new Game(el, iro, num, bui, info, sell, iroing, steing, music, copOre, copIng, copwire, toolsnum);
    // gamev.map.startingMarket()
    // gamev.updateTotalMoney(num)

})