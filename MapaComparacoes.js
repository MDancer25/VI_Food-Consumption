var count = 3;
var map = AmCharts.makeChart("mapdiv",{
                             type: "map",
                             theme: "dark",
                             projection: "mercator",
                             panEventsEnabled : true,
                             backgroundColor : "#FFFFFF",
                             backgroundAlpha : 1,
                             zoomControl: {
                             zoomControlEnabled : true
                             },
                             dataProvider : {
                             map : "worldHigh",
                             getAreasFromMap : true,
                             },
                             areasSettings : {
                             autoZoom : false,
                             color : "#B4B4B7",
                             colorSolid : "#84ADE9",
                             selectedColor : "#7BDE2A",
                             outlineColor : "#666666",
                             rollOverColor : "#9E9E9E",
                             rollOverOutlineColor : "#000000",
                             "selectable" : true
                             },
                             "listeners": [ {
                                           "event": "clickMapObject",
                                           "method": function( event ) {
                                            var areasSelected = [];
                                           
                                           if(count<=0){
                                           console.log("ENTROU IF1");
                                           // deselect the area by assigning all of the dataProvider as selected object
                                           map.selectedObject = map.dataProvider;
                                           map.returnInitialColor(event.mapObject);
                                           areasSelected.pop();
                                           count ++;
                                           }
                                           console.log("if1" + areasSelected);
                                           
                                           
                                           if (count>0){
                                           console.log("ENTROU IF2");
                                           
                                           event.mapObject.showAsSelected = !event.mapObject.showAsSelected;
                                            for ( var i in map.dataProvider.areas ) {
                                            console.log("ENTROU IF3");
                                            var area = map.dataProvider.areas[ i ];
                                            if (area.showAsSelected){
                                            areasSelected.push( area.title );
                                           }
                                           }

                                           count--;
                                           }
                                           console.log("if2" + areasSelected);

                                           
                                           
                                           
                                           // bring it to an appropriate color
                                           //map.returnInitialColor( event.mapObject );
                                           
                                           // let's build a list of currently selected states
                                          
                                           }
                                           } ],
                             "export": {"enabled": false}
                             } );
