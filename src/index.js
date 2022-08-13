import './styles/main.scss'
// import laughing from './assets/laughing.svg'

const Game = require("./game.js")
const IronMine = require("./ironMine.js")
// const Node = require("./node.js'")

window.Game = Game;
window.IronMine = IronMine;
window.Node = Node;



document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById('game-canvas')

    let context = canvas.getContext("2d")


})