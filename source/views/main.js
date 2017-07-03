/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "wvp.MainView",
	kind: "FittableRows",
	fit: true,
	components:[
		{name: "container", classes: "enyo-fit", kind: "FittableRows", components: [
			{name: 'toolbarTop', kind: "Neo.Toolbar", header: "Wild'n Video Poker 2", right: [
				{name: "settingsButton", kind: "Neo.Button", text: "Settings", theme: 'neo', blue: false, collapse: false, ontap: "settingsTap"}
			], left: [
				{name: "exitButton", kind: "Neo.Button", text: "Exit", theme: 'blue', blue: false, collapse: false, ontap: "settingsTap"}
			]},
			{kind: "enyo.Scroller", layoutKind: "FittableRowsLayout", fit: true, components: [
				{name: "table", kind: "wvp.Table", classes: "nice-padding", allowHtml: true}
			]},
			{kind: "Neo.Toolbar", name: "toolbarBottom", left: [
				{name: "menuButton", kind: "Neo.Button", text: "Menu", theme: 'onyx', blue: false, collapse: false, ontap: "menuTap"}
			], middle: [
				{name: "betButton", kind: "Neo.Button", text: "Change Bet", theme: 'purple', blue: false, collapse: false, ontap: "changeBet"}
			], right: [
				{name: "dealButton", kind: "Neo.Button", text: "Deal", theme: 'affirmative', blue: false, collapse: false, ontap: "dealTap"}
			]}
		]}
	],
	create: function() {
		this.inherited(arguments);
		//this.$.menuButton.$.themer.setTheme("onyx");
		//this.$.betButton.$.themer.setTheme("purple");
		//this.$.dealButton.$.themer.setTheme("affirmative");
		this.$.toolbarTop.$.themer.setTheme("bruins");
		this.$.toolbarBottom.$.themer.setTheme("bruins");
		setTimeout(this.render2.bind(this), 0);
	},
	render2: function(e) {
		this.$.container.render();
	},
	dealTap: function(s, e) {
		
	},
	changeBet: function(s, e) {
		
	},
	menuTap: function(s, e) {
		
	}
});
