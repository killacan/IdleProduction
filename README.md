# IdleProduction

Hello, and welcome to my project. This is going to be my first forrey into building a project from start to finish in JavaScript. I am going to try to make an idle production game, where the player builds buildings, production happens, and products are sold. This is where I am going to be updating my progress on the project. I will update the readme as progress continues.

Planned features/outline: 

# Idle Production

The proposal is an idle factory game in which the player with gather resources. Those resources will be transported using some sort of fuel between buildings. Each product will be able to be transported to a hub to be sold.

I want the game to be dynamic in that prices will change over time(if I have extra time). Electricity will be required to run the buildings. Using the earned money the player will be able to expand their base. The end goal would be to have complex product trees where the player has to balance their production in order to make more complicated projects.

Ideally this would allow the player to purchase plots of land, and the more land you own the more expensive the transport.

As far as game modes go, I could have a timed mode where the player tries to set up a profitable factory as fast as possible, a tiny mode (the mode for this week) that makes a pretty short game very limited in scope.
https://github.com/killacan/IdleProduction
Each building will have its own little icon distinguishing it from other buildings, when you click on it, a line will be drawn between buildings to visualize the transport of resources from one building to the other.

### UI 
– Probably going to end up looking like this [ [https://wireframe.cc/IfVjw1](https://wireframe.cc/IfVjw1) ]

## 4 core features -

- Player controlled construction of buildings

- Automatic resource transport between buildings

- New products being created from old products

- The selling of those products on the market for profit.

  

## 2 Additional features -

- Electricity is needed to be produced to run buildings

- fuel is needed to be burned in order to transport goods from one building to another.

## Timeline

- Friday, working web page (not much on it) and core functionality of a game. (classes and the ability to make a new game.)

- Monday, building nodes logic completed.

- Tuesday – basic graphics/icons done and a grid.

- Wednesday – the ability to transport goods between buildings and place buildings.

- Thursday – sale of goods at the market building.

## Tech notes

- building would be nodes, and parent nodes would be the “provider” building, having the raw good that need to be sent to the child nodes, the “consumer” building. Each of these buildings are going to have a position, and distance between buildings will cause the “fuel” cost to go up. There is also going to be a hash that holds what resources each building has. When a resource gets transported, ideally there would be a little dot that moves from one building to another one to visualize the transport of resources.

- When resources go below a certain amount, (2x production?) it will do a request. When requesting it will iterate through the Provider buildings

- Power is just going to be a global resource that gets subtracted from if sufficient power is available.

- first implementation of game is going to have 1 input and 1 output, if I get the framework down through I should be able to make more complicated products accepting multiple inputs.

- A global count for resources will be visible at the top of the screen. The ability to build will be on the bottom or left.

- Early production chain:
	- Iron Ore -> Iron -> Steel
	- Copper Ore -> Copper Ingot -> Copper Wire/Cable
	- Steel + Copper Wire → tools?

- Fuel: 
	- wood
		- Going to be the worst fuel. Goes into a biomass generator. 
	- coal
		- Going to be slightly more effective
	- oil

- Buildings : 
	- iron ore mine:
		- Iron ore mine is going to produce Iron Ore, it requires no input, but might (to be implimented later) have to be built on a specific spot. 
	- Iron Smelter (smelter?)
		- The smelter is going to take in ore as a initial product, and turn it into Iron Ingots.
	- steel mill:
		- Steel mill is going to take in the Iron Ingots and (possibly with coal) and turn it into Steel Ingots.
	- Copper Ore Mine: 
		- Copper ore mine is going to produce Copper Ore. 
	- Copper Smelter(smelter)
		- Copper smelter is going to turn that Copper Ore into Copper Ingots. 
	- Copper Extruder: 
		- Copper Extruder is going to turn those Copper Ingots into Copper wire. 
	- Tool Factory:
		- Tool factory is going to combine steel and copper to make generic tools. These tools will be valuable for the market. 
	- market: 
		- Where all the goods go to be automatically sold. 

building example:

```javascript 
Building : {
	Game: Game,
	Resources: { Iron Ore: 100, Iron Ingot: 20 },
	Location: [0,0],
	Parent Nodes: [Farm, Farm],
	Child Nodes: [Smeltery, Smeltery]
}
```


- Resource Conversions
	- Iron
		- 2 Iron Ore = 1 Iron Ingot
		- 5 Iron Ingot = 1 Steel Ingot (possible alternative/upgrade, 5 Iron + 1 Coal = 2 Steel
	- Copper
		- 2 Copper Ore = 1 Copper Ingot
		- 1 Copper Ingot
