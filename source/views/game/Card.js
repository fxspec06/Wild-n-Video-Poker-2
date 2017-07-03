enyo.kind({
	name: 'wvp.Card',
	//kind: 'FittableColumns',
	classes: 'card',
	//fit: true,
	
	
	published: {
		suit: 'hearts',
		number: '1',
		
		// for theming
			sample: false,
			preview: false,
	},
	
	handlers: {
		ontap: 'handleTapped'
	},
	
	components: [
		// required for ALL theme objects
		{name: 'themer', kind: 'Neo.ThemeFile', type: 'card', onUpdate: 'updateTheme'},
		
		{layoutKind: 'FittableColumnsLayout', components: [
			{name: 'number'},
			{name: 'suit'}
		]}
	],
	
	themes: {
		wildn: {
			styles: {
				cornerRadius: '15px',
				backgroundColor: 'rgb(200,200,200)',
				textColor: '',
				textWeight: ''
			}
		},
		
		neo: {
			styles: {
				
			},
			classes: ''
		},
		aqua: {
			styles: {
				
			},
			classes: ''
		},
		kakhi: {
			styles: {
				
			}
		},
		
		red: {
			styles:{
				
			}
		},
		steel: {
			styles:{
				
			}
		},
		green: {
			styles:{
				
			}
		},
		forest: {
			styles: {
				
			}
		},
		blue: {
			styles: {
				
			}
		},
		bruins: {
			styles:{
				
			}
		},
		
		onyx: {
			styles: {}
		}
	},
	
	create: function() {
		this.inherited(arguments);
		this.loadCard();
		this.$.themer.loadSaved();
	},
	loadCard: function() {
		this.$.number.setContent(this.number);
		this.$.suit.setContent(this.suit);
	},
	//@* theme functions
	//@* override
	themeChanged: function(oldValue){
		var r = this.inherited(arguments);
		
		
		this.reflow();
		
		return r;
	},
	//@* override
	updateTheme: function(inSender, styles){
		this.$.themer.stylize(styles, this);
		this.themeChanged();
		this.reflow();
	},
	handleTapped: function(s, e) {
		
	}
})
