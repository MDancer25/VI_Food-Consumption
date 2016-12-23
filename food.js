var capita, abs, dataset;
var cat;
var subcat;

d3.json("dataset_percapita.json", function (data) {
        capita = data.data;
        d3.json("dataset_absolute.json", function (data) {
                abs = data.data;
                gen_vis2();
                gen_life();
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
    .range([47,h-35]);
    
    //sitio horizontal
    var wscale = d3.scaleLinear()
    .domain([0, d3.max(capita, function(d)	{return d.All;})])
    .range([120,w-5]);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([45,h-15])
    .align([0.5]);
    
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    var yaxis = d3.axisTop()
    .scale(wscale);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,0)")
    .call(xaxis);
    
    //eixo topo
    gY = svg.append("g")
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    svg.append("text")
    .attr("transform", "translate(" + (w - 50) + " , 15)")
    .style("text-anchor", "middle")
    .text("kcal/per capita");
    
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
    
    d3.selectAll("#select2").on("change", function(){
                                console.log("ENTROU ON CHANGE2");
                                if(subcat == "Milk"){      update_milk(svg, w, h, hscale, wscale); }
                                else if(subcat == "Coffee"){    update_coffee(svg, w, h, hscale, wscale); }
                                else if(subcat == "Beer"){      update_beer(svg, w, h, hscale, wscale); }
                                else if(subcat == "Wine"){      update_wine(svg, w, h, hscale, wscale); }
                                else if(subcat == "Spirits"){   update_spirits(svg, w, h, hscale, wscale); }
                                else if(subcat == "Other"){     update_other(svg, w, h, hscale, wscale); }
                                else if(subcat == "Bovine Meat"){ update_bovine(svg, w, h, hscale, wscale); }
                                else if(subcat == "Pigmeat"){ update_pigmeat(svg, w, h, hscale, wscale); }
                                else if(subcat == "Poultry Meat"){ update_poultry(svg, w, h, hscale, wscale); }
                                else if(subcat == "Mutton & Goat Meat"){update_mutton(svg, w, h, hscale, wscale);}
                                else if(subcat == "Offals"){ update_offals(svg, w, h, hscale, wscale); }
                                else if(subcat == "Fish & Seafood"){ update_fish(svg, w, h, hscale, wscale); }
                                else if(subcat == "Eggs"){ update_eggs(svg, w, h, hscale, wscale); }
                                else if(subcat == "Cheese"){ update_cheese(svg, w, h, hscale, wscale); }
                                else if(subcat == "Butter"){ update_butter(svg, w, h, hscale, wscale); }
                                else if(subcat == "Honey"){ update_honey(svg, w, h, hscale, wscale); }
                                else if(subcat == "Honey"){ info.push(abs[i].Honey); }
                                else if(subcat == "Fruits"){ update_fruits(svg, w, h, hscale, wscale); }
                                else if(subcat == "Vegetable Oils"){update_oils(svg, w, h, hscale, wscale); }
                                else if(subcat == "Cereals"){ update_cereals(svg, w, h, hscale, wscale); }
                                else if(subcat == "Pulses"){ update_pulses(svg, w, h, hscale, wscale); }
                                else if(subcat == "Vegetables"){ update_vegetables(svg, w, h, hscale, wscale); }
                                });
}
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Barras Capita >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

function gen_capita(svg, w, h, hscale, wscale) {
    //sitio vertical
    hscale = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([47,h-35]);
    
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(capita, function(d)	{return d.All;})])
    .range([120,w-5]);
    
    //eixo ordinal
     x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([45,h-15])
    .align([0.5]);
    
    
     xaxis = d3.axisLeft()
    .scale(x);
    
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    svg.selectAll("g").remove();
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,0)")
    .call(xaxis);
    
    //eixo topo
    gY = svg.append("g")
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    svg.select("text")
    .attr("transform", "translate(" + (w - 50) + " , 15)")
    .style("text-anchor", "middle")
    .text("kcal/per capita");
    
    svg.selectAll("rect")
        .data(capita)
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
    d3.selectAll("#select1").on("change", function(){
                                console.log("ENTROU ON CHANGE");
                                if( cat == "beverage"){ update_beverage(svg, w, h, hscale, wscale);}
                                else if( cat == "animal"){update_animal(svg, w, h, hscale, wscale);}
                                
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
                                else if(subcat == "Bovine Meat"){ update_bovine(svg, w, h, hscale, wscale); }
                                else if(subcat == "Pigmeat"){ update_pigmeat(svg, w, h, hscale, wscale); }
                                else if(subcat == "Poultry Meat"){ update_poultry(svg, w, h, hscale, wscale); }
                                else if(subcat == "Mutton & Goat Meat"){update_mutton(svg, w, h, hscale, wscale);}
                                else if(subcat == "Offals"){ update_offals(svg, w, h, hscale, wscale); }
                                else if(subcat == "Fish & Seafood"){ update_fish(svg, w, h, hscale, wscale); }
                                else if(subcat == "Eggs"){ update_eggs(svg, w, h, hscale, wscale); }
                                else if(subcat == "Cheese"){ update_cheese(svg, w, h, hscale, wscale); }
                                else if(subcat == "Butter"){ update_butter(svg, w, h, hscale, wscale); }
                                else if(subcat == "Honey"){ update_honey(svg, w, h, hscale, wscale); }
                                else if(subcat == "Honey"){ info.push(abs[i].Honey); }
                                else if(subcat == "Fruits"){ update_fruits(svg, w, h, hscale, wscale); }
                                else if(subcat == "Vegetable Oils"){update_oils(svg, w, h, hscale, wscale); }
                                else if(subcat == "Cereals"){ update_cereals(svg, w, h, hscale, wscale); }
                                else if(subcat == "Pulses"){ update_pulses(svg, w, h, hscale, wscale); }
                                else if(subcat == "Vegetables"){ update_vegetables(svg, w, h, hscale, wscale); }
                                });
    
    
    
    
    
    
}
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Barras Abs >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

function gen_abs(svg, w, h, hscale, wscale){
    hscale = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([47,h-35]);
    
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(abs, function(d)	{return d.All;})])
    .range([120,w-5]);
    
    //eixo ordinal
    x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([45,h-15])
    .align([0.5]);
    
    
    xaxis = d3.axisLeft()
    .scale(x);
    
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    
    svg.selectAll("g").remove();
    
    //eixo cima
    svg.append("g")
        .attr("transform", "translate(0,45)")
        .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,0)")
    .call(xaxis);
    
    svg.select("text")
    .attr("transform", "translate(" + (w - 50) + " , 15)")
    .style("text-anchor", "middle")
    .text("10000 kcal");
    
    svg.selectAll("rect")
    .data(abs)
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
                                else if(subcat == "Bovine Meat"){ update_bovine(svg, w, h, hscale, wscale); }
                                else if(subcat == "Pigmeat"){ update_pigmeat(svg, w, h, hscale, wscale); }
                                else if(subcat == "Poultry Meat"){ update_poultry(svg, w, h, hscale, wscale); }
                                else if(subcat == "Mutton & Goat Meat"){update_mutton(svg, w, h, hscale, wscale);}
                                else if(subcat == "Offals"){ update_offals(svg, w, h, hscale, wscale); }
                                else if(subcat == "Fish & Seafood"){ update_fish(svg, w, h, hscale, wscale); }
                                else if(subcat == "Eggs"){ update_eggs(svg, w, h, hscale, wscale); }
                                else if(subcat == "Cheese"){ update_cheese(svg, w, h, hscale, wscale); }
                                else if(subcat == "Butter"){ update_butter(svg, w, h, hscale, wscale); }
                                else if(subcat == "Honey"){ update_honey(svg, w, h, hscale, wscale); }
                                else if(subcat == "Honey"){ info.push(abs[i].Honey); }
                                else if(subcat == "Fruits"){ update_fruits(svg, w, h, hscale, wscale); }
                                else if(subcat == "Vegetable Oils"){update_oils(svg, w, h, hscale, wscale); }
                                else if(subcat == "Cereals"){ update_cereals(svg, w, h, hscale, wscale); }
                                else if(subcat == "Pulses"){ update_pulses(svg, w, h, hscale, wscale); }
                                else if(subcat == "Vegetables"){ update_vegetables(svg, w, h, hscale, wscale); }

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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
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

/*----------------------------------- Barras Bovine Meat -----------------------------------*/
function update_bovine(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.BovineMeat;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.BovineMeat;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.BovineMeat))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.BovineMeat; });
}

/*----------------------------------- Barras Pig Meat -----------------------------------*/
function update_pigmeat(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Pigmeat;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Pigmeat;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Pigmeat))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Pigmeat; });
}

/*----------------------------------- Barras Poultry Meat -----------------------------------*/
function update_poultry(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.PoultryMeat;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.PoultryMeat;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.PoultryMeat))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.PoultryMeat; });
}
/*----------------------------------- Barras Mutton & Goat Meat -----------------------------------*/
function update_mutton(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.MuttonGoatMeat;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.MuttonGoatMeat;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.MuttonGoatMeat))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.MuttonGoatMeat; });
}

/*----------------------------------- Barras Offals Meat -----------------------------------*/
function update_offals(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Offals;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Offals;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Offals))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Offals; });
}

/*----------------------------------- Barras Fish & Seafood -----------------------------------*/
function update_fish(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.FishSeafood;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.FishSeafood;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.FishSeafood))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.FishSeafood; });
}

/*----------------------------------- Barras Eggs -----------------------------------*/
function update_eggs(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Eggs;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Eggs;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Eggs))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Eggs; });
}

/*----------------------------------- Barras Cheese -----------------------------------*/
function update_cheese(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Cheese;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Cheese;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Cheese))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Cheese; });
}

/*----------------------------------- Barras Butter -----------------------------------*/
function update_butter(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Butter;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Butter;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Butter))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Butter; });
}


/*----------------------------------- Barras Honey -----------------------------------*/
function update_honey(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Honey;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Honey;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Honey))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Honey; });
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
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

/*----------------------------------- Barras Fruits -----------------------------------*/
function update_fruits(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Fruits;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Fruits;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Fruits))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Fruits; });
}

/*----------------------------------- Barras Vegetable oils -----------------------------------*/
function update_oils(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.VegetableOils;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.VegetableOils;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.VegetableOils))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.VegetableOils; });
}
/*----------------------------------- Barras Cereals -----------------------------------*/
function update_cereals(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Cereals;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Cereals;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Cereals))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Cereals; });
}
/*----------------------------------- Barras Pulses -----------------------------------*/
function update_pulses(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Pulses;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Pulses;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Pulses))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Pulses; });
}

/*----------------------------------- Barras Vegetables -----------------------------------*/
function update_vegetables(svg, w, h, hscale, wscale){
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d)	{return d.Vegetables;})])
    .range([120,w-5]);
    
    
    console.log(d3.max(dataset, function(d)	{return d.Vegetables;}));
    
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
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,45)")
    .call(xaxis);
    
    svg.selectAll("rect")
    .data(dataset)
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.Vegetables))-120, 0);})
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i) + 2; })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.Vegetables; });
}


//***************************************** Life Expectancy *****************************************

function gen_life(){
    dataset = capita;
    var w = 450;
    var h = 1500;
    var svg = d3.select("#lifechart")
    .append("svg")
    .attr("width",w)
    .attr("height",h);
    
    //sitio vertical
    var hscale = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([47,h-35]);
    
    //sitio horizontal
    var wscale = d3.scaleLinear()
    .domain([0, d3.max(capita, function(d)	{return d.LifeExpectancyTotal;})])
    .range([120,w-5]);
    
    //eixo ordinal
    var x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([45,h-15])
    .align([0.5]);
    
    
    var xaxis = d3.axisLeft()
    .scale(x);
    
    var yaxis = d3.axisTop()
    .scale(wscale);
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,0)")
    .call(xaxis);
    
    //eixo topo
    gY = svg.append("g")
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    svg.append("text")
    .attr("transform", "translate(" + (w - 50) + " , 15)")
    .style("text-anchor", "middle")
    .text("years");
    
    svg.selectAll("rect")
    .data(dataset)
    .enter().append("rect")
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.LifeExpectancyTotal))-120, 1);})
    .attr("fill","#333399")
    .attr("x",function(d) {
          return wscale(0.5);})
    .attr("y",function(d, i) {return hscale(i); })
    .append("title")
    .text(function(d) {return d.Country + " : " + d.LifeExpectancyTotal; });
    d3.selectAll("#total").on("click",function(){
                              gen_life_total(svg, w, h, hscale, wscale);
                                 });
    d3.selectAll("#fem").on("click", function(){
                               gen_life_fem(svg, w, h, hscale, wscale);
                               });
    d3.selectAll("#masc").on("click", function(){
                               gen_life_masc(svg, w, h, hscale, wscale);
                               });
    

}

function gen_life_total(svg, w,h,hscale, wscale){
    
    //sitio vertical
    hscale = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([47,h-35]);
    
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(capita, function(d)	{return d.LifeExpectancyTotal;})])
    .range([120,w-5]);
    
    //eixo ordinal
    x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([45,h-15])
    .align([0.5]);
    
    
    xaxis = d3.axisLeft()
    .scale(x);
    
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    svg.selectAll("g").remove();
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,0)")
    .call(xaxis);
    
    //eixo topo
    gY = svg.append("g")
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    svg.select("text")
    .attr("transform", "translate(" + (w - 50) + " , 15)")
    .style("text-anchor", "middle")
    .text("years");
    
    svg.selectAll("rect")
    .data(capita)
    .filter(function(d){
            if(state.length<1){return d.Country;}
            else{ for (k=0; k<3; k++){
            return d.Country==state[k];
            }
            }
            })
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.LifeExpectancyTotal))-120, 0);})
    .attr("fill","#333399")
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.LifeExpectancyTotal; });
    d3.selectAll("#total").on("click",function(){
                              gen_life_total(svg, w, h, hscale, wscale);
                              });
    d3.selectAll("#fem").on("click", function(){
                            gen_life_fem(svg, w, h, hscale, wscale);
                            });
    d3.selectAll("#masc").on("click", function(){
                             gen_life_masc(svg, w, h, hscale, wscale);
                             });
}



function gen_life_fem(svg, w,h,hscale, wscale){
    
    //sitio vertical
    hscale = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([47,h-35]);
    
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(capita, function(d)	{return d.LifeExpectancyFemale;})])
    .range([120,w-5]);
    
    //eixo ordinal
    x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([45,h-15])
    .align([0.5]);
    
    
    xaxis = d3.axisLeft()
    .scale(x);
    
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    svg.selectAll("g").remove();
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,0)")
    .call(xaxis);
    
    //eixo topo
    gY = svg.append("g")
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    svg.select("text")
    .attr("transform", "translate(" + (w - 50) + " , 15)")
    .style("text-anchor", "middle")
    .text("years");
    
    svg.selectAll("rect")
    .data(capita)
    .filter(function(d){
            if(state.length<1){return d.Country;}
            else{ for (k=0; k<3; k++){
            return d.Country==state[k];
            }
            }
            })
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.LifeExpectancyFemale))-120, 0);})
    .attr("fill","#ff6699")
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.LifeExpectancyFemale; });
    d3.selectAll("#total").on("click",function(){
                              gen_life_total(svg, w, h, hscale, wscale);
                              });
    d3.selectAll("#fem").on("click", function(){
                            gen_life_fem(svg, w, h, hscale, wscale);
                            });
    d3.selectAll("#masc").on("click", function(){
                             gen_life_masc(svg, w, h, hscale, wscale);
                             });
}

function gen_life_masc(svg, w,h,hscale, wscale){
    //sitio vertical
    hscale = d3.scaleLinear()
    .domain([0,dataset.length-1])
    .range([47,h-35]);
    
    //sitio horizontal
    wscale = d3.scaleLinear()
    .domain([0, d3.max(capita, function(d)	{return d.LifeExpectancyMale;})])
    .range([120,w-5]);
    
    //eixo ordinal
    x = d3.scaleBand()
    .domain(capita.map(function(d){ return d.Country;}))
    .range([45,h-15])
    .align([0.5]);
    
    
    xaxis = d3.axisLeft()
    .scale(x);
    
    
    yaxis = d3.axisTop()
    .scale(wscale);
    
    svg.selectAll("g").remove();
    
    //eixo esquerda
    gX = svg.append("g")
    .attr("transform", "translate(120,0)")
    .call(xaxis);
    
    //eixo topo
    gY = svg.append("g")
    .attr("transform", "translate(0,45)")
    .call(yaxis);
    
    svg.select("text")
    .attr("transform", "translate(" + (w - 50) + " , 15)")
    .style("text-anchor", "middle")
    .text("kcal/per capita");
    
    svg.selectAll("rect")
    .data(capita)
    .filter(function(d){
            if(state.length<1){return d.Country;}
            else{ for (k=0; k<3; k++){
            return d.Country==state[k];
            }
            }
            })
    .transition()
    .duration(1000)
    .attr("height",20)
    .attr("width",function(d) {return Math.max((wscale(d.LifeExpectancyMale))-120, 0);})
    .attr("fill","#0066cc")
    .attr("x",function(d) {
          return wscale(0.03);})
    .attr("y",function(d, i) {return hscale(i); })
    .select("title")
    .text(function(d) {return d.Country + " : " + d.LifeExpectancyMale; });
    d3.selectAll("#total").on("click",function(){
                              gen_life_total(svg, w, h, hscale, wscale);
                              });
    d3.selectAll("#fem").on("click", function(){
                            gen_life_fem(svg, w, h, hscale, wscale);
                            });
    d3.selectAll("#masc").on("click", function(){
                             gen_life_masc(svg, w, h, hscale, wscale);
                             });

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
    document.getElementById("barchart").style.visibility = "visible";
    document.getElementById("mapdiv").style.visibility = "hidden";
    document.getElementById("stackedbar").style.visibility = "hidden";
    document.getElementById("gaugechart").style.visibility = "hidden";
    document.getElementById("radarchart").style.visibility = "hidden";
    document.getElementById("absolute").style.visibility = "visible";
    document.getElementById("capita").style.visibility = "visible";
    document.getElementById("lifechart").style.visibility = "hidden";
    document.getElementById("total").style.visibility = "hidden";
    document.getElementById("fem").style.visibility = "hidden";
    document.getElementById("masc").style.visibility = "hidden";
    document.getElementById("myDropdown").classList.toggle("show");
    
}

function myFunction2() {
    var is_showed = document.getElementById("myDropdown").classList.contains("show");
    if( is_showed == true){
        myFunction();
    }
    document.getElementById("chartdiv").style.visibility = "hidden";
    document.getElementById("barchart").style.visibility = "hidden";
    document.getElementById("mapdiv").style.visibility = "visible";
    document.getElementById("stackedbar").style.visibility = "hidden";
    document.getElementById("gaugechart").style.visibility = "hidden";
    document.getElementById("absolute").style.visibility = "hidden";
    document.getElementById("capita").style.visibility = "hidden";
    document.getElementById("radarchart").style.visibility = "hidden";
    document.getElementById("lifechart").style.visibility = "hidden";
    document.getElementById("total").style.visibility = "hidden";
    document.getElementById("fem").style.visibility = "hidden";
    document.getElementById("masc").style.visibility = "hidden";
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myShow(){
    if(document.getElementById("Consumptions").checked){
        document.getElementById("stackedbar").style.visibility = "visible";
        document.getElementById("gaugechart").style.visibility = "hidden";
        document.getElementById("radarchart").style.visibility = "visible";
        document.getElementById("lifechart").style.visibility = "hidden";
        document.getElementById("total").style.visibility = "hidden";
        document.getElementById("fem").style.visibility = "hidden";
        document.getElementById("masc").style.visibility = "hidden";
    }
    else if(document.getElementById("Obesity").checked){
        document.getElementById("stackedbar").style.visibility = "hidden";
        document.getElementById("radarchart").style.visibility = "visible";
        document.getElementById("gaugechart").style.visibility = "visible";
        document.getElementById("lifechart").style.visibility = "hidden";
        document.getElementById("total").style.visibility = "visible";
        document.getElementById("fem").style.visibility = "visible";
        document.getElementById("masc").style.visibility = "visible";
    }
    else if(document.getElementById("LifeExpectancy").checked){
        document.getElementById("stackedbar").style.visibility = "hidden";
        document.getElementById("radarchart").style.visibility = "hidden";
        document.getElementById("gaugechart").style.visibility = "hidden";
        document.getElementById("lifechart").style.visibility = "visible";
        document.getElementById("total").style.visibility = "visible";
        document.getElementById("fem").style.visibility = "visible";
        document.getElementById("masc").style.visibility = "visible";
    }
    
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




