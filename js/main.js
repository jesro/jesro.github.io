var arr=[],arr1=[],total=[],tot=[],jes=[];
var readyMade = document.getElementById('added');
			var createDiv = document.createElement('div');
			var number =13;
			for(var i=0;i<14;i++){
			createDiv.innerHTML=readyMade.innerHTML;
			readyMade.appendChild(createDiv);
			createDiv.setAttribute('id',number);number--;			
			}
			
			
			var child0 = document.getElementById("inc").children[0];
			var child1 = document.getElementById("inc").children[1];
			child1.value = 0;
			var child2 = document.getElementById("inc").children[2];
				child0.addEventListener('click',function(){
					var subtract = parseInt(child1.value);
					subtract = subtract-1;
					if(subtract<0){
						subtract=0;
					}
					child1.value = subtract;
				});
				child2.addEventListener('click',function(){
					var addition = parseInt(child1.value);
					addition = addition+1;
					child1.value = addition;
				});
			
			var childs0=[],childs1=[],childs2=[];

			for(var great=0;great<14;great++){
			document.getElementById(great).querySelector(".val").value=0;
			childs0.push(document.getElementById(great).querySelector(".sum"));
			childs1.push(document.getElementById(great).querySelector(".val"));
			childs2.push(document.getElementById(great).querySelector(".sub"));
			}
			//debugger;
			var apple=0;
				while(apple<14){

				childs0[apple].addEventListener('click',function(){
					subtrac = parseInt(childs1[this.app].value);
					subtrac = subtrac-1;
					if(subtrac<0){
						subtrac=0;
					}
					childs1[this.app].value = subtrac;
				});
				childs0[apple].app=apple;
				childs2[apple].addEventListener('click',function(){
					additio = parseInt(childs1[this.app].value);
					additio = additio+1;
					childs1[this.app].value = additio;
				});
				childs2[apple].app=apple;
				apple++;}

			
			/*start increment button
			// var t=0;
			// for(y=2;y<14;y++){
			// g=1;
			// gh=6;
			// var onclik = document.getElementsByTagName('button')[y];
			// onclik.addEventListener('click',function(){
					// var subtract = parseInt(document.getElementsByTagName('input')[g].value);
					// subtract = subtract-1;
					//if(subtract<0){
						//subtract=0;
					// document.getElementsByTagName('input')[g].value = subtract;
			//}
			// });
			
			
			
			// var onclk = document.getElementsByTagName('button')[y+1];
			// onclk.addEventListener('click',function(){
				// var addition = parseInt(document.getElementsByTagName('input')[g].value);
				// addition=addition+1;
				// document.getElementsByTagName('input')[g].value = addition;
			// });
			// g++;
			// gh=gh+5;
			// }
							g=1;
			var anchor = document.querySelectorAll('.sum');
			for (var i=2; i<anchor.length; i++) {
				anchor[i].addEventListener('click', handle, false);
				}

				function handle() {
					var subtract = parseInt(document.getElementsByTagName('input')[g].value);
					subtract = subtract-1;
					document.getElementsByTagName('input')[g].value = subtract;
					g++;
				}
			h=1;
			var anchor = document.querySelectorAll('.sub');
			for (var i=3; i<anchor.length; i++) {
				anchor[i].addEventListener('click', handl, false);
				}

				function handl() {
					var addition = parseInt(document.getElementsByTagName('input')[h].value);
					addition=addition+1;
					document.getElementsByTagName('input')[h].value = addition;
					h++;
				}
			//end increment button*/
			
			
			for(var j=0;j<14;j++){
								
			var sku=Math.ceil((Math.random() * 10000)+1);
			total.push(sku);
			
			document.getElementById(j).querySelector(".marked").innerHTML=sku;
			
			var price = ((Math.random()*100)+1).toFixed(2);
			tot.push(price);
			
			document.getElementById(j).querySelector(".marking").innerHTML=price;
			document.getElementById(j).querySelector(".plp").children[0].href = "product.html?total="+sku+"&tot="+price;

			}
