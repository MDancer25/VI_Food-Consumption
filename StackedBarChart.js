var capita, new_capita=[];

d3.json("dataset_percapita.json", function (data) {
        capita = data.data;
        gen_stacked();
        })

function gen_stacked(){
    new_capita=[];
    for(i=0; i< capita.length; i++){
        for(j=0; j<3; j++){
            if(capita[i].Country == state[j]){
                new_capita.push(capita[i]);
            }
        }
    }

var chart = AmCharts.makeChart("stackedbar", {
                               "type": "serial",
                               "theme": "dark",
                               "legend": {
                               "autoMargins": false,
                               "borderAlpha": 0.2,
                               "equalWidths": false,
                               "horizontalGap": 10,
                               "markerSize": 10,
                               "useGraphSettings": true,
                               "valueAlign": "left",
                               "valueWidth": 0,
                               "color":"#000000"
                               },
                               "dataProvider": new_capita,
                               "valueAxes": [{
                                             "stackType": "100%",
                                             "axisAlpha": 0,
                                             "gridAlpha": 0,
                                             "labelsEnabled": false,
                                             "position": "left"
                                             }],
                               "graphs": [{
                                          "balloonText": "[[title]], [[category]]<br><span style='font-size:14px;'><b>[[value]]</b> ([[percents]]%)</span>",
                                          "fillAlphas": 1.9,
                                          "fontSize": 11,
                                          "labelText": "[[percents]]%",
                                          "lineAlpha": 0.5,
                                          "title": "Beer",
                                          "type": "column",
                                          "valueField": "Beer"
                                          }, {
                                          "balloonText": "[[title]], [[category]]<br><span style='font-size:14px;'><b>[[value]]</b> ([[percents]]%)</span>",
                                          "fillAlphas": 1.9,
                                          "fontSize": 11,
                                          "labelText": "[[percents]]%",
                                          "lineAlpha": 0.5,
                                          "title": "Wine",
                                          "type": "column",
                                          "valueField": "Wine"
                                          }, {
                                          "balloonText": "[[title]], [[category]]<br><span style='font-size:14px;'><b>[[value]]</b> ([[percents]]%)</span>",
                                          "fillAlphas": 1.9,
                                          "fontSize": 11,
                                          "labelText": "[[percents]]%",
                                          "lineAlpha": 0.5,
                                          "title": "Spirits",
                                          "type": "column",
                                          "valueField": "Spirits"
                                          }, {
                                          "balloonText": "[[title]], [[category]]<br><span style='font-size:14px;'><b>[[value]]</b> ([[percents]]%)</span>",
                                          "fillAlphas": 1.0,
                                          "fontSize": 11,
                                          "labelText": "[[percents]]%",
                                          "lineAlpha": 0.5,
                                          "title": "Other",
                                          "type": "column",
                                          "valueField": "Other"
                                          }],
                               "marginTop": 30,
                               "marginRight": 0,
                               "marginLeft": 0,
                               "marginBottom": 40,
                               "autoMargins": false,
                               "categoryField": "Country",
                               "color":"#000000",
                               "categoryAxis": {
                               "gridPosition": "start",
                               "axisAlpha": 0,
                               "gridAlpha": 0
                               },
                               "export": {
                               "enabled": false
                               }
                               
                               });
}
