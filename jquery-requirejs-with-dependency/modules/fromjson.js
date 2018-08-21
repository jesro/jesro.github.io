define(['jquery','knockoutjs'],function($,ko){      
    	
        
        var data=[
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV10-10FBX Vinyl Insulated Block Fork Terminal 12-10 AWG #10 Scotchlok™",                
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.07 Inch ID x 0.0145 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P592.jpg"  
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV10-8FBX Vinyl Insulated Block Fork Terminal 12-10 AWG #8 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.07 Inch ID x 0.0145 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P1570.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV14-10FBX Vinyl Insulated Block Fork Terminal 16-14 AWG #10 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.07 Inch ID x 0.0145 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P58352.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV18-10FBX Vinyl Insulated Block Fork Terminal 22-18 AWG #10 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.09 Inch ID x 0.017 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P21149.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV14-8FBX Vinyl Insulated Block Fork Terminal 16-14 AWG #8 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.09 Inch ID x 0.017 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P39682.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV18-8FBX Vinyl Insulated Block Fork Terminal 22-18 AWG #8 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.09 Inch ID x 0.017 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P21163.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV18-6FBX Vinyl Insulated Block Fork Terminal 22-18 AWG #6 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.135 Inch ID x 0.25 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P21139.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV14-6FBX Vinyl Insulated Block Fork Terminal 16-14 AWG #6 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.135 Inch ID x 0.25 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P21179.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV10-10FX Vinyl Insulated Standard Fork Terminal 12-10 AWG #10 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.07 Inch ID x 0.0145 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P20313.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV14-10FX Vinyl Insulated Standard Fork Terminal 16-14 AWG #10 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.07 Inch ID x 0.0145 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P20306.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV14-8FX Vinyl Insulated Standard Fork Terminal 16-14 AWG #8 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.09 Inch ID x 0.017 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P20306.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV10-8FX Vinyl Insulated Standard Fork Terminal 12-10 AWG #8 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.09 Inch ID x 0.017 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P388309.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV18-8FX Vinyl Insulated Standard Fork Terminal 22-18 AWG #8 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.09 Inch ID x 0.017 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P58730.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV14-6FX Vinyl Insulated Standard Fork Terminal 16-14 AWG #6 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.135 Inch ID x 0.25 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P347019.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV18-10FX Vinyl Insulated Standard Fork Terminal 22-18 AWG #10 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.135 Inch ID x 0.25 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P476468.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MH10-14RX Polyolefin Insulated Heat Shrink Ring Terminal 12-10 AWG #6 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)","600 Volt"],
                "Diameter":"0.07 Inch ID x 0.0145 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P509191.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M MV10-8FLX Vinyl Insulated Locking Fork Terminal 12-10 AWG #8 Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","2000 Volt","600 Volt","600 Volt(Building Wiring)"],
                "Diameter":"0.09 Inch ID x 0.017 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P537537.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M M8-14R/SX 1-Hole Non-Insulated Metallic Ring Terminal #8 AWG 1/4 Inch Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","2000 Volt","600 Volt","600 Volt(Building Wiring)"],
                "Diameter":"0.07 Inch ID x 0.0145 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P1645.jpg"
            },
            {
                "Category":"Wire Terminals - Ring & Fork",
                "Name":"3M M8-14R/SX 1-Hole Non-Insulated Metallic Ring Terminal #8 AWG 1/4 Inch Scotchlok™",
                "Rating":["1000 Volt(Signs/Fixture)","600 Volt(Building Wiring)"],
                "Diameter":"0.135 Inch ID x 0.25 Inch OD",
                "Image":"https://assets.usesi.com/product-media/images/P45590.jpg"
            }
        ];
        //Model
        function model(category,sku,name,rating,diameter,image){
            this.Category=category;
            this.Sku=sku;
            this.Name=name;
            this.Rating=rating;
            this.Diameter=diameter;
            this.Image=image;
        }
        //Random Number For SKU
        var Sk=[];
        for(var i=0;i<data.length;i++){
            Sk[i]=Math.floor(Math.random()*10000+1);
        }
        //Retrieve Data From JSON
        var product=[];
        for(var i=0;i<data.length;i++){
            var Category=data[i].Category;
            var Sku=Sk[i];
            var Name=data[i].Name;
            var Rating=data[i].Rating;
            var Diameter=data[i].Diameter;
            var Image=data[i].Image;
            product.push(new model(Category,Sku,Name,Rating,Diameter,Image));
        }
        
        
       
        
            
        //view model
        function viewModel(){
            var self=this;
            self.focus=ko.observable(true);   //Focus Input
            self.allProduct=ko.observableArray(product);   //Product
            self.thirdOption=ko.observableArray(["Sort: Name - Z to A","Sort: Name - A to Z"]);
            self.dropdown=ko.observableArray(["Block","Non-Insulated","Metallic"]);
            self.Jesro=ko.observableArray(["#10","#6","#8"]);
            //Dynamic Two Dropdowns
            self.newlist=ko.observableArray();
            self.secondnewanotherlist=ko.observableArray();
            //Reset Dropdowns
            self.newlist.subscribe(function() {
                 self.secondnewanotherlist(undefined);
             });
            //Dropdown Values
            self.subtotal = ko.pureComputed(function() {
                 return self.newlist() ? self.newlist():"";
             });
            self.subtot = ko.pureComputed(function() {
                 return self.secondnewanotherlist() ? self.secondnewanotherlist():"";
             });

            //Search Filter
            self.searchInput=ko.observable();
            
            //Initializing Pagnation        
            self.CurrentPage = ko.observable(1); 
            self.DataPerPage = ko.observable(5);                
            
            //No Result
             self.noresult=ko.observable(false);
            //Filter
            
                self.thisFirst=ko.computed(function(){
                    var startIndex = self.CurrentPage() === 1? 0 : (self.CurrentPage() - 1) * self.DataPerPage();
                    if(!self.searchInput()&&!self.subtotal()){
                        return self.allProduct().slice(startIndex, startIndex + self.DataPerPage ())    
                    }
                    if(self.searchInput()||self.subtotal()){
                    return self.allProduct().filter(function(place){
                            if((place.Name.indexOf(self.subtotal())!==-1)&&(place.Name.indexOf(self.subtot())!==-1)&&(!self.searchInput()||place.Name.toLowerCase().indexOf(self.searchInput().toLowerCase())!==-1
                        ||place.Sku == self.searchInput())){
                            return place;
                        }else if((place.Name.indexOf(self.subtotal())==-1)&&(place.Name.indexOf(self.subtot())==-1)&&(!self.searchInput()||place.Name.toLowerCase().indexOf(self.searchInput().toLowerCase())==-1
                        ||place.Sku !== self.searchInput())){
                             self.noresult(true);
                        }   
                        });     //end filter
                    }

                       
                        
                });
                    
            self.write=ko.observable(true);
            self.Next = function() {
                var totalData = self.allProduct().length;
                var currentPage = self.CurrentPage();
                if(totalData >= 1 && currentPage < (Math.ceil(totalData/2))) self.CurrentPage(currentPage + 1);
                //on last page
                if(self.CurrentPage()==4){
                    self.write(false);
                }
            };
            
            self.One=function(){
                self.CurrentPage(2);
            }
            self.Two=function(){
                self.CurrentPage(3);
            }
            self.Three=function(){
                self.CurrentPage(4);
                self.write(!self.write());
            }
            self.Prev = function() {
                var currentPage = self.CurrentPage();
                if(currentPage > 1) self.CurrentPage(currentPage - 1);  //no prev
            };
            // script Ends for pagination 
            
            //Sorting
            self.sorting=ko.computed({
                read:function(){
                    return self.sorting;
                },
                write:function(value){
                    if(value=="Sort: Name - A to Z"){
                    self.allProduct.sort(function(a,b){
                        return a.Name<b.Name?-1:1;
                    });
            }else if(value=="Sort: Name - Z to A"){
                    self.allProduct.sort(function(a,b){
                        return a.Name<b.Name?1:-1;
                    });
                }
            }
                
            });
        } //end view model
    
        ko.applyBindings(viewModel);

});