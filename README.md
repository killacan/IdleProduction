# IdleProduction

Hello, and welcome to my project. This is going to be my first forrey into building a project from start to finish in JavaScript. I am going to try to make an idle production game, where the player builds buildings, production happens, and products are sold. This is where I am going to be updating my progress on the project. I will update the readme as progress continues.

Planned features/outline: 

Idle Factory Game

	The proposal is an idle factory game in which the player with gather resources. Those resources will be transported using some sort of fuel between buildings. Each product will be able to be transported to a hub to be sold. 
	I want the game to be dynamic in that prices will change over time(if I have extra time). Electricity will be required to run the buildings. Using the earned money the player will be able to expand their base. The end goal would be to have complex product trees where the player has to balance their production in order to make more complicated projects. 
	Ideally this would allow the player to purchase plots of land, and the more land you own the more expensive the transport. 
	As far as game modes go, I could have a timed mode where the player tries to set up a profitable factory as fast as possible, a tiny mode (the mode for this week) that makes a pretty short game very limited in scope. 
	Each building will have its own little icon distinguishing it from other buildings, when you click on it, a line will be drawn between buildings to visualize the transport of resources from one building to the other. 	

Tech notes

- building would be nodes, and parent nodes would be the “provider” building, having the raw good that need to be sent to the child nodes, the “consumer” building. Each of these buildings are going to have a position, and distance between buildings will cause the “fuel” cost to go up. There is also going to be a hash that holds what resources each building has. When a resource gets transported, ideally there would be a little dot that moves from one building to another one to visualize the transport of resources.

- When resources go below a certain amount, (2x production?) it will do a request. When requesting it will iterate through the Provider buildings

- Power is just going to be a global resource that gets subtracted from if sufficient power is available.

- first implementation of game is going to have 1 input and 1 output, if I get the framework down through I should be able to make more complicated products accepting multiple inputs. 

- A global count for resources will be visible at the top of the screen. The ability to build will be on the bottom or left.

Early production chain: [Iron Ore -> Iron -> Steel], [Copper Ore -> Copper Ingot -> Copper Wire/Cable] [Steel + Copper Wire → tools?] 

Fuel: [wood, coal, oil] 

Buildings : [iron ore mine, Iron Smelter (smelter?), steel mill], [Copper Ore Mine, Copper Smelter(smelter), Copper Extruder] [tool factory], [market]

