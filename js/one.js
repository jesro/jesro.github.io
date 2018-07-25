function minus(){
					var subtract = parseInt(document.getElementsByTagName('input')[0].value);
					subtract = subtract-1;
					if(subtract<0){
						subtract=0;
					}
					document.getElementsByTagName('input')[0].value = subtract;
				}
function add(){
					var addition = parseInt(document.getElementsByTagName('input')[0].value);
					addition=addition+1;
					document.getElementsByTagName('input')[0].value = addition;
						
				}

	var hide = document.getElementById("hide");
	var hideMe = document.getElementById("hideMe");
	var readMore = document.getElementById("changeMe");
function make(){
	readMore.textContent = "Read Less";
	hideMe.style.display="inline";
	hide.style.display="none";
}


var imag = document.getElementById("myImg");
var bigImage = document.getElementById("bigpic");
var insideImg = document.getElementById("mybigImg");
var close= document.getElementById('close');
imag.addEventListener('click',function(){
bigImage.style.display="block";
var close= document.getElementById('close');
close.style.display="block";
close.style.color="white";
});
close.addEventListener('click',function(){
	bigImage.style.display="none";
	close.style.display="none";
});
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
var c = url.searchParams.get("total");
var c1 = url.searchParams.get("tot");
console.log(window.location.href);
console.log(c);
document.getElementById("added").querySelector(".marked").innerHTML=c;
document.getElementById("added").querySelector(".marking").innerHTML=c1;

/*[total,tot]=getUrlParameter();
var tally=[],tall=[];
tally.push(total);
tall.push(tall);
			for(var j=0;j<14;j++){
			var random=Math.ceil((Math.random() * 10000)+1);
			total.push(random);
			//console.log(total);
			document.getElementById(j).querySelector(".marked").innerHTML=random;
			var ran = ((Math.random()*100)+1).toFixed(2);
			tot.push(ran);
			//console.log(tot);
			document.getElementById(j).querySelector(".marking").innerHTML=ran;
			
			}*/

