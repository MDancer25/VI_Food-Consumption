var capita, new_capita2=[];
var veg = Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
var cer = Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
var frt = Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
var fat = Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
var maxANIMAL = 0;
var maxCEREAL = 0;
var maxFAT = 0;
var maxFRUIT = 0;
var maxVEG = 0;
var countries = ["", "", ""];


d3.json("dataset_percapita.json", function (data) {
        capita = data.data;
		maxANIMAL = d3.max(capita, function(d)	{return d.AnimalProducts;});
		maxCEREAL = d3.max(capita, function(d)	{return d.Cereals;});
		maxFAT = d3.max(capita, function(d)	{return d.Fats;});
		maxFRUIT = d3.max(capita, function(d)	{return d.Fruits;});
		maxVEG = d3.max(capita, function(d)	{return d.Vegetables;});
        gen_radar();
        })

 d3.max
function gen_radar(){
	var aprod = Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
	console.log(maxANIMAL);
	console.log(maxCEREAL);
	console.log(maxFAT);
	console.log(maxFRUIT);
	console.log(maxVEG);
	console.log("APROD");
	console.log(aprod);
	veg = Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
	cer = Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
	frt = Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
	fat = Array.apply(null, Array(3)).map(Number.prototype.valueOf,0);
	
    new_capita2=[];
    console.log(state);
    for(i=0; i< capita.length; i++){
        for(j=0; j<3; j++){
            if(capita[i].Country == state[j]){
                new_capita2.push(capita[i]);
				countries[j] = capita[i].Country;
            }
        }
    }
    console.log("NEW CAPITA: " + new_capita2);
	for(i=0; i<new_capita2.length;i++){
		aprod[i]=new_capita2[i].AnimalProducts/maxANIMAL;
		veg[i] = new_capita2[i].Vegetables/maxVEG;
		cer[i] = new_capita2[i].Cereals/maxCEREAL;
		frt[i] = new_capita2[i].Fruits/maxFRUIT;
		fat[i] = new_capita2[i].Fats/maxFAT;
	}
    var chart = AmCharts.makeChart( "radarchart", {
                                   "type": "radar",
                                   "theme": "light",
                                   "dataProvider": [ {
                                                    "product": "Animal Products",
                                                    "country1": aprod[0],
                                                    "country2": aprod[1],
													"country3": aprod[2]
                                                    }, {
                                                    "product": "Vegetables",
                                                    "country1": veg[0],
                                                    "country2": veg[1],
													"country3": veg[2]
                                                    }, {
                                                    "product": "Cereals",
                                                    "country1": cer[0],
                                                    "country2": cer[1],
													"country3": cer[2]
                                                    }, {
                                                    "product": "Fruits",
                                                    "country1": frt[0],
                                                    "country2": frt[1],
													"country3": frt[2]
                                                    }, {
                                                    "product": "Fats",
                                                    "country1": fat[0],
                                                    "country2": fat[1],
													"country3": fat[2]
                                                    } ],
                                   "valueAxes": [ {
                                                 "axisTitleOffset": 20,
                                                 "minimum": 0,
												 "maximum": 1,
                                                 "axisAlpha": 0.15
                                                 } ],
                                   "startDuration": 0.05,
                                   "graphs": [ {
                                              "balloonText": "kcal consumed by " + countries[0],
                                              "bullet": "round",
                                              "lineThickness": 2,
                                              "lineColor":colors2[0],
                                              "valueField": "country1"
                                              },
                                              {
                                              "balloonText": "kcal consumed by " + countries[1],
                                              "bullet": "round",
                                              "lineThickness": 2,
                                              "lineColor":colors2[1],
                                              "valueField": "country2"
                                              },
                                              {
                                              "balloonText": "kcal consumed by " + countries[2],
                                              "bullet": "round",
                                              "lineThickness": 2,
                                              "lineColor": colors2[2],
                                              "valueField": "country3"
                                              }],
                                   "categoryField": "product",
                                   "export": {
                                   "enabled": false
                                   }
                                   } );
}
