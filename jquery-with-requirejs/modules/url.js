define(['knockoutjs'],function(ko){
function getUrlParameter(){
var sPageUrl = window.location.search.substring(1);
var sURLVariables = sPageUrl.split('&');
for(var i=0;i<sURLVariables.length;i++){
var sParameterName = sURLVariables[i].split("=");
return [sParameterName[1],sParameterName[3]];
}
}


var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("sku");
var c1 = url.searchParams.get("price");
var c2 = url.searchParams.get("name");
var c3 = url.searchParams.get("Image");

var viewModel=function(){
	var self=this;
	self.sku=c;
	self.price=c1;
	self.name=c2;
	self.Image=c3;
	self.opening=ko.observable(false);
	self.opentext=ko.observable("Read More");
	self.open=function(){
		self.opening(!self.opening());
		if(self.opening()){
			self.opentext("Read Less");
		}else{
			self.opentext("Read More");
		}
	}
	
	
}
ko.applyBindings(viewModel);
});
