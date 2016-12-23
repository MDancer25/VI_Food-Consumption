var capita, names=[], new_info=[], colors2=[], func_to_exec;

d3.json("dataset_percapita.json", function (data) {
        capita = data.data;
        colors2=["#9f9fdf","#5353c6","#262673"];
        func_to_exec="Total";
        updateGaugeTotal();
        })

function gen_gauge(){
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
                                                           "color": colors2[0],
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
                                                           "color": colors2[1],
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
                                                           "color": colors2[2],
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
                                                      "color": colors2[0],
                                                      "align": "right"
                                                      }, {
                                                      "text": names[1],
                                                      "x": "49%",
                                                      "y": "24%",
                                                      "size": 15,
                                                      "bold": true,
                                                      "color": colors2[1],
                                                      "align": "right"
                                                      }, {
                                                      "text": names[2],
                                                      "x": "49%",
                                                      "y": "33%",
                                                      "size": 15,
                                                      "bold": true,
                                                      "color": colors2[2],
                                                      "align": "right"
                                                      }],
                                        "export": {
                                        "enabled": false
                                        }
                                        });
}

function updateGaugeTotal(){
    colors2=["#9f9fdf","#5353c6","#262673"];
    func_to_exec="Total";
    new_info=[];
    names=[];
    for(i=0; i< capita.length; i++){
        for(j=0; j<3; j++){
            if(capita[i].Country == state[j]){
                new_info.push(capita[i].ObesityTotal);
                names.push(capita[i].Country);
            }
        }
    }
    for(k=0; k<(4- (names.length-1)); k++){
        names.push("Country");
        new_info.push(0);
    }
    gen_radar();
    gen_gauge();
}
function updateGaugeFemale(){
    func_to_exec="Female";
    new_info=[];
    names=[];
    colors2=["#ffccdd","#ff6699","#e6004c"];
    for(i=0; i< capita.length; i++){
        for(j=0; j<3; j++){
            if(capita[i].Country == state[j]){
                new_info.push(capita[i].ObesityFemale);
                names.push(capita[i].Country);
            }
        }
    }
    for(k=0; k<(4- (names.length-1)); k++){
        names.push("Country");
        new_info.push(0);
    }
    console.log("Female: " +  new_info);
    gen_radar();
    gen_gauge();
    
}
function updateGaugeMale(){
    func_to_exec="Male";
    new_info=[];
    names=[];
    colors2=["#80bfff","#0066cc","#004080"];
    for(i=0; i< capita.length; i++){
        for(j=0; j<3; j++){
            if(capita[i].Country == state[j]){
                new_info.push(capita[i].ObesityMale);
                names.push(capita[i].Country);
            }
        }
    }
    for(k=0; k<(4- (names.length-1)); k++){
        names.push("Country");
        new_info.push(0);
    }
    console.log("Male: " +  new_info);
    gen_radar();
    gen_gauge();
    
}
