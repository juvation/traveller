neutrino.provide ("SubsectorView");
neutrino.require ("neutrino.View");

var	SubsectorView = function ()
{
  neutrino.View.call (this);
}

neutrino.inherits (SubsectorView, neutrino.View);

// VIEW OVERRIDES

// PUBLIC METHODS

SubsectorView.prototype.clickHex = function (inEvent)
{
	console.log ("clicked hex " + this.nuParams.hex);
	
	// HACK
	var	subsector = "regina";
	var	system = gSystems [subsector][this.nuParams.hex];
	
	if (!system)
	{
		// default to Regina
		system = gSystems [subsector]["0310"];
	}
	
	gApplication.showView ("system", system);
}

