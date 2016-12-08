var map = AmCharts.makeChart("mapdiv",{
                             type: "map",
                             theme: "dark",
                             projection: "mercator",
                             panEventsEnabled : true,
                             backgroundColor : "#B8D7E0",
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
                                           // deselect the area by assigning all of the dataProvider as selected object
                                           map.selectedObject = map.dataProvider;
                                           
                                           // toggle showAsSelected
                                           event.mapObject.showAsSelected = !event.mapObject.showAsSelected;
                                           
                                           
                                           // bring it to an appropriate color
                                           map.returnInitialColor( event.mapObject );
                                           
                                           
                                           // let's build a list of currently selected states
                                           var states = [];
                                           for ( var i in map.dataProvider.areas ) {
                                           var area = map.dataProvider.areas[ i ];
                                           if ( area.showAsSelected ) {
                                           states.push( area.title );
                                           }
                                           
                                           
                                           }
                                           }
                                           } ],
                             "export": {"enabled": false}
                             } );
