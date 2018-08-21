define(['jquery'],function($){
$(document).ready(function(){
 			var myUrl=window.location.href;
 			var obj=new URL(myUrl);
 			var title = obj.searchParams.get("title");
 			var price = obj.searchParams.get("price");
 			var sku = obj.searchParams.get("sku");
 			var src = obj.searchParams.get("src");
 			$("#title h3").html(title);
 			$("#money").html(price);
 			$("#skuget").html(sku);
 			$("#leftpic img").attr("src",src);
      var foot = Math.floor(Math.random()*1000-1);
      var foo = Math.floor(Math.random()*10);
      fin=foo-1/10;
      $(".gang").html(foot);
      $(".gan").html(foo);
      $(".gany").html(foo+1);
      $(".gon").html(fin);
 		});
});