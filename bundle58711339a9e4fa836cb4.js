(()=>{var e={654:(e,n,t)=>{function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=t(47),i=t(886),a=t(763),s=t(130),l=function(){function e(n,t,r,i,a,s,l){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.map=new o(n,t,r,i,a),this.el=n,this.iro=t,this.build=i,this.sell=s,this.iroing=l,this.toggle=!1,this.handleClickGrid=this.handleClickGrid.bind(this),this.handleClickBuild=this.handleClickBuild.bind(this),this.handleClickSell=this.handleClickSell.bind(this),this.bindEvents(),this.tick(),this.updateTotalMoney(r,this.map.iro)}var n,t;return n=e,(t=[{key:"bindEvents",value:function(){this.el.addEventListener("click",this.handleClickGrid),this.build.addEventListener("click",this.handleClickBuild),this.sell.addEventListener("click",this.handleClickSell)}},{key:"handleClickGrid",value:function(e){var n=e.target;if(that=this,console.log("li"===n.tagName.toLowerCase()),"li"===n.tagName.toLowerCase()&&this.map.selectedBuilding){var t=JSON.parse(n.dataset.pos);"IronMine"===JSON.parse(this.map.selectedBuilding)?(this.map.placeBuilding(t,new i(t)),console.log(this.map.getBuilding(t)),console.log(this.map.allBuildings)):"IronSmelter"===JSON.parse(this.map.selectedBuilding)?(this.map.placeBuilding(t,new s(t)),console.log(this.map.getBuilding(t)),console.log(this.map.allBuildings)):"SteelMill"===JSON.parse(this.map.selectedBuilding)||"CopperOreMine"===JSON.parse(this.map.selectedBuilding)||"CopperSmelter"===JSON.parse(this.map.selectedBuilding)||"CopperExtruder"===JSON.parse(this.map.selectedBuilding)||"ToolFactory"===JSON.parse(this.map.selectedBuilding)||"Market"===JSON.parse(this.map.selectedBuilding)&&(this.map.placeBuilding(t,new a(t)),console.log(that.map.getBuilding(t)),console.log(that.map.allBuildings))}}},{key:"handleClickBuild",value:function(e){var n=e.target;"li"===n.tagName.toLowerCase()&&(this.map.selectedBuilding=n.dataset.build,console.log(this.map.selectedBuilding))}},{key:"handleClickSell",value:function(e){var n=e.target;console.log(n.tagName),"button"===n.tagName.toLowerCase()&&(this.toggle=!0)}},{key:"tick",value:function(){var e=this;setInterval((function(){e.updateTotalMoney(e.map.num,e.map.iro),e.map.setupBoard(),Object.values(e.map.allBuildings).flat().forEach((function(e){return e.updateRSS()})),e.map.updateRSS(),e.transferToMarket(),e.transferToChildren(),console.log(e.map.allRSS),e.map.money=e.map.money+=1}),1e3)}},{key:"updateTotalMoney",value:function(e){e.innerHTML=this.map.money,this.map.allRSS.ironOre?this.map.iro.innerHTML=this.map.allRSS.ironOre:this.map.iro.innerHTML=0,this.map.allRSS.ironIngots?this.iroing.innerHTML=this.map.allRSS.ironIngots:this.iroing.innerHTML=0}},{key:"transferToMarket",value:function(){var e=this;this.toggle&&Object.values(this.map.allBuildings).flat().forEach((function(n){var t=Object.entries(n.resources);console.log(t,"rssArr"),t.forEach((function(t){"ironOre"===t[0]&&(n.resources.ironOre=0,e.map.money+=t[1])}))})),this.toggle=!1}},{key:"transferToChildren",value:function(){var e=this;Object.values(this.map.allBuildings).flat().forEach((function(n){var t=e.map.allBuildings[n.parentName];if(t)for(var r=0;r<t.length;r++){var o=Object.entries(n.requestTotal).flat(),i=o[0];n.resources[i]||(n.resources[i]=0);var a=o[1]-n.resources[i];t[r].resources[i]&&(t[r].resources[i]<a?(n.resources[i]+=t[r].resources[i],t[r].resources[i]=0):t[r].resources[i]>a&&(n.resources[i]+=a,t[r].resources[i]-=a))}}))}}])&&r(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();e.exports=l},886:(e,n,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},i(e,n)}function a(e,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var l=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&i(e,n)}(u,e);var n,t,r,l,c=(r=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=s(r);if(l){var t=s(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return a(this,e)});function u(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),(n=c.call(this,e)).nodepos=e,n.name="IronMine",n.cost=200,n.description="an Iron mine can be placed anywhere, it will continually make 1 Iron Ore per second",n.childName="IronSmelter",n.receivable=[],n}return n=u,(t=[{key:"updateRSS",value:function(){var e;(e=this.resources).ironOre||(e.ironOre=this.resources.ironOre=1),this.resources.ironOre++}}])&&o(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),u}(t(625));e.exports=l},130:(e,n,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},i(e,n)}function a(e,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var l=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&i(e,n)}(u,e);var n,t,r,l,c=(r=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=s(r);if(l){var t=s(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return a(this,e)});function u(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),(n=c.call(this,e)).nodepos=e,n.name="IronSmelter",n.cost=500,n.description="Iron Smelter will take Iron Ore at 5 iron Ore per second, and convert it to Iron Ingots",n.parentName="IronMine",n.childName="SteelMill",n.receivable=["ironOre"],n.requestTotal={ironOre:5},n}return n=u,(t=[{key:"updateRSS",value:function(){var e;(e=this.resources).ironIngots||(e.ironIngots=this.resources.ironIngots=1),this.resources.ironOre>=5&&(this.resources.ironOre-=5,this.resources.ironIngots++)}}])&&o(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),u}(t(625));e.exports=l},47:(e,n,t)=>{function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t(886),t(763);var o=function(){function e(n,t,r,o,i){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.money=1500,this.num=r,this.el=n,this.iro=t,this.build=o,this.info=i,this.selectedBuilding=null,this.allBuildings={},this.possibleBuildings=["IronMine","IronSmelter","SteelMill","CopperOreMine","CopperSmelter","CopperExtruder","ToolFactory","Market"],this.imgPaths=["assets/ironMine2.png","src/assets/ironIngot2.png","src/assets/Smelter.png"],this.allRSS={},this.grid=this.setupGrid(),this.setupBoard(),this.setupBuild()}var n,t;return n=e,(t=[{key:"setupGrid",value:function(){for(var e=[],n=0;n<10;n++){e.push([]);for(var t=0;t<10;t++)e[n].push(null)}for(var r=0;r<this.possibleBuildings.length;r++)this.allBuildings[this.possibleBuildings[r]]=[];return console.log(this.allBuildings),e}},{key:"setupBoard",value:function(){testBox=document.querySelector(".grid-boxes"),testBox&&testBox.remove();var e=document.createElement("ul");e.classList.add("grid-boxes");for(var n=0;n<10;n++)for(var t=0;t<10;t++){var r=document.createElement("li");r.dataset.pos=JSON.stringify([n,t]),r.dataset.building=JSON.stringify(this.grid[n][t]),e.append(r)}this.el.append(e)}},{key:"setupBuild",value:function(){for(var e=document.createElement("ul"),n=0;n<this.possibleBuildings.length;n++){var t=document.createElement("li");t.dataset.build=JSON.stringify(this.possibleBuildings[n]);var r=new Image;r.src="../src/ironIngot2.png",this.build.append(r),e.append(t)}this.build.append(e)}},{key:"updateRSS",value:function(){if(this.allRSS={},Object.values(this.allBuildings).flat().length>0)for(var e=0;e<Object.values(this.allBuildings).flat().length;e++){var n=Object.entries(Object.values(this.allBuildings).flat()[e].resources);if(n)for(var t=0;t<n.length;t++)this.allRSS[n[0][0]]||(this.allRSS[n[0][0]]=0),this.allRSS[n[0][0]]+=parseInt(n[0][1])}}},{key:"placeBuilding",value:function(e,n){if(!this.isEmptyPos(e))throw new i("Not an empty spot!");if(this.money<n.cost)throw new i("Not Enough Money!");this.grid[e[0]][e[1]]=n,this.allBuildings[n.name].push(n),this.money-=n.cost}},{key:"getBuilding",value:function(e){return this.grid[e[0]][e[1]]}},{key:"isEmptyPos",value:function(e){if(!this.isValidPos(e))throw new i("Is not a valid spot!");return null===this.grid[e[0]][e[1]]}},{key:"isValidPos",value:function(e){return 0<=e[0]&&e[0]<10&&0<=e[1]&&e[1]<10}}])&&r(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}(),i=function(e){this.meg=e};e.exports=i,e.exports=o},763:(e,n,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},i(e,n)}function a(e,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var l=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&i(e,n)}(u,e);var n,t,r,l,c=(r=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=s(r);if(l){var t=s(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return a(this,e)});function u(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),(n=c.call(this,e)).nodepos=e,n.name="Market",n.cost=500,n.description="The market is where goods go to be sold.",n}return n=u,(t=[{key:"updateRSS",value:function(){}}])&&o(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),u}(t(625));e.exports=l},625:e=>{function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.resources={}}var t,r;return t=e,(r=[{key:"pos",get:function(){return this.pos}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();e.exports=t},144:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),a.push([e.id,'*,*::before,*::after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul,ol{list-style:none}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media(prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important}}.main-nav{display:flex;justify-content:space-between;margin:0 auto}.main-nav>ul{display:flex;flex-direction:row;justify-content:end;align-items:flex-end}.div-box{width:268px}.main-nav li{margin:10px}.main-nav h2{margin:20px}.resources-bar{display:flex;justify-content:space-between;margin:0 auto}.resources-bar>ul{flex-direction:row;justify-content:end;align-items:flex-end}.rss-left{width:45%}.rss-right{width:45%}.rss-left>ul{display:flex;flex-direction:row}.rss-left>ul li{padding:10px}.rss-right>ul{display:flex;flex-direction:row;justify-content:end}.rss-right>ul li{padding:10px}#game-canvas,#builder-canvas,#info-canvas{background-color:#262626}.container{display:grid;grid-template-columns:180px 1fr 620px 1fr 180px}.grid-container{display:grid;width:620px;grid-column:3;grid-template-columns:20% 20% 20% 20% 20%;grid-template-rows:20% 20% 20% 20% 20%}#game-canvas{grid-column:1;grid-row:1}.info-panel{display:grid;grid-column:5;grid-template-columns:33% 33% 33%}.info-panel #info-canvas{grid-column:1/1;grid-row:1;width:180px}.info-panel h3{grid-column:2;z-index:1;display:flex;justify-content:center;padding-top:10px}.builder-menu{display:grid;grid-column:1/1;grid-template-columns:33% 33% 33%}.builder-menu #builder-canvas{grid-column:1/1;grid-row:1;width:180px}.builder-menu h3{grid-column:2;z-index:1;display:flex;justify-content:center;padding-top:10px;height:20px}.builder-menu ul{grid-column:1;grid-row:1;width:180px;display:flex;flex-wrap:wrap;list-style:none;padding-top:30px;padding-left:0px;z-index:1}.builder-menu ul li{margin:15px;width:60px;height:60px;border-style:solid;border:1px solid #fff;z-index:2}.grid{grid-column:1;grid-row:1}.grid>ul{width:620px;display:flex;flex-wrap:wrap;list-style:none;padding:0%;margin-top:10px;margin-left:10px}.grid li{width:60px;height:60px;justify-content:center}li:hover{background-color:gray}body{background-color:#6e6e6e;font-family:"Roboto",sans-serif}',"",{version:3,sources:["webpack://./src/styles/base/reset.scss","webpack://./src/styles/components/_main_nav.scss","webpack://./src/styles/components/_resource_bar.scss","webpack://./src/styles/components/_grid.scss","webpack://./src/styles/main.scss"],names:[],mappings:"AACA,qBAGE,qBAAA,CAIF,2CAUE,QAAA,CAIF,MAEE,eAAA,CAIF,KACE,gBAAA,CACA,4BAAA,CACA,eAAA,CAIF,eACE,6BAAA,CAIF,YAEE,cAAA,CACA,aAAA,CAIF,6BAIE,YAAA,CAIF,uCACE,kBACC,oBAAA,CAGD,qBAGE,mCAAA,CACA,sCAAA,CACA,oCAAA,CACA,+BAAA,CAAA,CClEJ,UACI,YAAA,CACA,6BAAA,CACA,aAAA,CAGJ,aACI,YAAA,CACA,kBAAA,CACA,mBAAA,CACA,oBAAA,CAIJ,SACI,WAAA,CAGJ,aACI,WAAA,CAGJ,aACI,WAAA,CCvBJ,eACI,YAAA,CACA,6BAAA,CACA,aAAA,CAGJ,kBAEI,kBAAA,CACA,mBAAA,CACA,oBAAA,CAIJ,UAEI,SAAA,CAGJ,WAEI,SAAA,CAGJ,aACI,YAAA,CACA,kBAAA,CAEA,gBACI,YAAA,CAKR,cACI,YAAA,CACA,kBAAA,CACA,mBAAA,CAEA,iBACI,YAAA,CCxCR,0CACI,wBAAA,CAMJ,WACI,YAAA,CACA,+CAAA,CASJ,gBACI,YAAA,CACA,WAAA,CACA,aAAA,CAEA,yCAAA,CACA,sCAAA,CAGJ,aACI,aAAA,CACA,UAAA,CASJ,YACI,YAAA,CACA,aAAA,CACA,iCAAA,CACA,yBACI,eAAA,CACA,UAAA,CACA,WAAA,CAEJ,eACI,aAAA,CACA,SAAA,CACA,YAAA,CACA,sBAAA,CACA,gBAAA,CAIR,cACI,YAAA,CACA,eAAA,CACA,iCAAA,CACA,8BACI,eAAA,CACA,UAAA,CACA,WAAA,CAEJ,iBACI,aAAA,CACA,SAAA,CAGA,YAAA,CACA,sBAAA,CACA,gBAAA,CACA,WAAA,CAGJ,iBACI,aAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CACA,gBAAA,CACA,SAAA,CAEA,oBACI,WAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,qBAAA,CACA,SAAA,CAMZ,MAQI,aAAA,CACA,UAAA,CAIJ,SACI,WAAA,CACA,YAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CACA,eAAA,CACA,gBAAA,CAIJ,SACI,UAAA,CACA,WAAA,CACA,sBAAA,CAGJ,SACI,qBAAA,CCjHJ,KACE,wBATc,CAUd,+BAAA",sourcesContent:["/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul,\nol {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n",".main-nav {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 auto;\n}\n\n.main-nav > ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: end;\n    align-items: flex-end;\n\n}\n\n.div-box {\n    width: 268px;\n}\n\n.main-nav li {\n    margin: 10px;\n}\n\n.main-nav h2 {\n    margin: 20px;\n}",".resources-bar {\n    display: flex;\n    justify-content: space-between;\n    margin: 0 auto;\n}\n\n.resources-bar > ul {\n    // display: flex;\n    flex-direction: row;\n    justify-content: end;\n    align-items: flex-end;\n\n}\n\n.rss-left {\n    // justify-content: space-between;\n    width: 45%;\n}\n\n.rss-right {\n    // justify-content: end;\n    width: 45%;\n}\n\n.rss-left > ul {\n    display: flex;\n    flex-direction: row;\n\n    li {\n        padding: 10px;\n    }\n\n}\n\n.rss-right > ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: end;\n\n    li {\n        padding: 10px;\n    }\n\n}\n","#game-canvas, #builder-canvas, #info-canvas {\n    background-color: rgb(38, 38, 38);\n    // display: flex;\n    // grid-template-columns: 65px 1fr 65px;\n    // grid-template-rows: 100px 100px 100px;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 180px 1fr 620px 1fr 180px;\n    // justify-content: space-between;\n    // position: absolute;\n    // width: 100%;\n    // left: 0;\n    // right: 0;\n    // margin: auto;\n}\n\n.grid-container {\n    display: grid;\n    width: 620px;\n    grid-column: 3;\n    // justify-content: center;\n    grid-template-columns: 20% 20% 20% 20% 20%;\n    grid-template-rows: 20% 20% 20% 20% 20%;\n}\n\n#game-canvas {\n    grid-column: 1;\n    grid-row: 1;\n    // grid-column-end: 3;\n    // position: absolute;\n    // width: 620px;\n    // left: 0;\n    // right: 0;\n    // margin: auto;\n}\n\n.info-panel {\n    display: grid;\n    grid-column: 5;\n    grid-template-columns: 33% 33% 33%;\n    #info-canvas {\n        grid-column: 1/1;\n        grid-row: 1;\n        width: 180px;\n    }\n    h3 {\n        grid-column: 2;\n        z-index: 1;\n        display: flex;\n        justify-content: center;\n        padding-top: 10px;\n    }\n}\n\n.builder-menu {\n    display: grid;\n    grid-column: 1 / 1;\n    grid-template-columns: 33% 33% 33%;\n    #builder-canvas {\n        grid-column: 1 / 1;\n        grid-row: 1;\n        width: 180px;\n    }\n    h3 {\n        grid-column: 2;\n        z-index: 1;\n        // -webkit-text-stroke: 1px;\n        // -webkit-text-stroke-color: white;\n        display: flex;\n        justify-content: center;\n        padding-top: 10px;\n        height: 20px;\n    }\n\n    ul {\n        grid-column: 1;\n        grid-row: 1;\n        width: 180px;\n        display: flex;\n        flex-wrap: wrap;\n        list-style: none;\n        padding-top: 30px;\n        padding-left: 0px;\n        z-index: 1;\n\n        li {\n            margin: 15px;\n            width: 60px;\n            height: 60px;\n            border-style: solid;\n            border: 1px solid white;\n            z-index: 2;\n        }\n    }\n\n}\n\n.grid {\n    // display: flex;\n    // position: relative;\n    // width: 620px;\n    // left: 0;\n    // right: 0;\n    // margin: auto;\n    // margin-top: 0px;\n    grid-column: 1;\n    grid-row: 1;\n    // grid-column-end: 4;\n}\n\n.grid > ul {\n    width: 620px;\n    display: flex;\n    flex-wrap: wrap;\n    list-style: none;\n    padding: 0%;\n    margin-top: 10px;\n    margin-left: 10px;\n    // position: absolute;\n}\n\n.grid li {\n    width: 60px;\n    height: 60px;\n    justify-content: center;\n}\n\nli:hover {\n    background-color: gray;\n}",'@import url(\'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\');\n\n@import "base/reset.scss";\n\n@import "components/_main_nav.scss";\n@import "components/resource_bar.scss";\n@import "components/build_bar.scss";\n@import "components/grid.scss";\n\n$primary-color: rgb(110, 110, 110);\n$secondary-color: #f4f4f4;\n// $box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n\n// * {\n//   box-sizing: border-box;\n// }\n\nbody {\n  background-color: $primary-color;\n  font-family: \'Roboto\', sans-serif;\n//   display: flex;\n//   flex-direction: column;\n//   align-items: center;\n//   justify-content: center;\n//   height: 100vh;\n//   overflow: hidden;\n//   margin: 0;\n//   padding: 20px;\n}\n\n// .container {\n//   background-color: $secondary-color;\n//   border-radius: 10px;\n//   box-shadow: $box-shadow;\n//   padding: 50px 20px;\n//   text-align: center;\n//   max-width: 100%;\n//   width: 800px;\n// }\n\n// h2 {\n//   margin: 0;\n//   opacity: 0.5;\n//   letter-spacing: 2px;\n// }\n\n// img {\n//   width: 100px;\n//   margin-bottom: 20px;\n// }\n\n// .joke {\n//   font-size: 30px;\n//   letter-spacing: 1px;\n//   line-height: 40px;\n//   margin: 50px auto;\n//   max-width: 600px;\n// }\n\n// .btn {\n//   background-color: $primary-color;\n//   color: $secondary-color;\n//   border: 0;\n//   border-radius: 10px;\n//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n//   padding: 14px 40px;\n//   font-size: 16px;\n//   cursor: pointer;\n\n//   &:active {\n//     transform: scale(0.98);\n//   }\n\n//   &:focus {\n//     outline: 0;\n//   }\n// }\n\n'],sourceRoot:""}]);const s=a},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},537:e=>{"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=i[c]||0,p="".concat(c," ").concat(u);i[c]=u+1;var d=t(p),A={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)n[d].references++,n[d].updater(A);else{var f=o(A,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var l=r(e,o),c=0;c<i.length;c++){var u=t(i[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=l}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),l=t.n(s),c=t(216),u=t.n(c),p=t(589),d=t.n(p),A=t(144),f={};f.styleTagTransform=d(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(A.Z,f),A.Z&&A.Z.locals&&A.Z.locals;var h=t(654),m=t(886);window.Game=h,window.IronMine=m,document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("game-canvas"),n=document.querySelector(".grid"),t=document.getElementById("total-iron-ore"),r=document.getElementById("total-iron-ingots"),o=document.getElementById("total-money"),i=document.querySelector(".builder-menu"),a=document.querySelector(".info-panel"),s=document.querySelector(".sell"),l=10,c=e.getContext("2d");!function(){for(var e=0;e<=600;e+=60)c.moveTo(.5+e+l,l),c.lineTo(.5+e+l,610);for(var n=0;n<=600;n+=60)c.moveTo(l,.5+n+l),c.lineTo(610,.5+n+l);c.strokeStyle="white",c.stroke()}(),console.log(r),new h(n,t,o,i,a,s,r)}))})()})();
//# sourceMappingURL=bundle58711339a9e4fa836cb4.js.map