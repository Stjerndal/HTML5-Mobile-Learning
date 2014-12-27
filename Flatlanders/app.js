(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller("PanelController", function() {
		this.tab  = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab; 
		};
	});

	var gems = [
		{
			name: 'Dodecahedron Gem',
			price: 2.95,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
			images: [
				{
					full: 'img/1.png',
					thumb: 'img/thumb.png'
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Five is the number of edgerinos surrounding this beatuty.',
			images: [
				{
					full: 'img/2.png',
					thumb: '/thumb.png'
				},
			],
		},

	];

})();
