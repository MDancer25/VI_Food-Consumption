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
   var w = 450;
   var h = 1500;
   var svg = d3.select("#barchart")
    .append("svg")
    .attr("width",w)
    .attr("height",h);
    
    //sitio vertical
    var hscale = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([27,h-35]);
    
    console.log(dataset[dataset.length-1].Country);
    
    //sitio horizontal
    var wscale = d3.scaleLinear()
    .domain([0, d3.max(capita, function(d)	{return d.All;})])
    .range([120,w-5]);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    var yaxis = d3.axisTop()
    .scale(wscale);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    //eixo topo
    gY = svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .enter().append("rect")
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.All))-120, 0);})
    .attr("fill","lightblue")
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i); })
    .append("title")
    .text(function(d) {return d.Country + " : " + d.All; });
    d3.selectAll("#absolute").on("click",function(){
                                 console.log("ENTROU ON CLICK ABS1");
                                 dataset = abs;
                                 gen_abs(svg,w,h, hscale, wscale);
                                 });
    d3.selectAll("#capita").on("click", function(){
                               console.log("ENTROU ON CLICK CAPITA1");
                               dataset = capita;
                               gen_capita(svg, w, h, hscale, wscale);
                               });
    d3.selectAll("#select1").on("change", function(){
                                console.log("ENTROU ON CHANGE");
                                if( cat == "beverage"){ update_beverage(svg, w, h, hscale, wscale);}
                                else if( cat == "animal"){update_animal(svg, w, h, hscale, wscale);}
                                
                                else if( cat == "vegetable"){update_vegetal(svg, w, h, hscale, wscale);}
                                });
    
}
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Barras Capita >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

function gen_capita(svg, w, h, hscale, wscale) {
    console.log(dataset[0].All);
    //sitio vertical
    hscale = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([27,h-35]);
    
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(capita, function(d)	{return d.All;})])
    .range([120,w-5]);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    svg.selectAll("g").remove();
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    //eixo topo
    gY = svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    svg.selectAll("rect")
        .data(dataset)
        .transition()
        .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.All))-120, 0);})
    .attr("fill","lightblue")
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.All; });
    
    d3.selectAll("#absolute").on("click",function(){
                                 console.log("ENTROU ON CLICK ABS3");
                                 dataset = abs;
                                 gen_abs(svg,w,h, hscale, wscale);
                                 });
    d3.selectAll("#capita").on("click", function(){
                            console.log("ENTROU ON CLICK CAPITA3");
                               dataset = capita;
                               gen_capita(svg, w, h, hscale, wscale);
                               });
    d3.selectAll("#select1").on("change", function(){
                                console.log("ENTROU ON CHANGE");
                                if( cat == "beverage"){ update_beverage(svg, w, h, hscale, wscale);}
                                else if( cat == "animal"){update_animal(svg, w, h, hscale, wscale);}
                                
                                else if( cat == "vegetable"){update_vegetal(svg, w, h, hscale, wscale);}
                                });


}
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Barras Abs >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

function gen_abs(svg, w, h, hscale, wscale){
     console.log(dataset[0].All);
    
    //sitio vertical
    hscale = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([27,h-35]);
 
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(abs, function(d)	{return d.All;})])
    .range([120,w-5]);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
        .attr("transform", "translate(0,25)")
        .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.All))-120, 0);})
    .attr("fill","#2885a4")
    .attr("x",function(d) {
         return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.All; });
    d3.selectAll("#absolute").on("click",function(){
                                 console.log("ENTROU ON CLICK ABS2");
                                 dataset = abs;
                                 gen_abs(svg,w,h, hscale, wscale);
                                 });
    d3.selectAll("#capita").on("click", function(){
                               console.log("ENTROU ON CLICK CAPITA2");
                               dataset = capita;
                               gen_capita(svg, w, h, hscale, wscale);
                               });
    d3.selectAll("#select1").on("change", function(){
                                console.log("ENTROU ON CHANGE");
                                if(cat == "beverage"){update_beverage(svg, w, h, hscale, wscale);}
                                else if( cat == "animal"){ update_animal(svg, w, h, hscale, wscale);}
                                
                                else if( cat == "vegetable"){update_vegetal(svg, w, h, hscale, wscale);}
                                
                                
                                
                                });
    d3.selectAll("#select2").on("change", function(){
                               console.log("ENTROU ON CHANGE2");
                               if(subcat == "Milk"){      update_milk(svg, w, h, hscale, wscale); }
                               else if(subcat == "Coffee"){    update_coffee(svg, w, h, hscale, wscale); }
                               else if(subcat == "Beer"){      update_beer(svg, w, h, hscale, wscale); }
                               else if(subcat == "Wine"){      update_wine(svg, w, h, hscale, wscale); }
                               else if(subcat == "Spirits"){   update_spirits(svg, w, h, hscale, wscale); }
                               else if(subcat == "Other"){     update_other(svg, w, h, hscale, wscale); }
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

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Barras Beverage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

function update_beverage(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.All;})])
    .range([120,w-5]);
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.All))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.All; });
    d3.selectAll("#select2").on("change", function(){
                                console.log("ENTROU ON CHANGE2");
                                if(subcat == "Milk"){      update_milk(svg, w, h, hscale, wscale); }
                                else if(subcat == "Coffee"){    update_coffee(svg, w, h, hscale, wscale); }
                                else if(subcat == "Beer"){      update_beer(svg, w, h, hscale, wscale); }
                                else if(subcat == "Wine"){      update_wine(svg, w, h, hscale, wscale); }
                                else if(subcat == "Spirits"){   update_spirits(svg, w, h, hscale, wscale); }
                                else if(subcat == "Other"){     update_other(svg, w, h, hscale, wscale); }
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

/*---------------------------------------- Barras Milk ---------------------------------------*/

function update_milk(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Milk;})])
    .range([120,w-5]);
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Milk))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Milk; });
}

/*-------------------------------------- Barras Coffee ---------------------------------*/
function update_coffee(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Coffee;})])
    .range([120,w-5]);
    
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Coffee))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Coffee; });
}

/*------------------------------------- Barras Beer ----------------------------------*/
function update_beer(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Beer;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Beer;}));
    
    yaxis = d3.axisTop()
    .scale(wscale)
    .ticks(12/2);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Beer))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Beer; });
}

/*-------------------------------------- Barras Wine ---------------------------------*/
function update_wine(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Wine;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Wine;}));
    
    yaxis = d3.axisTop()
    .scale(wscale)
    .ticks(12/2);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Wine))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Wine; });
}

/*------------------------------------- Barras Spirits ---------------------------------*/
function update_spirits(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Spirits;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Spirits;}));
    
    yaxis = d3.axisTop()
    .scale(wscale)
    .ticks(12/2);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Spirits))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Spirits; });
}

/*----------------------------------- Barras Other -----------------------------------*/
function update_other(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Other;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Other;}));
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Other))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Other; });
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Barras Animal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

function update_animal(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.AnimalProducts;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.AnimalProducts;}));
    
    yaxis = d3.axisTop()
    .scale(wscale)
    .ticks(12/2);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.AnimalProducts))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.AnimalProducts; });
}
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Barras Vegetal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

function update_vegetal(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.VegetalProducts;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.VegetalProducts;}));
    
    yaxis = d3.axisTop()
    .scale(wscale)
    .ticks(12/2);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([0,h-40])
    .align([0.5]);
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
    .attr("transform", "translate(0,25)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,25)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.VegetalProducts))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.VegetalProducts; });
}

//**************************************  Cat/Subcat *****************************************

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


//**************************************  Dropdown *****************************************

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

/* ************************************** List in dropdown ***************************************/

function show_models(){
    Beverages_subcat=new Array('Milk','Coffee','Beer','Wine','Spirits', 'Other');
    Animal_subcat=new Array('Bovine Meat', 'Pigmeat', 'Poultry Meat', 'Mutton & Goat Meat', 'Offals','Fish & Seafood', 'Eggs', 'Cheese', 'Butter', 'Honey');
    Vegetable_subcat=new Array('Fruits', 'Vegetable Oils', 'Cereals', 'Pulses', 'Vegetables');
    
    brand=document.getElementById('select1');
    model=document.getElementById('select2');
    model.options.length = 1;
    selected=brand.options[brand.selectedIndex].value;
    
    console.log(selected);
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




