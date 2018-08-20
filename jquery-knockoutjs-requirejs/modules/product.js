define(['jquery','knockoutjs','slick'],function($,ko){
	
var viewModel=function(){
	var self=this;
	self.num = ko.observable(0);
    self.inc = function() {
      self.num(self.num() + 1);    
    }
    self.dec=function(){
    	self.num(self.num()-1);
    	if(self.num()<=0)
    		self.num(0);
    }
	self.productUrl = window.location.search.substring(1);
	self.splittedProductUrl = productUrl.split('-');
	self.skuUrl = ko.observable(self.splittedProductUrl[self.splittedProductUrl.length-1]);
	self.Name = self.splittedProductUrl.slice(0,self.splittedProductUrl.length-1).join(" ");
	self.uName = ko.observable(camelize(Name));
	function camelize(str) {
  		return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    		if (+match === 0) return " ";
    		return index == 0 ? match.toLowerCase() : match.toUpperCase();
  		});
	}
	//JSON Data
	self.myProducts=ko.observableArray([]);
	$.getJSON("data.json",function(data){
		self.myProducts(data);
	});

	self.getProducts = ko.computed(function() {
        return self.myProducts()[self.skuUrl()];
    });

	
	
}
	ko.applyBindings(viewModel);
	jQuery(document).ready(function($){
	  $('ul li').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 3
		});
	});
});
