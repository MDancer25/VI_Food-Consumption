var capita, names=[];

d3.json("dataset_percapita.json", function (data) {
        capita = data.data;
        gen_gauge();
        })

function gen_gauge(){
    var new_info=[];
    names=[];
    for(i=0; i< capita.length; i++){
        for(j=0; j<3; j++){
            if(capita[i].Country == state[j]){
                    new_info.push(capita[i].ObesityTotal);
                    names.push(capita[i].Country);
            }
        }
    }
    console.log("names length:" + (4-names.length));
    for(k=0; k<(4- (names.length-1)); k++){
        console.log("k: " + k);
        names.push("Country");
        new_info.push(0);
    }
    console.log("NAMES: "+ names);
    
    
    var gaugeChart = AmCharts.makeChart("gaugechart", {
                                        "type": "gauge",
                                        "theme": "dark",
                                        "title": "Obesity",
                                        "axes": [{
                                                 "axisAlpha": 0,
                                                 "tickAlpha": 0,
                                                 "labelsEnabled": false,
                                                 "startValue": 0,
                                                 "endValue": 100,
                                                 "startAngle": 0,
                                                 "endAngle": 270,
                                                 "bands": [{
                                                           "color": "#eee",
                                                           "startValue": 0,
                                                           "endValue": 100,
                                                           "radius": "80%",
                                                           "innerRadius": "65%"
                                                           }, {
                                                           "color": "#ffb366",
                                                           "startValue": 0,
                                                           "endValue": new_info[0],
                                                           "radius": "80%",
                                                           "innerRadius": "65%",
                                                           "balloonText": new_info[0]
                                                           }, {
                                                           "color": "#eee",
                                                           "startValue": 0,
                                                           "endValue": 100,
                                                           "radius": "60%",
                                                           "innerRadius": "45%"
                                                           }, {
                                                           "color": "#e67300",
                                                           "startValue": 0,
                                                           "endValue": new_info[1],
                                                           "radius": "60%",
                                                           "innerRadius": "45%",
                                                           "balloonText": new_info[1]
                                                           }, {
                                                           "color": "#eee",
                                                           "startValue": 0,
                                                           "endValue": 100,
                                                           "radius": "40%",
                                                           "innerRadius": "25%"
                                                           }, {
                                                           "color": "#994d00",
                                                           "startValue": 0,
                                                           "endValue": new_info[2],
                                                           "radius": "40%",
                                                           "innerRadius": "25%",
                                                           "balloonText": new_info[2]
                                                           }]
                                                 }],
                                        "allLabels": [{
                                                      "text": names[0],
                                                      "x": "49%",
                                                      "y": "15%",
                                                      "size": 15,
                                                      "bold": true,
                                                      "color": "#ffb366",
                                                      "align": "right"
                                                      }, {
                                                      "text": names[1],
                                                      "x": "49%",
                                                      "y": "24%",
                                                      "size": 15,
                                                      "bold": true,
                                                      "color": "#e67300",
                                                      "align": "right"
                                                      }, {
                                                      "text": names[2],
                                                      "x": "49%",
                                                      "y": "33%",
                                                      "size": 15,
                                                      "bold": true,
                                                      "color": "#994d00",
                                                      "align": "right"
                                                      }],
                                        "export": {
                                        "enabled": false
                                        }
                                        });
}

updateGaugeTotal(){

}
updateGaugeFemale(){

}
updateGaugeMale(){

}
