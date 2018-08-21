define(['jquery','knockoutjs'],function($,ko){     
$(document).ready(function(){
			
			var arr = new Array();
			arr.push([
				'https://images-na.ssl-images-amazon.com/images/I/91hvq9E5YGL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/81DRC-50D8L._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91gWWSu%2B6EL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91Qaj7BSahL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91H2gtaKODL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91ifj5oKnYL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91kWNaFb0FL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91GoTDtVI-L._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/81cp-knfW4L._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71AzVH3OtIL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/914ieVyGUIL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91E8EXgs4GL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/61e9PtyDpqL._SL1208_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91-JGNvjzWL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/41aeN-ERgZL.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/81lsfti3HkL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71lAcPzTfCL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71CHpVX5SYL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71IHXJMg0sL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91YP51DuI3L._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91jgdYmw-aL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91S7Dg9UKyL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91jgdYmw-aL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/61YPDCIcY6L._SL1024_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/61VS72UdrlL._SL1024_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71XQJW36NnL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/81o4TtWyIrL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/31Zf5G9XNNL.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/81y8ntZaAqL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91wph1WtP0L._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/61kY9ijaRFL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71DiaNeDLVL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/91CBz8MlO%2BL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/A13SvJxHcuL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/819MpfNy3BL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/314AtIT82XL.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/818%2BW6TqdfL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/81uBa6ZGmML._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/51Of2Wm78oL.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71kwhvVsDJL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71c2Gn2K-WL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71yHG-%2B9PcL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/41sx7zsBpRL.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/61wc5gujeNL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71bSz6YfG5L._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/71BcLL47ajL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/718qwjUoedL._SL1500_.jpg',
				'https://images-na.ssl-images-amazon.com/images/I/61TJ7MZ-rrL._SL1479_.jpg'
			]);
			arr.push([
				'American tourister Columbia Polyester 38 cms Black Travel Bag',
				'Safari Thorium Polycarbonate 55 cms Silver Hardsided Carry On',
				'Skybags Footloose Rubik Polyester 580 mm Blue Softsided Cabin Luggage',
				'Pronto Miami Polyester 36 cms Dark Purple Travel Duffle',
				'Aristocrat Aston Polycarbonate 79 cms Purple Hard Sided Suitcase',
				'AmazonBasics Hardside Suitcase with wheels',
				'Skybags Footloose Romeo Polyester 68 cms Red Softsided Suitcase',
				'Safari Thorium Polycarbonate 66 cms Purple Hardsided Suitcase',
				'Skybags Auckland Polycarbonate 65.8 cms Silver Hardsided Suitcase',
				'AmazonBasics Softside Suitcase with wheels',
				'American Tourister Polyester 69 cms Gunmetal Hardsided Suitcase',
				'American Tourister Cruze ABS 80 cms RED Hardsided Suitcase',
				'Polyester Set Of 3 Softsided Blue Luggage Set',
				'Clownfish Ambiance Series Unisex Synthetic ',
				'Alfisha Choice Purple Pu 2300 cms Travel Bag Soft Material',
				'Targus TBR021 15.6-inch Rolling Laptop and Overnighter Case',
				'Combo of 3 Trolley and Duffle bags Blue',
				'Skybags Footloose Levin Polyester 78 cms Black Softsided Suitcase',
				'Polyester 20" Red Soft Sided Suitcases & Trolley Bags',
				'Istorm Polyester Orange & Grey Travel Duffles',
				'Safari Polyester 54.5 cms Red Softsided Carry-On',
				'American Tourister Polyester 58 cms Navy Softsided Carry-On ',
				'Safari Polyester 54.5 cms Red Softsided Carry-On',
				'N Choice Fabric 35 Ltr Green Soft Sided Travel Duffle',
				'Novex Polyester 50 Cms Blue Travel Duffles',
				'Tramp & Badger Polycarbonate 20" Multi-Colour Hard Sided Suitcases & Trolley Bags',
				'Safari Polyester 63 Cms Blue Travel Duffles',
				'Falcon Plus Fabric 13.5Cms Gold Travel Trolly ',
				'Nasher Miles Santorini PP Hard-Sided Cabin Luggage Bag Black 21.7 inch',
				'UNIVERSAL TRAVELLER Polyester 20" Beige-Red Soft Sided Suitcases & Trolley Bags',
				'ORKA Travel" Classic Luggage Cover Suitcase Protector Fits 31" - 33" - Black',
				'DI GRAZIA Polyester 17" Black Laptop Roller Cases',
				'TREKKER Polyester 62 Cms Red Soft Sided Suitcases & Trolley Bags',
				'Skybags Auckland 56.1 cms Cherry Red Hardsided Carry-On ',
				'Safari Re-Gloss Polycarbonate 65 cms Dark Purple Suitcases ',
				'Tramp & Badger Polycarbonate Set Of Multicolor Beautiful Butterfly Printed Hard Sided Luggage Sets',
				'Bags Bazar Polyster Wine Red Softsided Suitcase',
				'VIP Tuscany II Polyester 52 cms Blue Duffle Trolly ',
				'CLOUD 9 Boys Famous Car Character Printed Trolly For Kids 23 inch',
				'Safari Thorium Polycarbonate 77 cms Purple Hardsided Suitcase',
				'VIDHI Wine Trolley Bag 20 inch ',
				'Nasher Miles Brunei Soft-Sided Luggage Set of 3 Black Trolley/Travel/Tourist Bags',
				'Safari Revv Polyester 55 cms Brown Softsided Carry-On',
				'Rotating Lagguge wheels Bag, Printed Pattern Non-Breakable Girls/Kids Trolley Bag',
				'KILLER Polyester 44 Ltr Black Laptop Roller Cases',
				'Di Grazia Black Colour 22 inch Men Women Children Tourist Rolling with 4 Wheels Business Laptop Case Trolley',
				'Nasher Miles Santorini Polypropylene 55 cms White Brown Hard-Sided Cabin Trolley Bag',
				'Skybags Onyx Teflon 55 cms Hardsided Suitcase '
			]);
			arr.push([
				'american',
				'safari',
				'skybags',
				'pronto',
				'aristocrat',
				'amazonbasics',
				'skybags',
				'safari',
				'skybags',
				'amazonbasics',
				'american',
				'american',
				'polyester',
				'clownfish',
				'alfisha',
				'targus',
				'duffle',
				'skybags',
				'polyester',
				'polyester',
				'safari',
				'american',
				'safari',
				'choice',
				'polyester',
				'trampBadger',
				'safari',
				'falcon',
				'nasherMiles',
				'polyester',
				'orka',
				'polyester',
				'polyester',
				'skybags',
				'safari',
				'trampBadger',
				'polyster',
				'vip',
				'cloud',
				'safari',
				'vidhi',
				'asher',
				'safari',
				'rotatinglagguge',
				'Polyester',
				'diGrazia',
				'nasherMiles',
				'skybags'
			]);
			//list items
			$('#product').append("<ul id='firstOne'></ul>");
			for (var i=0;i < 48;i++) {
			var random = Math.floor(Math.random() * 1000+ 1);
			var ran=Math.floor(Math.random()*10000+1);
  			$("#firstOne").append('<li class="post" data-tag="'+arr[2][i]+'"><a href="product.html?title='+arr[1][i]+'&price='+random+'&sku='+ran+'&src='+arr[0][i]+'" target="_blank"><img src="' + arr[0][i] + '"></a><a href="product.html?title='+arr[1][i]+'&price='+random+'&sku='+ran+'&src='+arr[0][i]+'" target="_blank"><h4>'+arr[1][i]+'</h4></a><h5>'+'Rs: '+random+'</h5><h6>SKU '+ran+'</h6></li>');
  			}
			$("h6").css({
				"float":"right",
				"color":"green"
			});
			$("h5").css({
				"padding":"0",
				"padding-left":"20px",
				"color":"red"
			});
			$("img").css({
  					"width": "200",
  					"height":"200",
  					"padding":"0px 0px 0px 30px"
  				});
			$("h4").css("padding","0px 0px 0px 20px");
			$("a").css("text-decoration","none");
			//search
			$("#search").on("keyup",function(){
				var val = $(this).val().toLowerCase();
				$("li").filter(function(){
					$(this).toggle($(this).text().toLowerCase().indexOf(val) > -1)
				});
			});
				 //New Dependency Filter
			$(".dependency").one('change',function(){
				$("#newdropdown").append('<select><option value="">Secondary Brands</option><option value="pronto">Pronto</option><option value="aristocrat">Aristocrat</option><option value="amazonbasics">AmazonBasics</option></select>');
		
			});
	//Dependency Filter	 		
			$(".dependency,#newdropdown").on('change',function(){
				var category_list = [];
				 $('.dependency option:selected').each(function(){
				 	var category = $(this).val();
				 	category_list.push(category);
				 	
				 });
			var category_one = [];
			
				
				 $('#newdropdown option:selected').each(function(){
				 	var categories = $(this).val();
				 	category_one.push(categories);
				 	
				 });
				console.log(category_list+" "+category_one);    
			
				if(category_list.length == 0)
		        $('#firstOne li').fadeIn();
		      else {
		        $('#firstOne li').each(function(){
		          var item = $(this).attr('data-tag');
		          if((jQuery.inArray(item,category_list) > -1)||(jQuery.inArray(item,category_one) > -1))
		            $(this).fadeIn('slow');
		          else
		            $(this).hide();
		        });
		      }    
			});
		

			
			//dropdown filter
        
        		$( "#first" ).change(function() {
			   var str = $("#first").val();
			  if(str == 'a-z'){
			    	var items = $('#firstOne > li').get();
					items.sort(function(a,b){
					  var one = $(a).text();
					  var two = $(b).text();
					  if (one < two) return -1;
					  if (one > two) return 1;
					  return 0;
					});
					var ul = $('#firstOne');
					$.each(items, function(i, li){
					  ul.append(li); 
					});
			    }else if(str=='z-a'){
			    	var items = $('#firstOne > li').get();
					items.sort(function(a,b){
					  var one = $(a).text();
					  var two = $(b).text();
					  if (one < two) return 1;
					  if (one > two) return -1;
					  return 0;
					});
					var ul = $('#firstOne');
					$.each(items, function(i, li){
					  ul.append(li); 
					});
			    }else if(str=='Low Price To High Price'){   
							var items = $('#firstOne > li').get();
							items.sort(function(a,b){
							  var one = parseInt($(a).find("h5").text().match(/[\d\.]+/g));
							  var two = parseInt($(b).find("h5").text().match(/[\d\.]+/g));
							  if (one < two) return -1;
							  if (one > two) return 1;
							  return 0;
							});	
							var ul = $('#firstOne');
							$.each(items, function(i, li){
							  ul.append(li); 
							});
			    }else if(str=='High Price To Low Price'){
			    	var items = $('#firstOne > li').get();
					items.sort(function(a,b){
					  var one = parseInt($(a).find("h5").text().match(/[\d\.]+/g));
					  var two = parseInt($(b).find("h5").text().match(/[\d\.]+/g));
					  if (one < two) return 1;
					  if (one > two) return -1;
					  return 0;
					});
					var ul = $('#firstOne');
					$.each(items, function(i, li){
					  ul.append(li); 
					});
			    }else{
			    	 $("ul").empty().append(items);
			    }
			  });
			
		//checkbox
		$('.someflter').on('change', function(){
		      var category_list = [];
		      $('input:checked').each(function(){
		        var category = $(this).val();
		        category_list.push(category);
		        console.log(category_list);
		      });
		 
		      if(category_list.length == 0)
		        $('li').fadeIn();
		      else {
		        $('li').each(function(){
		          var item = $(this).attr('data-tag');
		          if(jQuery.inArray(item,category_list) > -1)
		            $(this).fadeIn('slow');
		          else
		            $(this).hide();
		        });
		      }   
		    });

   
		//top page
		$("#image").css({
			"position":"fixed",
		    "right":"10px",
		    "bottom":"10px",
		    "cursor":"pointer",
		    "width":"50px",
		    "height":"50px",
		    "background-color":"#666666",
		    "text-indent":"-9999px",
		    "display":"none",
		    "border-radius":"60px",
		});
		$("#image span").css({
		    "position":"absolute",
		    "top":"50%",
		    "left":"50%",
		    "margin-left":"-8px",
		    "margin-top":"-12px",
		    "height":"0",
		    "width":"0",
		    "border":"8px solid transparent",
		    "border-bottom-color":"#000000",
		});
		$("#image:hover").css({
			"background-color":"#000000",
		});

	    $(window).scroll(function(){ 
	        if ($(this).scrollTop() > 100) { 
	            $('#image').fadeIn(); 
	        } else { 
	            $('#image').fadeOut(); 
	        } 
	    }); 
	    $('#image').click(function(){ 
					$("html, body").animate({ scrollTop: 0 }, 600); 
				    return false;
		});
		 
		//pagnation Active
		$(".pagination li").click(function() {
		    if ($(".pagination li").removeClass("active")) {
		        $(this).removeClass("active");
		    }
		    $(this).addClass("active");
		});
		
		
		
	});

});
