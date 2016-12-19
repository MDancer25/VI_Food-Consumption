var capita, abs, dataset;
var cat;
var subcat;

d3.json("dataset_percapita.json", function (data) {
        capita = data.data;
        d3.json("dataset_absolute.json", function (data) {
                abs = data.data;
                gen_vis2();
                })
        })


function gen_vis2(){
    dataset = capita;
   var w = 300;
   var h = 520;
   var svg = d3.select("#barchart")
    .append("svg")
    .attr("width",w)
    .attr("height",h);
    var hscale = d3.scaleLinear()
    .domain([0,dataset.length/2])
    .range([0,h]);
    var xscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.All;})])
    .range([300,w]);
    
    var axisscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.All;})/20])
    .range([0,w]);
    var axiscountry = d3.scaleLinear()
    .domain([dataset[0].Country, dataset[(dataset.length-37)].Country])
    .range([0,h]);
    var yaxis = d3.axisTop()
    .scale(axisscale);
    var xaxis = d3.axisLeft()
    .scale(axiscountry);
    
    gY = svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(yaxis);
    gX = svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(xaxis);
    svg.selectAll("rect")
    .data(dataset)
    .enter().append("rect")
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.All);})
    .attr("fill","lightblue")
    .attr("x",function(d) {
          return xscale(d.Beer) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .append("title")
    .text(function(d) {return d.Country + " : " + d.All; });
    d3.selectAll("#absolute").on("click",function(){
                                 console.log("ENTROU ON CLICK ABS1");
                                 dataset = abs;
                                 gen_abs(svg,w,h, hscale, xscale);
                                 });
    d3.selectAll("#capita").on("click", function(){
                               console.log("ENTROU ON CLICK CAPITA1");
                               dataset = capita;
                               gen_capita(svg, w, h, hscale, xscale);
                               });
    d3.selectAll("#select1").on("change", function(){
                                console.log("ENTROU ON CHANGE");
                                if( cat == "beverage"){ update_beverage(svg, w, h, hscale, xscale);}
                                else if( cat == "animal"){update_animal(svg, w, h, hscale, xscale);}
                                
                                else if( cat == "vegetable"){update_vegetal(svg, w, h, hscale, xscale);}
                                });
    
}

function gen_capita(svg, w, h, hscale, xscale) {
    console.log(dataset[0].All);
    svg.selectAll("rect")
        .data(dataset)
        .transition()
        .duration(1000)
        .attr("transform", "translate(26,26)")
        .attr("height",15)
        .attr("width",function(d) {return hscale(d.All);})
        .attr("fill","lightblue")
        .attr("x",function(d) {
              return xscale(d.All) - w;})
        .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.All; });
    d3.selectAll("#absolute").on("click",function(){
                                 console.log("ENTROU ON CLICK ABS3");
                                 dataset = abs;
                                 gen_abs(svg,w,h, hscale, xscale);
                                 });
    d3.selectAll("#capita").on("click", function(){
                            console.log("ENTROU ON CLICK CAPITA3");
                               dataset = capita;
                               gen_capita(svg, w, h, hscale, xscale);
                               });
    d3.selectAll("#select1").on("change", function(){
                                console.log("ENTROU ON CHANGE");
                                if( cat == "beverage"){ update_beverage(svg, w, h, hscale, xscale);}
                                else if( cat == "animal"){update_animal(svg, w, h, hscale, xscale);}
                                
                                else if( cat == "vegetable"){update_vegetal(svg, w, h, hscale, xscale);}
                                });


}

function gen_abs(svg, w, h, hscale, xscale){
     console.log(dataset[0].All);
    xscale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function(d)	{return d.All;})])
        .range([300,w]);
    
    axisscale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function(d)	{return d.All;})/3.5])
        .range([0,w]);
    yaxis = d3.axisTop()
        .scale(axisscale);
    svg.select("g").remove();
    svg.append("g")
        .attr("transform", "translate(25,25)")
        .call(yaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.All);})
    .attr("fill","#2885a4")
    .attr("x",function(d) {
          return xscale(d.All) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.All; });
    d3.selectAll("#absolute").on("click",function(){
                                 console.log("ENTROU ON CLICK ABS2");
                                 dataset = abs;
                                 gen_abs(svg,w,h, hscale, xscale);
                                 });
    d3.selectAll("#capita").on("click", function(){
                               console.log("ENTROU ON CLICK CAPITA2");
                               dataset = capita;
                               gen_capita(svg, w, h, hscale, xscale);
                               });
    d3.selectAll("#select1").on("change", function(){
                                console.log("ENTROU ON CHANGE");
                                if(cat == "beverage"){update_beverage(svg, w, h, hscale, xscale);}
                                else if( cat == "animal"){ update_animal(svg, w, h, hscale, xscale);}
                                
                                else if( cat == "vegetable"){update_vegetal(svg, w, h, hscale, xscale);}
                                
                                
                                
                                });
    d3.selectAll("#select2").on("change", function(){
                               console.log("ENTROU ON CHANGE2");
                               if(subcat == "Milk"){      update_milk(svg, w, h, hscale, xscale); }
                               else if(subcat == "Coffee"){    update_coffee(svg, w, h, hscale, xscale); }
                               else if(subcat == "Beer"){      update_beer(svg, w, h, hscale, xscale); }
                               else if(subcat == "Wine"){      update_wine(svg, w, h, hscale, xscale); }
                               else if(subcat == "Spirits"){   update_spirits(svg, w, h, hscale, xscale); }
                               else if(subcat == "Other"){     update_other(svg, w, h, hscale, xscale); }
                               /*else if(subcat == "Bovine Meat"){ info.push(abs[i].BovineMeat); }
                                else if(subcat == "Pigmeat"){ info.push(abs[i].Pigmeat); }
                                else if(subcat == "Poultry Meat"){ info.push(abs[i].PoultryMeat); }
                                else if(subcat == "Mutton & Goat Meat"){ info.push(abs[i].MuttonGoatMeat); }
                                else if(subcat == "Offals"){ info.push(abs[i].Offals); }
                                else if(subcat == "Fish & Seafood"){ info.push(abs[i].FishSeafood); }
                                else if(subcat == "Eggs"){ info.push(abs[i].Eggs); }
                                else if(subcat == "Cheese"){ info.push(abs[i].Cheese); }
                                else if(subcat == "Butter"){ info.push(abs[i].Butter); }
                                else if(subcat == "Honey"){ info.push(abs[i].Honey); }
                                else if(subcat == "Fruits"){ info.push(abs[i].Fruits); }
                                else if(subcat == "Vegetable Oils"){ info.push(abs[i].VegetableOils); }
                                else if(subcat == "Cereals"){ info.push(abs[i].Cereals); }
                                else if(subcat == "Pulses"){ info.push(abs[i].Pulses); }
                                else if(subcat == "Vegetables"){ info.push(abs[i].Vegetables); }*/
                                });

}

function update_beverage(svg, w, h, hscale, xscale){
    svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.All);})
    .attr("x",function(d) {return xscale(d.All) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.All; });
    d3.selectAll("#select2").on("change", function(){
                                console.log("ENTROU ON CHANGE2");
                                if(subcat == "Milk"){      update_milk(svg, w, h, hscale, xscale); }
                                else if(subcat == "Coffee"){    update_coffee(svg, w, h, hscale, xscale); }
                                else if(subcat == "Beer"){      update_beer(svg, w, h, hscale, xscale); }
                                else if(subcat == "Wine"){      update_wine(svg, w, h, hscale, xscale); }
                                else if(subcat == "Spirits"){   update_spirits(svg, w, h, hscale, xscale); }
                                else if(subcat == "Other"){     update_other(svg, w, h, hscale, xscale); }
                                /*else if(subcat == "Bovine Meat"){ info.push(abs[i].BovineMeat); }
                                 else if(subcat == "Pigmeat"){ info.push(abs[i].Pigmeat); }
                                 else if(subcat == "Poultry Meat"){ info.push(abs[i].PoultryMeat); }
                                 else if(subcat == "Mutton & Goat Meat"){ info.push(abs[i].MuttonGoatMeat); }
                                 else if(subcat == "Offals"){ info.push(abs[i].Offals); }
                                 else if(subcat == "Fish & Seafood"){ info.push(abs[i].FishSeafood); }
                                 else if(subcat == "Eggs"){ info.push(abs[i].Eggs); }
                                 else if(subcat == "Cheese"){ info.push(abs[i].Cheese); }
                                 else if(subcat == "Butter"){ info.push(abs[i].Butter); }
                                 else if(subcat == "Honey"){ info.push(abs[i].Honey); }
                                 else if(subcat == "Fruits"){ info.push(abs[i].Fruits); }
                                 else if(subcat == "Vegetable Oils"){ info.push(abs[i].VegetableOils); }
                                 else if(subcat == "Cereals"){ info.push(abs[i].Cereals); }
                                 else if(subcat == "Pulses"){ info.push(abs[i].Pulses); }
                                 else if(subcat == "Vegetables"){ info.push(abs[i].Vegetables); }*/
                                });

                                

}

function update_milk(svg, w, h, hscale, xscale){
    xscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Milk;})])
    .range([300,w]);
    
    console.log(d3.max(dataset, function(d)	{return d.Milk;}));
    
    axisscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Milk;})/3.5])
    .range([0,w]);
    yaxis = d3.axisTop()
    .scale(axisscale);
    svg.select("g").remove();
    svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(yaxis);
    
    
    svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.Milk);})
    .attr("x",function(d) {
          return xscale(d.Milk) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Milk; });
}

function update_coffee(svg, w, h, hscale, xscale){
    xscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Coffee;})])
    .range([300,w]);
    
    console.log(d3.max(dataset, function(d)	{return d.Coffee;}));
    
    axisscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Coffee;})/3.5])
    .range([0,w]);
    yaxis = d3.axisTop()
    .scale(axisscale);
    svg.select("g").remove();
    svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(yaxis);
    
    
    svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.Coffee);})
    .attr("x",function(d) {
          return xscale(d.Coffee) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Coffee; });
}

function update_beer(svg, w, h, hscale, xscale){
    xscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Beer;})])
    .range([300,w]);
    
    console.log(d3.max(dataset, function(d)	{return d.Beer;}));
    
    axisscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Beer;})/3.5])
    .range([0,w]);
    yaxis = d3.axisTop()
    .scale(axisscale);
    svg.select("g").remove();
    svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(yaxis);


    svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.Beer);})
    .attr("x",function(d) {
          return xscale(d.Beer) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Beer; });
}

function update_wine(svg, w, h, hscale, xscale){
    xscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Wine;})])
    .range([300,w]);
    
    console.log(d3.max(dataset, function(d)	{return d.Wine;}));
    
    axisscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Wine;})/3.5])
    .range([0,w]);
    yaxis = d3.axisTop()
    .scale(axisscale);
    svg.select("g").remove();
    svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(yaxis);
    
    
    svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.Wine);})
    .attr("x",function(d) {
          return xscale(d.Wine) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Wine; });
}

function update_spirits(svg, w, h, hscale, xscale){
    xscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Spirits;})])
    .range([300,w]);
    
    console.log(d3.max(dataset, function(d)	{return d.Spirits;}));
    
    axisscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Spirits;})/3.5])
    .range([0,w]);
    yaxis = d3.axisTop()
    .scale(axisscale);
    svg.select("g").remove();
    svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(yaxis);
    
    
    svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.Spirits);})
    .attr("x",function(d) {
          return xscale(d.Spirits) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Spirits; });
}

function update_other(svg, w, h, hscale, xscale){
    xscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Other;})])
    .range([300,w]);
    
    console.log(d3.max(dataset, function(d)	{return d.Other;}));
    
    axisscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Other;})/3.5])
    .range([0,w]);
    yaxis = d3.axisTop()
    .scale(axisscale);
    svg.select("g").remove();
    svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(yaxis);
    
    
    svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.Other);})
    .attr("x",function(d) {
          return xscale(d.Other) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Other; });
}

function update_animal(svg, w, h, hscale, xscale){
    xscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.AnimalProducts;})])
    .range([300,w]);
    
    console.log(d3.max(dataset, function(d)	{return d.AnimalProducts;}));
    
    axisscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.AnimalProducts;})/3.5])
    .range([0,w]);
    yaxis = d3.axisTop()
    .scale(axisscale);
    svg.select("g").remove();
    svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(yaxis);
    
    
    svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.AnimalProducts);})
    .attr("x",function(d) {
          return xscale(d.AnimalProducts) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.AnimalProducts; });
}

function update_vegetal(svg, w, h, hscale, xscale){
    xscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.VegetalProducts;})])
    .range([300,w]);
    
    axisscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.VegetalProducts;})/3.5])
    .range([0,w]);
    yaxis = d3.axisTop()
    .scale(axisscale);
    svg.select("g").remove();
    svg.append("g")
    .attr("transform", "translate(25,25)")
    .call(yaxis);


    
    svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("transform", "translate(26,26)")
    .attr("height",15)
    .attr("width",function(d) {return hscale(d.VegetalProducts);})
    .attr("x",function(d) {
          return xscale(d.VegetalProducts) - w;})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.VegetalProducts; });
}


function choose_cat(){
    sel1=document.getElementById('select1');
    cat=brand.options[brand.selectedIndex].value;
    console.log(cat);
}

function choose_subcat(){
    sel2=document.getElementById('select2');
    subcat=brand2.options[brand2.selectedIndex].text;
    console.log(subcat);
}


//----------------------------------------------------------------------------------

/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
function myFunction() {
    var place = document.getElementById("myDropdown3").style.top;
    document.getElementById("myDropdown3").style.top = "535px";
    if(place == "535px"){
            document.getElementById("myDropdown3").style.top = "490px";
    }
    var is_showed = document.getElementById("myDropdown2").classList.contains("show");
    if( is_showed == true){
        myFunction2();
    }
    document.getElementById("chartdiv").style.visibility = "visible";
    document.getElementById("mapdiv").style.visibility = "hidden";
    document.getElementById("myDropdown").classList.toggle("show");
    
}

function myFunction2() {
    var is_showed = document.getElementById("myDropdown").classList.contains("show");
    if( is_showed == true){
        myFunction();
    }
    document.getElementById("chartdiv").style.visibility = "hidden";
    document.getElementById("mapdiv").style.visibility = "visible";
    document.getElementById("myDropdown2").classList.toggle("show");
}

/* ------------------------------ List in dropdown --------------------------------*/

function show_models(){
    Beverages_subcat=new Array('Milk','Coffee','Beer','Wine','Spirits', 'Other');
    Animal_subcat=new Array('Bovine Meat', 'Pigmeat', 'Poultry Meat', 'Mutton & Goat Meat', 'Offals','Fish & Seafood', 'Eggs', 'Cheese', 'Butter', 'Honey');
    Vegetable_subcat=new Array('Fruits', 'Vegetable Oils', 'Cereals', 'Pulses', 'Vegetables');
    
    brand=document.getElementById('select1');
    model=document.getElementById('select2');
    model.options.length = 1;
    selected=brand.options[brand.selectedIndex].value;
    if(selected=="beverage") {
        arr=Beverages_subcat;
    }
    else if(selected=="animal") {
        arr=Animal_subcat;
    }
    
    else if(selected == "vegetable"){
        arr=Vegetable_subcat;
    }
    
    
    for(i=0;i<arr.length;i++) {
        var option = document.createElement("option");
        option.text = arr[i];
        model.add(option);
    }
}




