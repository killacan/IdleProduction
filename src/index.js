import "./styles/main.scss";
// import laughing from './assets/laughing.svg'

const Game = require("./game.js");
const IronMine = require("./ironMine.js");
// const Node = require("./node.js'")

window.Game = Game;
window.IronMine = IronMine;
// window.Node = Node;

document.addEventListener("DOMContentLoaded", function () {
  let canvas = document.getElementById("game-canvas");

  let el = document.querySelector(".grid");
  let iro = document.getElementById("total-iron-ore");
  let iroing = document.getElementById("total-iron-ingots");
  let steing = document.getElementById("total-steel-ingots");
  let num = document.getElementById("total-money");
  let bui = document.querySelector(".builder-menu");
  let info = document.getElementById("description");
  let sell = document.querySelector(".sell");
  let music1 = document.querySelector(".music1");
  let music2 = document.querySelector(".music2");
  let copOre = document.getElementById("total-copper-ore");
  let copIng = document.getElementById("total-copper-ingots");
  let copwire = document.getElementById("total-copper-wire");
  let toolsnum = document.getElementById("total-tools");
  let tutbutton1 = document.getElementById("tut-button1");
  let tutbox1 = document.querySelector(".tutorial-holder1");
  let tutbutton2 = document.getElementById("tut-button2");
  let tutbox2 = document.querySelector(".tutorial-holder2");
  let tutbutton3 = document.getElementById("tut-button3");
  let tutbox3 = document.querySelector(".tutorial-holder3");
  let tutbutton4 = document.getElementById("tut-button4");
  let tutbox4 = document.querySelector(".tutorial-holder4");
  let tutbutton5 = document.getElementById("tut-button5");
  let buildcost = document.getElementById("build-cost");
  let dots = document.getElementById("circle-canvas");
  let unlimitedPOWER = document.getElementById("total-power");
  let powerCost = document.getElementById("power-cost");
  let selebldg = document.getElementById("selected-building");
  let bldicon = document.querySelector(".buildings");
  let tooltip = document.getElementById("tooltip");
  let tooltiptext = document.getElementById("tooltip-text");
  let tooltiptext2 = document.getElementById("tooltip-text2");
  let tooltiptext3 = document.getElementById("tooltip-text3");
  let tooltiptext4 = document.getElementById("tooltip-text4");
  let allImg = document.querySelectorAll("img");
  let volup = document.querySelector(".volume-up");
  let voldown = document.querySelector(".volume-down");
  let sound = document.querySelector(".sound");
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
  function drawBoard() {
    for (let x = 0; x <= bw; x += 60) {
      context.moveTo(0.5 + x + p, p + 45);
      context.lineTo(0.5 + x + p, bh + p + 45);
    }

    for (let x = 0; x <= bh; x += 60) {
      context.moveTo(p, 0.5 + x + p + 45);
      context.lineTo(bw + p, 0.5 + x + p + 45);
    }
    context.strokeStyle = "#A01D26";
    context.stroke();
  }

  drawBoard();

  tutbutton1.addEventListener("click", closeBox);
  tutbutton2.addEventListener("click", closeBox);
  tutbutton3.addEventListener("click", closeBox);
  tutbutton4.addEventListener("click", closeBox);
  tutbutton5.addEventListener("click", skipTut);

  let closeClick = 0

  function closeBox() {
    if (closeClick === 0) {
      tutbox1.classList.add("hidden");
      tutbox2.classList.remove("hidden");
    } else if (closeClick === 1) {
      tutbox2.classList.add("hidden");
      tutbox3.classList.remove("hidden");
    } else if (closeClick === 2) {
      tutbox3.classList.add("hidden");
      tutbox4.classList.remove("hidden");
    } else {
      tutbox4.classList.add("hidden");
    }
    closeClick += 1
  }

  function skipTut() {
    tutbox1.classList.add("hidden");
  }

  const errorTooltip = document.createElement("div");
  errorTooltip.classList.add("error-tooltip");
  document.body.appendChild(errorTooltip);

  let gamev = new Game(
    el,
    iro,
    num,
    bui,
    info,
    sell,
    iroing,
    steing,
    music1,
    music2,
    copOre,
    copIng,
    copwire,
    toolsnum,
    buildcost,
    dots,
    unlimitedPOWER,
    powerCost,
    selebldg,
    bldicon,
    tooltip,
    tooltiptext,
    tooltiptext2,
    tooltiptext3,
    tooltiptext4,
    allImg,
    volup,
    voldown,
    sound,
    errorTooltip
  );
  // gamev.map.startingMarket()
  // gamev.updateTotalMoney(num)
});
