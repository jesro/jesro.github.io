define(['jquery'],function($){
	$.fn.customPaginate = function(options){
		var paginationContainer =this;
		var itemsToPaginate;

		var defaults={
			itemsPerPage: 6
		};
		var settings={};

		$.extend(settings, defaults, options);

		var numberOfPaginateLinks=Math.ceil((itemsToPaginate/settings.itemsPerPage));
		itemsToPaginate=$(settings.itemsToPaginate);

		itemsToPaginate.filter(":gt("+(settings.itemsPerPage-1)+")").hide();
		paginationContainer.find("ul li").on('click',function(){
			
			var linkNumber = $(this).text();
			var itemsToHide=itemsToPaginate.filter(":lt("+((linkNumber-1)*settings.itemsPerPage)+")");
			
			$.merge(itemsToHide,itemsToPaginate.filter(":gt("+((linkNumber*settings.itemsPerPage)-1)+")"));
				itemsToHide.hide();
			var itemsToShow = itemsToPaginate.not(itemsToHide);
			itemsToShow.show();
		});

	}
});