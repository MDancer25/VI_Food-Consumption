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

}

function gen_abs(svg, w, h, hscale, xscale){
     console.log(dataset[0].All);
    hscale = d3.scaleLinear()
        .domain([0,dataset.length/2])
        .range([0,h]);
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
}

function choose_cat(d){
}

function choose_subcat(d){
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




