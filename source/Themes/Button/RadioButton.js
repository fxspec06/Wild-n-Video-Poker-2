enyo.kind({
	name: 'Neo.RadioButton',
	kind: 'Neo.Button',
	handlers: {
		ontap: 'tap',
	},
	tap: function(s, e) {
		this.bubble('onchange', {index: this.index});
		return true;
	}
});
