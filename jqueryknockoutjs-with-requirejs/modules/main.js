define(['jquery','knockoutjs'],function($,ko){

	function viewModel(){
		var self = this;
		self.allProducts=ko.observableArray([]);
		$.getJSON("https://manage.hawksearch.com/sites/uselectric/?ajax=1&mpp=15&pg=1&category=Firestop-Devices--Accessories&hawkcustom=region01&sort=topsellers&hawkspellcheck=0&hawkoutput=json&hawkfacets=category,brand_name,sub_brand,item_name,type", function(data) { 
    		self.allProducts(data);
		});
		self.DropdownValue=ko.observableArray();
		self.isSelected=ko.observable(true);
	}
	ko.applyBindings(viewModel);
});
