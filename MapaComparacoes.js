var count = 3;
var state = [];
var areas =  [
              { "id": "AR" },
              { "id": "AU" },
              { "id": "AT" },
              { "id": "BD" },
              { "id": "BE" },
              { "id": "BO" },
              { "id": "BA" },
              { "id": "BR" },
              { "id": "BG" },
              { "id": "CA" },
              { "id": "CL" },
              { "id": "CN" },
              { "id": "CO" },
              { "id": "CR" },
              { "id": "CZ" },
              { "id": "DK" },
              { "id": "DO" },
              { "id": "EC" },
              { "id": "EG" },
              { "id": "ET" },
              { "id": "FI" },
              { "id": "FR" },
              { "id": "DE" },
              { "id": "GH" },
              { "id": "GR" },
              { "id": "HT" },
              { "id": "HU" },
              { "id": "IS" },
              { "id": "IN" },
              { "id": "ID" },
              { "id": "IR" },
              { "id": "IL" },
              { "id": "JM" },
              { "id": "JP" },
              { "id": "KE" },
              { "id": "MG" },
              { "id": "MW" },
              { "id": "MX" },
              { "id": "MN" },
              { "id": "NL" },
              { "id": "NZ" },
              { "id": "NG" },
              { "id": "PK" },
              { "id": "PY" },
              { "id": "PE" },
              { "id": "PH" },
              { "id": "PL" },
              { "id": "PT" },
              { "id": "RO" },
              { "id": "RU" },
              { "id": "SA" },
              { "id": "SN" },
              { "id": "SL" },
              { "id": "ZA" },
              { "id": "ES" },
              { "id": "LK" },
              { "id": "SE" },
              { "id": "CH" },
              { "id": "TH" },
              { "id": "TN" },
              { "id": "TR" },
              { "id": "UA" },
              { "id": "AE" },
              { "id": "GB" },
              { "id": "US" }
              ];

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
                             areas : areas,
                             },
                             areasSettings : {
                             autoZoom : false,
                             color : "#B4B4B7",
                             colorSolid : "#84ADE9",
                             selectedColor : "#ff9933",
                             outlineColor : "#FFFFFF",
                             rollOverColor : "#afc7cf",
                             rollOverOutlineColor : "#FFFFFF",
                             unlistedAreasColor: "#262626",
                             unlistedAreasOutlineColor: "#FFFFF",
                             "selectable" : true
                             },
                             "listeners": [ {
                                           "event": "clickMapObject",
                                           "method": function( event ) {
                                           var id;
                                           
                                           
                                           id = event.mapObject.title;
                                           if(event.mapObject.showAsSelected == true){
                                                event.mapObject.showAsSelected = false;
                                                map.selectedObject = map.dataProvider;
                                                count++;
                                                state = [];
                                           gen_stacked(),
                                           gen_gauge();
                                           gen_radar();
                                           }
                                           else{
                                           if (count>0){
                                           event.mapObject.showAsSelected = !event.mapObject.showAsSelected;
                                           count--;}
                                           }
                                           
                                           // bring it to an appropriate color
                                           map.returnInitialColor( event.mapObject );

                                            state = [];
                                            for ( var i in map.dataProvider.areas ) {
                                            var area = map.dataProvider.areas[ i ];
                                            if (area.showAsSelected){
                                            state.push( area.title );
                                           gen_stacked();
                                           gen_gauge();
                                           gen_radar();
                                           }
                                           }
                                           }
                                           } ],
                             "export": {"enabled": false}
                             } );
