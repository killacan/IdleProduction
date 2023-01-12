const Map = require("./map");
const IronMine = require("./ironMine");
const Market = require("./market");
const IronSmelter = require("./ironSmelter");
const SteelMill = require("./steelMill");
const CopperMine = require("./copperMine");
const CopperSmelter = require("./copperSmelter");
const CopperExtruder = require("./copperExtruder");
const ToolFactory = require("./toolFactory");
const WindMill = require("./windMill");
const Utils = require("./utils");

class Game {
  constructor(
    el,
    iro,
    num,
    build,
    info,
    sell,
    iroing,
    steing,
    music1,
    music2,
    copore,
    coping,
    copwire,
    toolsnum,
    buildcost,
    dots,
    unlimitedPower,
    powerCost,
    selebldg,
    bldicon,
    tooltip,
    tooltiptext,
    allImg,
    volup,
    voldown,
    sound
  ) {
    this.map = new Map(el, iro, num, build);
    this.el = el;
    this.iro = iro;
    this.build = build;
    this.sell = sell;
    this.iroing = iroing;
    this.steing = steing;
    this.info = info;
    this.music1 = music1;
    this.music2 = music2;
    this.copore = copore;
    this.coping = coping;
    this.copwire = copwire;
    this.toolsnum = toolsnum;
    this.buildcost = buildcost;
    this.dots = dots; 
    this.unlimitedPower = unlimitedPower
    this.powerCost = powerCost
    this.selebldg = selebldg
    this.toggle = false;
    this.toggleMusic = false;
    this.descriptions = {
      IronMine: new IronMine(),
      IronSmelter: new IronSmelter(),
      SteelMill: new SteelMill(),
      CopperMine: new CopperMine(),
      CopperSmelter: new CopperSmelter(),
      CopperExtruder: new CopperExtruder(),
      ToolFactory: new ToolFactory(),
      Market: new Market(),
      WindMill: new WindMill(),
    };
    this.bldicon = bldicon
    this.tooltip = tooltip
    this.tooltiptext = tooltiptext
    this.allImg = allImg
    this.volup = volup
    this.voldown = voldown
    this.sound = sound
    this.toggleSound = true
    this.handleClickGrid = this.handleClickGrid.bind(this);
    this.handleClickBuild = this.handleClickBuild.bind(this);
    this.handleClickSell = this.handleClickSell.bind(this);
    this.handleClickDragStart = this.handleDragStart.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleClickSound = this.handleClickSound.bind(this);
    this.musicHandler = this.musicHandler.bind(this);
    this.bindEvents();
    this.tick();
    this.updateTotalMoney(num, this.map.iro);
    this.musicHandler();
    this.canvasCircleAnimation();
    this.oldEle = null;
  }

  bindEvents() {
    this.el.addEventListener("mouseup", this.handleClickGrid);
    this.el.addEventListener("drop", this.handleClickGrid);
    this.build.addEventListener("dragstart", this.handleDragStart)
    this.build.addEventListener("mousedown", this.handleClickBuild);
    this.build.addEventListener("mouseover", this.handleMouseOver);
    this.build.addEventListener("mouseout", this.handleMouseOut);
    this.build.addEventListener("mousemove", this.handleMouseMove);
    this.sell.addEventListener("click", this.handleClickSell);
    this.sell.addEventListener("mouseover", this.handleMouseOver);
    this.sell.addEventListener("mouseout", this.handleMouseOut);
    this.sell.addEventListener("mousemove", this.handleMouseMove);
    this.sound.addEventListener("click", this.handleClickSound)
  }

  musicHandler() {
    let backgroundMusic = new Audio();
    backgroundMusic.src = "src/assets/4Harris Heller-Not-Enough-Movement.wav";
    backgroundMusic.loop = true;
    let backgroundOn = false;
    backgroundMusic.volume = 0.3;
    this.music1.addEventListener("click", () => {
      backgroundOn = true;
      backgroundMusic.play();
      this.music1.classList.add("hidden");
      this.music2.classList.remove("hidden");

    });
    this.music2.addEventListener("click", () => {
        backgroundOn = false;
        backgroundMusic.pause();
      this.music2.classList.add("hidden");
      this.music1.classList.remove("hidden");
    });
    this.volup.addEventListener("click", () => {
      if (backgroundMusic.volume < 1) {
        backgroundMusic.volume += 0.1;
      }
    });
    this.voldown.addEventListener("click", () => {
      if (backgroundMusic.volume > 0) {
        backgroundMusic.volume -= 0.1;
      }
    });

  }

  handleClickSound() {
    if (this.toggleSound) {
      this.toggleSound = false
    } else {
      this.toggleSound = true
    }
  }

  // this function is what builds the map, when you click on a square, it will build the building that is selected in the build menu
  handleClickGrid(e) {
    const ele = e.target;
    let buildSound = new Audio();
    buildSound.src = "src/assets/Ratchet.wav"
    buildSound.loop = false;
    buildSound.volume = 0.2;
    that = this;
    if (ele.tagName.toLowerCase() === "li" && this.map.selectedBuilding) {
      // we have a pos and a name of building. building name is a string.
      let pos = JSON.parse(ele.dataset.pos);
      if (JSON.parse(this.map.selectedBuilding) === "IronMine") {
        this.map.placeBuilding(pos, new IronMine(pos));
      } else if (JSON.parse(this.map.selectedBuilding) === "IronSmelter") {
        this.map.placeBuilding(pos, new IronSmelter(pos));
      } else if (JSON.parse(this.map.selectedBuilding) === "SteelMill") {
        this.map.placeBuilding(pos, new SteelMill(pos));
      } else if (JSON.parse(this.map.selectedBuilding) === "CopperMine") {
        this.map.placeBuilding(pos, new CopperMine(pos));
      } else if (JSON.parse(this.map.selectedBuilding) === "CopperSmelter") {
        this.map.placeBuilding(pos, new CopperSmelter(pos));
      } else if (JSON.parse(this.map.selectedBuilding) === "CopperExtruder") {
        this.map.placeBuilding(pos, new CopperExtruder(pos));
      } else if (JSON.parse(this.map.selectedBuilding) === "ToolFactory") {
        this.map.placeBuilding(pos, new ToolFactory(pos));
      } else if (JSON.parse(this.map.selectedBuilding) === "Market") {
        this.map.placeBuilding(pos, new Market(pos));
      } else if (JSON.parse(this.map.selectedBuilding) === "WindMill") {
        this.map.placeBuilding(pos, new WindMill(pos));
      } else if (JSON.parse(this.map.selectedBuilding) === "CoalMine") {
        
      }

      if (this.toggleSound) {
        buildSound.play();
      }
    } else if (ele.tagName.toLowerCase() === "img") {
      this.map.removeBuilding(JSON.parse(ele.parentNode.dataset.pos));
    }

    
  }

  // this function is what selects the building in the build menu
  handleClickBuild(e) {
    const ele = e.target;
    if (ele.tagName.toLowerCase() === "img") {
      this.map.selectedBuilding = ele.parentNode.dataset.build;
    }

    // I am doing this here to "select" the current selected building
    ele.parentNode.classList.add("selected");

    // this is to remove "selected" from the previusly selected building
    // without removing it from the current selected building
    if (this.oldEle && ele.tagName.toLowerCase() === "img" && this.oldEle !== ele) {
      this.oldEle.classList.remove("selected");
      this.oldEle.parentNode.classList.remove("selected");
    }

    // I need to save the current selected building so that I can remove it later if needed.
    if (ele.tagName.toLowerCase() === "img") {
      this.oldEle = ele;
    }

  }

  handleMouseOver(e) {
    const ele = e.target;
    if (ele.tagName.toLowerCase() === "img") {
      this.tooltiptext.innerText = this.descriptions[JSON.parse(ele.parentNode.dataset.build)].description;
      this.tooltip.style.visibility = "visible";
    }

    if (ele.tagName.toLowerCase() === "button") {
      this.tooltiptext.innerText = "Click here to sell you goods and make some money!";
      this.tooltip.style.visibility = "visible";
    }
  }

  handleMouseOut(e) {
    const ele = e.target;
    if (ele.tagName.toLowerCase() === "img") {
      this.tooltip.style.visibility = "hidden";
    }

    if (ele.tagName.toLowerCase() === "button") {
      this.tooltip.style.visibility = "hidden";
    }

  }

  handleMouseMove(e) {
    const ele = e.target;
    // if (ele.tagName.toLowerCase() === "img") {
      this.tooltip.style.top = e.pageY + 10 + "px";
      this.tooltip.style.left = e.pageX + 10 + "px";
    // }
  }

  // this function starts the drag, needed for drag to work correctly. 
  handleDragStart(e) {
    e.preventDefault();
    const ele = e.target;
  }

  handleClickSell(e) {
    const ele = e.target;
    if (ele.tagName.toLowerCase() === "button") {
      this.toggle = true;
      this.transferToMarket();
    }
  }

  handleClickMusic(e) {
    const ele = e.target;

    if (ele.tagName.toLowerCase() === "button" && this.toggleMusic) {
      this.toggleMusic = false;
    } else {
      this.toggleMusic = true;
    }
  }

  // basic time mechanism of the game, happens about every second and sets the pace of the game
  tick() {
    setInterval(() => {
      // the board gets set up and the buildings are placed every second, this causes some issues when clicking to place a bulding,
      // ideally when I refactor this it will instead use the canvas to handle building placement.
      this.map.setupBoard();
      if (this.map.totalPower >= 0) {
        Object.values(this.map.allBuildings)
        .flat()
        .forEach((ele) => ele.updateRSS());
      }
      this.map.updatePower();
      this.map.updateRSS();
      this.transferToMarket();
      this.transferToChildren();
      this.updateTotalMoney(this.map.num, this.map.iro);
    }, 1000);
  }

  updateTotalMoney(mon) {
    let firstMon = mon.innerHTML
    mon.innerHTML = this.map.money;
    let secondMon = mon.innerHTML
    // this changes the color of money when it goes up or down
    if (firstMon > secondMon) {
      mon.style.color = "red"
    } else if (firstMon < secondMon) {
      mon.style.color = "green"
    } else {
      mon.style.color = "black"
    }
    // this sets the html for the rss iron ore, has a conditional to make sure if none it shows 0
    if (!this.map.allRSS["ironOre"]) {
      this.map.iro.innerHTML = 0;
    } else {
      this.map.iro.innerHTML = this.map.allRSS["ironOre"];
    }

    if (!!this.map.selectedBuilding) {
      this.info.innerHTML =
        this.descriptions[JSON.parse(this.map.selectedBuilding)].description;
      this.buildcost.innerHTML =
        this.descriptions[JSON.parse(this.map.selectedBuilding)].cost;
      this.powerCost.innerHTML =
        this.descriptions[JSON.parse(this.map.selectedBuilding)].powerCost;
      this.selebldg.innerHTML =
        this.descriptions[JSON.parse(this.map.selectedBuilding)].name;
    }

    // this sets the html for all the other rss
    !this.map.allRSS["ironIngots"]
      ? (this.iroing.innerHTML = 0)
      : (this.iroing.innerHTML = this.map.allRSS["ironIngots"]);
    !this.map.allRSS["steelIngots"]
      ? (this.steing.innerHTML = 0)
      : (this.steing.innerHTML = this.map.allRSS["steelIngots"]);
    !this.map.allRSS["copperIngots"]
      ? (this.coping.innerHTML = 0)
      : (this.coping.innerHTML = this.map.allRSS["copperIngots"]);
    !this.map.allRSS["copperOre"]
      ? (this.copore.innerHTML = 0)
      : (this.copore.innerHTML = this.map.allRSS["copperOre"]);
    !this.map.allRSS["copperWire"]
      ? (this.copwire.innerHTML = 0)
      : (this.copwire.innerHTML = this.map.allRSS["copperWire"]);
    !this.map.allRSS["tools"]
      ? (this.toolsnum.innerHTML = 0)
      : (this.toolsnum.innerHTML = this.map.allRSS["tools"]);
    this.unlimitedPower.innerHTML = this.map.totalPower

    if (this.map.totalPower < 0) {
      this.unlimitedPower.style.color = "red"
    } else if (this.map.totalPower >= 0) {
      this.unlimitedPower.style.color = "green"
    }       
  }

  transferToMarket() {
    if (this.toggle) {
      Object.values(this.map.allBuildings)
        .flat()
        .forEach((building) => {
          let rssArr = Object.entries(building.resources);
          let marketfactor = 1;
          if (this.map.allBuildings["Market"]) {
            marketfactor += this.map.allBuildings["Market"].length / 5;
          }
          rssArr.forEach((sub) => {
            if (sub[0] === "ironOre") {
              building.resources["ironOre"] = 0;
              this.map.money += Math.floor((sub[1] * 1.1 ) * marketfactor);
            } else if (sub[0] === "ironIngots") {
              building.resources["ironIngots"] = 0;
              this.map.money += Math.floor(sub[1] * 7 * marketfactor);
            } else if (sub[0] === "steelIngots") {
              building.resources["steelIngots"] = 0;
              this.map.money += Math.floor(sub[1] * 85 * marketfactor);
            } else if (sub[0] === "copperOre") {
              building.resources["copperOre"] = 0;
              this.map.money += Math.floor(sub[1] * 9 * marketfactor);
            } else if (sub[0] === "copperIngots") {
              building.resources["copperIngots"] = 0;
              this.map.money += Math.floor(sub[1] * 90 * marketfactor);
            } else if (sub[0] === "copperWire") {
              building.resources["copperWire"] = 0;
              this.map.money += Math.floor(sub[1] * 200 * marketfactor);
            } else if (sub[0] === "tools") {
              building.resources["tools"] = 0;
              this.map.money += Math.floor(sub[1] * 450 * marketfactor);
            }
          });
          // iterate through building rss, and subtract from total in building.
          // calculate distance from the market.
        });
    }
    this.toggle = false;
  }

  transferToChildren() {
    // iterate through buildings(buildArr). check parents (parA) (later in order of proximity) and subtract resources until requirements met.
    let bldgArr = Object.values(this.map.allBuildings).flat();
    bldgArr.forEach((building) => {
      let parents = [];
      if (building.parentNames) {
        building.parentNames.forEach((par) => {
          parents = parents.concat(this.map.allBuildings[par]);
        });
      }
      let parA = parents;
      if (!parA) {
        return;
      }
      for (let i = 0; i < parA.length; i++) {
        let requestTotal = Object.entries(building.requestTotal);
        requestTotal.forEach((req) => {
          let requestRSS = req[0];
          if (!building.resources[requestRSS]) {
            building.resources[requestRSS] = 0;
          }
          let requestAmount = req[1] - building.resources[requestRSS];
          
          if (!parA[i].resources[requestRSS]) {
          } else if (parA[i].resources[requestRSS] < requestAmount) {
            building.resources[requestRSS] += parA[i].resources[requestRSS];
            parA[i].resources[requestRSS] = 0;
            this.map.makeDot(toGrid(parA[i].nodepos), toGrid(building.nodepos));
          } else if (parA[i].resources[requestRSS] > requestAmount) {
            building.resources[requestRSS] += requestAmount;
            parA[i].resources[requestRSS] -= requestAmount;
            this.map.makeDot(toGrid(parA[i].nodepos), toGrid(building.nodepos));
          }
        });
      }
    });
  }

  canvasCircleAnimation() {
      // this function is going to have to draw a circle on the canvas. the circle should be on the pos1 passed in. the circle should move to the pos2 passed in.
      let ctx = this.dots.getContext("2d");
      let that = this;
      function animate() {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        that.map.movingDots.forEach((dot) => {
            dot.draw(ctx);
            dot.move();
            ctx.beginPath();
            ctx.moveTo(dot.theRealStartPos[1], dot.theRealStartPos[0]);
            ctx.lineTo(dot.endPos[1], dot.endPos[0]);
            ctx.lineWidth = 1;
            ctx.stroke();
            if (dot.startPos[0] === dot.endPos[0] && dot.startPos[1] === dot.endPos[1] || dot.startPos[0] > innerWidth || dot.startPos[0] < 0 || dot.startPos[1] > innerHeight || dot.startPos[1] < 0) {
                that.map.movingDots.splice(that.map.movingDots.indexOf(dot), 1);
            }
        })
        requestAnimationFrame(animate);
      }
      animate();
    }
        


    canvasLineAnimation(pos1, pos2) {
        ctx.beginPath();
        ctx.moveTo(...pos1)
        ctx.lineTo(...pos2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.closePath();

    }
}

// feature not yet implemented, eventually will be used to determine priority of buildings, and then be used for when fuel cost is a thing.
function sortByDistance (arr) {
  return arr.forEach((building) => {

  }) 
}

// translates grid position to canvas position.
function toGrid (pos) {
    return [(((pos[0] + 1) * 60) - 20), (((pos[1] + 1) * 60) - 20)];
}

module.exports = Game;
