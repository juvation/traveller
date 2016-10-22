function
addTrade (ioWorld)
{
	ioWorld.trade = new Object ();
	
	ioWorld.trade.agricultural = ioWorld.atmosphere >= 4 && ioWorld.atmosphere <= 9 &&
		ioWorld.hydro >= 4 && ioWorld.hydro <= 8 &&
		ioWorld.population >= 5 && ioWorld.population <= 7;

	ioWorld.trade.asteroid = ioWorld.size == 0 && ioWorld.atmosphere == 0 && ioWorld.hydro == 0;
	
	ioWorld.trade.barren = ioWorld.population == 0 && ioWorld.government == 0 && ioWorld.law == 0;
	
	ioWorld.trade.desert = ioWorld.atmosphere >= 2 && ioWorld.hydro == 0;
	
	ioWorld.trade.fluid = ioWorld.atmosphere >= 10 && ioWorld.hydro >= 1;
	
	ioWorld.trade.garden = ioWorld.size >= 5 &&
		ioWorld.atmosphere >= 4 && ioWorld.atmosphere <= 9 &&
		ioWorld.hydro >= 4 && ioWorld.hydro <= 8;
	
	ioWorld.trade.hipop = ioWorld.population >= 9;
	
	ioWorld.trade.hitech = ioWorld.tech >= 12;
	
	ioWorld.trade.icecap = ioWorld.atmosphere < 2 && ioWorld.hydro >= 1;
	
	ioWorld.trade.industrial = (ioWorld.atmosphere <= 1 ||
		ioWorld.atmosphere == 4 || ioWorld.atmosphere == 7 || ioWorld.atmosphere == 9) &&
		ioWorld.population >= 9;
		
	ioWorld.trade.lowpop = ioWorld.population >= 1 && ioWorld.population <= 3;
	
	ioWorld.trade.lowtech = ioWorld.tech <= 5;
	
	ioWorld.trade.nonagricultural = ioWorld.atmosphere <= 4 && ioWorld.hydro <= 4 && ioWorld.population >= 6;
	
	ioWorld.trade.nonindustrial = ioWorld.population >= 4 && ioWorld.population <= 6;
	
	ioWorld.trade.poor = ioWorld.atmosphere >= 2 && ioWorld.atmosphere <= 5 && ioWorld.hydro <= 3;
	
	ioWorld.trade.rich = (ioWorld.atmosphere == 6 || ioWorld.atmosphere == 8) &&
		ioWorld.population >= 6 && ioWorld.population <= 8;
		
	ioWorld.trade.waterworld = ioWorld.hydro == 10;
	
	ioWorld.trade.vacuum = ioWorld.atmosphere == 0;
}

function
createWorld (inUPP)
{
	var	world = new Object ();
	
	world.starport = "XEDCBA".indexOf (inUPP [0]);
	
	world.size = parseInt (inUPP [1], 16);
	world.atmosphere = parseInt (inUPP [2], 16);
	world.hydro = parseInt (inUPP [3], 16);
	world.population = parseInt (inUPP [4], 16);
	world.government = parseInt (inUPP [5], 16);
	world.law = parseInt (inUPP [6], 16);

	if (inUPP [7] >= '0' && inUPP [7] <= '9')
	{
		console.log ("calling parseInt()");
		
		world.tech = parseInt (inUPP [7]);
	}
	else
	{
		world.tech = 10 + (inUPP.charCodeAt (7) - "A".charCodeAt (0));
	}
	
	return world;
}

var	world = createWorld ("A788899C");
addTrade (world);

console.log (JSON.stringify (world));

