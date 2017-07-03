/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "wvp.Table",
	kind: "FittableRows",
	classes: "enyo-fit",
	components:[
		{name: "container", classes: "enyo-fit table", kind: "FittableColumns", components: [
			{name: "card1", kind: "wvp.Card"},
			{name: "card2", kind: "wvp.Card"},
			{name: "card3", kind: "wvp.Card"},
			{name: "card4", kind: "wvp.Card"},
			{name: "card5", kind: "wvp.Card"}
		]}
	],
	create: function() {
		this.inherited(arguments);
	}
});
