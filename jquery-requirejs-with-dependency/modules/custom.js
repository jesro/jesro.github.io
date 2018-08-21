define(['jquery'],function($){
	$(document).ready(function(){
		$(".pagination").customPaginate({
			itemsToPaginate: ".post"
		});
	});
});