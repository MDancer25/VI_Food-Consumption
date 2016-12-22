var capita, new_capita=[];

d3.json("dataset_percapita.json", function (data) {
        capita = data.data;
        gen_radar();
        })

function gen_radar(){
    new_capita=[];
    console.log(state);
    for(i=0; i< capita.length-1; i++){
        for(j=0; j<3; j++){
            if(capita[i].Country == state[j]){
                new_capita.push(capita[i]);
            }
        }
    }

    var chart = AmCharts.makeChart( "radarchart", {
                                   "type": "radar",
                                   "theme": "light",
                                   "dataProvider": [ {
                                                    "country": "Czech Republic",
                                                    "litres": 156.9,
                                                    "gr":20.6
                                                    }, {
                                                    "country": "Ireland",
                                                    "litres": 131.1,
                                                    "gr":34.6
                                                    }, {
                                                    "country": "Germany",
                                                    "litres": 115.8,
                                                    "gr":16.6
                                                    }, {
                                                    "country": "Australia",
                                                    "litres": 109.9,
                                                    "gr":40.6
                                                    }, {
                                                    "country": "Austria",
                                                    "litres": 108.3,
                                                    "gr":120.6
                                                    }, {
                                                    "country": "UK",
                                                    "litres": 99,
                                                    "gr":100.6
                                                    } ],
                                   "valueAxes": [ {
                                                 "axisTitleOffset": 20,
                                                 "minimum": 0,
                                                 "axisAlpha": 0.15
                                                 } ],
                                   "startDuration": 2,
                                   "graphs": [ {
                                              "balloonText": "[[value]] litres of beer per year",
                                              "bullet": "round",
                                              "lineThickness": 2,
                                              "fillAlphas": 0.3,
                                              "valueField": "litres"
                                              },
                                              {
                                              "balloonText": "[[value]] gr of beer per year",
                                              "bullet": "round",
                                              "lineThickness": 2,
                                              "fillAlphas": 0.5,
                                              "valueField": "gr"
                                              }],
                                   "categoryField": "country",
                                   "export": {
                                   "enabled": true
                                   }
                                   } );
}
