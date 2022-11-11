# IdleProduction

Hello, and welcome to my project. This is going to be my first forrey into building a project from start to finish in JavaScript. I am going to try to make an idle production game, where the player builds buildings, production happens, and products are sold. This is where I am going to be updating my progress on the project. I will update the readme as progress continues.

Planned features/outline: 

The proposal is an idle factory game in which the player with gather resources. Those resources will be transported using some sort of fuel between buildings (in progress). Each product will be able to be transported to a hub to be sold (in progress).

I want the game to be dynamic in that prices will change over time(in progress). Electricity will be required to run the buildings (in progress). Using the earned money the player will be able to expand their base. The end goal would be to have complex product trees where the player has to balance their production in order to make more complicated projects.

Ideally this would allow the player to purchase plots of land, and the more land you own the more expensive the transport.

As far as game modes go, I could have a timed mode where the player tries to set up a profitable factory as fast as possible, a tiny mode (the mode for this week) that makes a pretty short game very limited in scope.
https://github.com/killacan/IdleProduction
Each building will have its own little icon distinguishing it from other buildings, when you click on it, a line will be drawn between buildings to visualize the transport of resources from one building to the other.

### UI 



## 4 core features -

- Player controlled construction of buildings

- Automatic resource transport between buildings

- New products being created from old products

- The selling of those products on the market for profit.

  

## 2 Additional features -

- Electricity is needed to be produced to run buildings (in progress)

- fuel is needed to be burned in order to transport goods from one building to another. (in progress)



## Tech notes

- buildings are nodes, and parent nodes are the provider buildings, having the raw good that need to be sent to the child nodes, the “consumer” building. Each of these buildings are going to have a position, and distance between buildings will cause the “fuel” cost to go up. There is also going to be an object that holds what resources each building has. When a resource gets transported, ideally there would be a little dot that moves from one building to another one to visualize the transport of resources. (visual resource transport in progress)

- When resources go below the amount needed, it will do a request for those resources. When requesting it will iterate through the Provider buildings

- Power is just going to be a global resource that gets subtracted from if sufficient power is available. (in progress)

- Each building can request multiple resources from multiple different buildings.

- A global count for resources is visible at the top of the screen. The ability to build will be on the bottom or left.

- Early production chain:
	- Iron Ore -> Iron Ingots -> Steel Ingots
	- Copper Ore -> Copper Ingot -> Copper Wire/Cable
	- Steel Ingots + Copper Ingots → tools

- Fuel: (in progress)
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
		- Increases the value of goods sold by 20%. 

- Resource Conversions
	- Iron
		- 5 Iron Ore = 1 Iron Ingot
		- 10 Iron Ingot = 1 Steel Ingot (possible alternative/upgrade, 5 Iron + 1 Coal = 2 Steel
	- Copper
		- 5 Copper Ore = 1 Copper Ingot
		- 5 Copper Ingot = 3 Copper Wire
        - 10 Copper Ingots + 10 Steel Ingots = 4 Tools
