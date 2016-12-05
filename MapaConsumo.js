/*
 Although amMap has methods like getAreaCenterLatitude and getAreaCenterLongitude,
 they are not suitable in quite a lot of cases as the center of some countries
 is even outside the country itself (like US, because of Alaska and Hawaii)
 That's why wehave the coordinates stored here
 */

var drink_capita;

d3.json("drink-percapita.json", function (data) {
        drink_capita = data.data;
        gen_vis()
        })


var latlong = {};
var mapData = [];
latlong["AD"] = {"latitude":42.5, "longitude":1.5};
latlong["AE"] = {"latitude":24, "longitude":54};
latlong["AG"] = {"latitude":17.05, "longitude":-61.8};
latlong["AI"] = {"latitude":18.25, "longitude":-63.1667};
latlong["AL"] = {"latitude":41, "longitude":20};
latlong["AM"] = {"latitude":40, "longitude":45};
latlong["AN"] = {"latitude":12.25, "longitude":-68.75};
latlong["AO"] = {"latitude":-12.5, "longitude":18.5};
latlong["AP"] = {"latitude":35, "longitude":105};
latlong["AQ"] = {"latitude":-90, "longitude":0};
latlong["AR"] = {"latitude":-34, "longitude":-64};
latlong["AS"] = {"latitude":-14.3333, "longitude":-170};
latlong["AT"] = {"latitude":47.3333, "longitude":13.3333};
latlong["AU"] = {"latitude":-27, "longitude":133};
latlong["AW"] = {"latitude":12.5, "longitude":-69.9667};
latlong["AZ"] = {"latitude":40.5, "longitude":47.5};
latlong["BA"] = {"latitude":44, "longitude":18};
latlong["BB"] = {"latitude":13.1667, "longitude":-59.5333};
latlong["BD"] = {"latitude":24, "longitude":90};
latlong["BE"] = {"latitude":50.8333, "longitude":4};
latlong["BF"] = {"latitude":13, "longitude":-2};
latlong["BG"] = {"latitude":43, "longitude":25};
latlong["BH"] = {"latitude":26, "longitude":50.55};
latlong["BI"] = {"latitude":-3.5, "longitude":30};
latlong["BJ"] = {"latitude":9.5, "longitude":2.25};
latlong["BM"] = {"latitude":32.3333, "longitude":-64.75};
latlong["BN"] = {"latitude":4.5, "longitude":114.6667};
latlong["BO"] = {"latitude":-17, "longitude":-65};
latlong["BR"] = {"latitude":-10, "longitude":-55};
latlong["BS"] = {"latitude":24.25, "longitude":-76};
latlong["BT"] = {"latitude":27.5, "longitude":90.5};
latlong["BV"] = {"latitude":-54.4333, "longitude":3.4};
latlong["BW"] = {"latitude":-22, "longitude":24};
latlong["BY"] = {"latitude":53, "longitude":28};
latlong["BZ"] = {"latitude":17.25, "longitude":-88.75};
latlong["CA"] = {"latitude":54, "longitude":-100};
latlong["CC"] = {"latitude":-12.5, "longitude":96.8333};
latlong["CD"] = {"latitude":0, "longitude":25};
latlong["CF"] = {"latitude":7, "longitude":21};
latlong["CG"] = {"latitude":-1, "longitude":15};
latlong["CH"] = {"latitude":47, "longitude":8};
latlong["CI"] = {"latitude":8, "longitude":-5};
latlong["CK"] = {"latitude":-21.2333, "longitude":-159.7667};
latlong["CL"] = {"latitude":-30, "longitude":-71};
latlong["CM"] = {"latitude":6, "longitude":12};
latlong["CN"] = {"latitude":35, "longitude":105};
latlong["CO"] = {"latitude":4, "longitude":-72};
latlong["CR"] = {"latitude":10, "longitude":-84};
latlong["CU"] = {"latitude":21.5, "longitude":-80};
latlong["CV"] = {"latitude":16, "longitude":-24};
latlong["CX"] = {"latitude":-10.5, "longitude":105.6667};
latlong["CY"] = {"latitude":35, "longitude":33};
latlong["CZ"] = {"latitude":49.75, "longitude":15.5};
latlong["DE"] = {"latitude":51, "longitude":9};
latlong["DJ"] = {"latitude":11.5, "longitude":43};
latlong["DK"] = {"latitude":56, "longitude":10};
latlong["DM"] = {"latitude":15.4167, "longitude":-61.3333};
latlong["DO"] = {"latitude":19, "longitude":-70.6667};
latlong["DZ"] = {"latitude":28, "longitude":3};
latlong["EC"] = {"latitude":-2, "longitude":-77.5};
latlong["EE"] = {"latitude":59, "longitude":26};
latlong["EG"] = {"latitude":27, "longitude":30};
latlong["EH"] = {"latitude":24.5, "longitude":-13};
latlong["ER"] = {"latitude":15, "longitude":39};
latlong["ES"] = {"latitude":40, "longitude":-4};
latlong["ET"] = {"latitude":8, "longitude":38};
latlong["EU"] = {"latitude":47, "longitude":8};
latlong["FI"] = {"latitude":62, "longitude":26};
latlong["FJ"] = {"latitude":-18, "longitude":175};
latlong["FK"] = {"latitude":-51.75, "longitude":-59};
latlong["FM"] = {"latitude":6.9167, "longitude":158.25};
latlong["FO"] = {"latitude":62, "longitude":-7};
latlong["FR"] = {"latitude":46, "longitude":2};
latlong["GA"] = {"latitude":-1, "longitude":11.75};
latlong["GB"] = {"latitude":54, "longitude":-2};
latlong["GD"] = {"latitude":12.1167, "longitude":-61.6667};
latlong["GE"] = {"latitude":42, "longitude":43.5};
latlong["GF"] = {"latitude":4, "longitude":-53};
latlong["GH"] = {"latitude":8, "longitude":-2};
latlong["GI"] = {"latitude":36.1833, "longitude":-5.3667};
latlong["GL"] = {"latitude":72, "longitude":-40};
latlong["GM"] = {"latitude":13.4667, "longitude":-16.5667};
latlong["GN"] = {"latitude":11, "longitude":-10};
latlong["GP"] = {"latitude":16.25, "longitude":-61.5833};
latlong["GQ"] = {"latitude":2, "longitude":10};
latlong["GR"] = {"latitude":39, "longitude":22};
latlong["GS"] = {"latitude":-54.5, "longitude":-37};
latlong["GT"] = {"latitude":15.5, "longitude":-90.25};
latlong["GU"] = {"latitude":13.4667, "longitude":144.7833};
latlong["GW"] = {"latitude":12, "longitude":-15};
latlong["GY"] = {"latitude":5, "longitude":-59};
latlong["HK"] = {"latitude":22.25, "longitude":114.1667};
latlong["HM"] = {"latitude":-53.1, "longitude":72.5167};
latlong["HN"] = {"latitude":15, "longitude":-86.5};
latlong["HR"] = {"latitude":45.1667, "longitude":15.5};
latlong["HT"] = {"latitude":19, "longitude":-72.4167};
latlong["HU"] = {"latitude":47, "longitude":20};
latlong["ID"] = {"latitude":-5, "longitude":120};
latlong["IE"] = {"latitude":53, "longitude":-8};
latlong["IL"] = {"latitude":31.5, "longitude":34.75};
latlong["IN"] = {"latitude":20, "longitude":77};
latlong["IO"] = {"latitude":-6, "longitude":71.5};
latlong["IQ"] = {"latitude":33, "longitude":44};
latlong["IR"] = {"latitude":32, "longitude":53};
latlong["IS"] = {"latitude":65, "longitude":-18};
latlong["IT"] = {"latitude":42.8333, "longitude":12.8333};
latlong["JM"] = {"latitude":18.25, "longitude":-77.5};
latlong["JO"] = {"latitude":31, "longitude":36};
latlong["JP"] = {"latitude":36, "longitude":138};
latlong["KE"] = {"latitude":1, "longitude":38};
latlong["KG"] = {"latitude":41, "longitude":75};
latlong["KH"] = {"latitude":13, "longitude":105};
latlong["KI"] = {"latitude":1.4167, "longitude":173};
latlong["KM"] = {"latitude":-12.1667, "longitude":44.25};
latlong["KN"] = {"latitude":17.3333, "longitude":-62.75};
latlong["KP"] = {"latitude":40, "longitude":127};
latlong["KR"] = {"latitude":37, "longitude":127.5};
latlong["KW"] = {"latitude":29.3375, "longitude":47.6581};
latlong["KY"] = {"latitude":19.5, "longitude":-80.5};
latlong["KZ"] = {"latitude":48, "longitude":68};
latlong["LA"] = {"latitude":18, "longitude":105};
latlong["LB"] = {"latitude":33.8333, "longitude":35.8333};
latlong["LC"] = {"latitude":13.8833, "longitude":-61.1333};
latlong["LI"] = {"latitude":47.1667, "longitude":9.5333};
latlong["LK"] = {"latitude":7, "longitude":81};
latlong["LR"] = {"latitude":6.5, "longitude":-9.5};
latlong["LS"] = {"latitude":-29.5, "longitude":28.5};
latlong["LT"] = {"latitude":55, "longitude":24};
latlong["LU"] = {"latitude":49.75, "longitude":6};
latlong["LV"] = {"latitude":57, "longitude":25};
latlong["LY"] = {"latitude":25, "longitude":17};
latlong["MA"] = {"latitude":32, "longitude":-5};
latlong["MC"] = {"latitude":43.7333, "longitude":7.4};
latlong["MD"] = {"latitude":47, "longitude":29};
latlong["ME"] = {"latitude":42.5, "longitude":19.4};
latlong["MG"] = {"latitude":-20, "longitude":47};
latlong["MH"] = {"latitude":9, "longitude":168};
latlong["MK"] = {"latitude":41.8333, "longitude":22};
latlong["ML"] = {"latitude":17, "longitude":-4};
latlong["MM"] = {"latitude":22, "longitude":98};
latlong["MN"] = {"latitude":46, "longitude":105};
latlong["MO"] = {"latitude":22.1667, "longitude":113.55};
latlong["MP"] = {"latitude":15.2, "longitude":145.75};
latlong["MQ"] = {"latitude":14.6667, "longitude":-61};
latlong["MR"] = {"latitude":20, "longitude":-12};
latlong["MS"] = {"latitude":16.75, "longitude":-62.2};
latlong["MT"] = {"latitude":35.8333, "longitude":14.5833};
latlong["MU"] = {"latitude":-20.2833, "longitude":57.55};
latlong["MV"] = {"latitude":3.25, "longitude":73};
latlong["MW"] = {"latitude":-13.5, "longitude":34};
latlong["MX"] = {"latitude":23, "longitude":-102};
latlong["MY"] = {"latitude":2.5, "longitude":112.5};
latlong["MZ"] = {"latitude":-18.25, "longitude":35};
latlong["NA"] = {"latitude":-22, "longitude":17};
latlong["NC"] = {"latitude":-21.5, "longitude":165.5};
latlong["NE"] = {"latitude":16, "longitude":8};
latlong["NF"] = {"latitude":-29.0333, "longitude":167.95};
latlong["NG"] = {"latitude":10, "longitude":8};
latlong["NI"] = {"latitude":13, "longitude":-85};
latlong["NL"] = {"latitude":52.5, "longitude":5.75};
latlong["NO"] = {"latitude":62, "longitude":10};
latlong["NP"] = {"latitude":28, "longitude":84};
latlong["NR"] = {"latitude":-0.5333, "longitude":166.9167};
latlong["NU"] = {"latitude":-19.0333, "longitude":-169.8667};
latlong["NZ"] = {"latitude":-41, "longitude":174};
latlong["OM"] = {"latitude":21, "longitude":57};
latlong["PA"] = {"latitude":9, "longitude":-80};
latlong["PE"] = {"latitude":-10, "longitude":-76};
latlong["PF"] = {"latitude":-15, "longitude":-140};
latlong["PG"] = {"latitude":-6, "longitude":147};
latlong["PH"] = {"latitude":13, "longitude":122};
latlong["PK"] = {"latitude":30, "longitude":70};
latlong["PL"] = {"latitude":52, "longitude":20};
latlong["PM"] = {"latitude":46.8333, "longitude":-56.3333};
latlong["PR"] = {"latitude":18.25, "longitude":-66.5};
latlong["PS"] = {"latitude":32, "longitude":35.25};
latlong["PT"] = {"latitude":39.5, "longitude":-8};
latlong["PW"] = {"latitude":7.5, "longitude":134.5};
latlong["PY"] = {"latitude":-23, "longitude":-58};
latlong["QA"] = {"latitude":25.5, "longitude":51.25};
latlong["RE"] = {"latitude":-21.1, "longitude":55.6};
latlong["RO"] = {"latitude":46, "longitude":25};
latlong["RS"] = {"latitude":44, "longitude":21};
latlong["RU"] = {"latitude":60, "longitude":100};
latlong["RW"] = {"latitude":-2, "longitude":30};
latlong["SA"] = {"latitude":25, "longitude":45};
latlong["SB"] = {"latitude":-8, "longitude":159};
latlong["SC"] = {"latitude":-4.5833, "longitude":55.6667};
latlong["SD"] = {"latitude":15, "longitude":30};
latlong["SE"] = {"latitude":62, "longitude":15};
latlong["SG"] = {"latitude":1.3667, "longitude":103.8};
latlong["SH"] = {"latitude":-15.9333, "longitude":-5.7};
latlong["SI"] = {"latitude":46, "longitude":15};
latlong["SJ"] = {"latitude":78, "longitude":20};
latlong["SK"] = {"latitude":48.6667, "longitude":19.5};
latlong["SL"] = {"latitude":8.5, "longitude":-11.5};
latlong["SM"] = {"latitude":43.7667, "longitude":12.4167};
latlong["SN"] = {"latitude":14, "longitude":-14};
latlong["SO"] = {"latitude":10, "longitude":49};
latlong["SR"] = {"latitude":4, "longitude":-56};
latlong["ST"] = {"latitude":1, "longitude":7};
latlong["SV"] = {"latitude":13.8333, "longitude":-88.9167};
latlong["SY"] = {"latitude":35, "longitude":38};
latlong["SZ"] = {"latitude":-26.5, "longitude":31.5};
latlong["TC"] = {"latitude":21.75, "longitude":-71.5833};
latlong["TD"] = {"latitude":15, "longitude":19};
latlong["TF"] = {"latitude":-43, "longitude":67};
latlong["TG"] = {"latitude":8, "longitude":1.1667};
latlong["TH"] = {"latitude":15, "longitude":100};
latlong["TJ"] = {"latitude":39, "longitude":71};
latlong["TK"] = {"latitude":-9, "longitude":-172};
latlong["TM"] = {"latitude":40, "longitude":60};
latlong["TN"] = {"latitude":34, "longitude":9};
latlong["TO"] = {"latitude":-20, "longitude":-175};
latlong["TR"] = {"latitude":39, "longitude":35};
latlong["TT"] = {"latitude":11, "longitude":-61};
latlong["TV"] = {"latitude":-8, "longitude":178};
latlong["TW"] = {"latitude":23.5, "longitude":121};
latlong["TZ"] = {"latitude":-6, "longitude":35};
latlong["UA"] = {"latitude":49, "longitude":32};
latlong["UG"] = {"latitude":1, "longitude":32};
latlong["UM"] = {"latitude":19.2833, "longitude":166.6};
latlong["US"] = {"latitude":38, "longitude":-97};
latlong["UY"] = {"latitude":-33, "longitude":-56};
latlong["UZ"] = {"latitude":41, "longitude":64};
latlong["VA"] = {"latitude":41.9, "longitude":12.45};
latlong["VC"] = {"latitude":13.25, "longitude":-61.2};
latlong["VE"] = {"latitude":8, "longitude":-66};
latlong["VG"] = {"latitude":18.5, "longitude":-64.5};
latlong["VI"] = {"latitude":18.3333, "longitude":-64.8333};
latlong["VN"] = {"latitude":16, "longitude":106};
latlong["VU"] = {"latitude":-16, "longitude":167};
latlong["WF"] = {"latitude":-13.3, "longitude":-176.2};
latlong["WS"] = {"latitude":-13.5833, "longitude":-172.3333};
latlong["YE"] = {"latitude":15, "longitude":48};
latlong["YT"] = {"latitude":-12.8333, "longitude":45.1667};
latlong["ZA"] = {"latitude":-29, "longitude":24};
latlong["ZM"] = {"latitude":-15, "longitude":30};
latlong["ZW"] = {"latitude":-20, "longitude":30};

function gen_vis(){
    mapData = [
               {"code":"AR" , "name":"Argentina", "value":drink_capita[0].All, "color":"#86a965"},
               {"code":"AU" , "name":"Australia", "value":drink_capita[1].All, "color":"#8aabb0"},
               {"code":"AT" , "name":"Austria", "value":drink_capita[2].All, "color":"#d8854f"},
               {"code":"BD" , "name":"Bangladesh", "value":drink_capita[3].All, "color":"#eea638"},
               {"code":"BE" , "name":"Belgium", "value":drink_capita[4].All, "color":"#d8854f"},
               {"code":"BO" , "name":"Bolivia", "value":drink_capita[5].All, "color":"#86a965"},
               {"code":"BA" , "name":"Bosnia and Herzegovina", "value":drink_capita[6].All, "color":"#d8854f"},
               {"code":"BR" , "name":"Brazil", "value":drink_capita[7].All, "color":"#86a965"},
               {"code":"BG" , "name":"Bulgaria", "value":drink_capita[8].All, "color":"#d8854f"},
               {"code":"CA" , "name":"Canada", "value":drink_capita[9].All, "color":"#a7a737"},
               {"code":"CL" , "name":"Chile", "value":drink_capita[10].All, "color":"#86a965"},
               {"code":"CN" , "name":"China", "value":drink_capita[11].All, "color":"#eea638"},
               {"code":"CO" , "name":"Colombia", "value":drink_capita[12].All, "color":"#86a965"},
               {"code":"CR" , "name":"Costa Rica", "value":drink_capita[13].All, "color":"#a7a737"},
               {"code":"CZ" , "name":"Czech Rep.", "value":drink_capita[14].All, "color":"#d8854f"},
               {"code":"DK" , "name":"Denmark", "value":drink_capita[15].All, "color":"#d8854f"},
               {"code":"DO" , "name":"Dominican Rep.", "value":drink_capita[16].All, "color":"#a7a737"},
               {"code":"EC" , "name":"Ecuador", "value":drink_capita[17].All, "color":"#86a965"},
               {"code":"EG" , "name":"Egypt", "value":drink_capita[18].All, "color":"#de4c4f"},
               {"code":"ET" , "name":"Ethiopia", "value":drink_capita[19].All, "color":"#de4c4f"},
               {"code":"FI" , "name":"Finland", "value":drink_capita[20].All, "color":"#d8854f"},
               {"code":"FR" , "name":"France", "value":drink_capita[21].All, "color":"#d8854f"},
               {"code":"DE" , "name":"Germany", "value":drink_capita[22].All, "color":"#d8854f"},
               {"code":"GH" , "name":"Ghana", "value":drink_capita[23].All, "color":"#de4c4f"},
               {"code":"GR" , "name":"Greece", "value":drink_capita[24].All, "color":"#d8854f"},
               {"code":"HT" , "name":"Haiti", "value":drink_capita[25].All, "color":"#a7a737"},
               {"code":"HU" , "name":"Hungary", "value":drink_capita[26].All, "color":"#d8854f"},
               {"code":"IS" , "name":"Iceland", "value":drink_capita[27].All, "color":"#d8854f"},
               {"code":"IN" , "name":"India", "value":drink_capita[28].All, "color":"#eea638"},
               {"code":"ID" , "name":"Indonesia", "value":drink_capita[29].All, "color":"#eea638"},
               {"code":"IR" , "name":"Iran", "value":drink_capita[30].All, "color":"#eea638"},
               {"code":"IL" , "name":"Israel", "value":drink_capita[31].All, "color":"#eea638"},
               {"code":"IT" , "name":"Italy", "value":drink_capita[32].All4, "color":"#d8854f"},
               {"code":"JM" , "name":"Jamaica", "value":drink_capita[33].All, "color":"#a7a737"},
               {"code":"JP" , "name":"Japan", "value":drink_capita[34].All, "color":"#eea638"},
               {"code":"KE" , "name":"Kenya", "value":drink_capita[35].All, "color":"#de4c4f"},
               {"code":"MG" , "name":"Madagascar", "value":drink_capita[36].All, "color":"#de4c4f"},
               {"code":"MW" , "name":"Malawi", "value":drink_capita[37].All, "color":"#de4c4f"},
               {"code":"MX" , "name":"Mexico", "value":drink_capita[38].All, "color":"#a7a737"},
               {"code":"MN" , "name":"Mongolia", "value":drink_capita[39].All, "color":"#eea638"},
               {"code":"MA" , "name":"Morocco", "value":drink_capita[40].All, "color":"#de4c4f"},
               {"code":"NL" , "name":"Netherlands", "value":drink_capita[41].All, "color":"#d8854f"},
               {"code":"NZ" , "name":"New Zealand", "value":drink_capita[42].All, "color":"#8aabb0"},
               {"code":"NG" , "name":"Nigeria", "value":drink_capita[43].All, "color":"#de4c4f"},
               {"code":"PK" , "name":"Pakistan", "value":drink_capita[44].All, "color":"#eea638"},
               {"code":"PY" , "name":"Paraguay", "value":drink_capita[45].All, "color":"#86a965"},
               {"code":"PE" , "name":"Peru", "value":drink_capita[46].All, "color":"#86a965"},
               {"code":"PH" , "name":"Philippines", "value":drink_capita[47].All, "color":"#eea638"},
               {"code":"PL" , "name":"Poland", "value":drink_capita[48].All, "color":"#d8854f"},
               {"code":"PT" , "name":"Portugal", "value":drink_capita[49].All, "color":"#d8854f"},
               {"code":"RO" , "name":"Romania", "value":drink_capita[50].All, "color":"#d8854f"},
               {"code":"RU" , "name":"Russia", "value":drink_capita[52].All, "color":"#d8854f"},
               {"code":"SA" , "name":"Saudi Arabia", "value":drink_capita[53].All, "color":"#eea638"},
               {"code":"SN" , "name":"Senegal", "value":drink_capita[54].All, "color":"#de4c4f"},
               {"code":"SL" , "name":"Sierra Leone", "value":drink_capita[55].All, "color":"#de4c4f"},
               {"code":"ZA" , "name":"South Africa", "value":drink_capita[56].All, "color":"#de4c4f"},
               {"code":"ES" , "name":"Spain", "value":drink_capita[57].All, "color":"#d8854f"},
               {"code":"LK" , "name":"Sri Lanka", "value":drink_capita[58].All, "color":"#eea638"},
               {"code":"SE" , "name":"Sweden", "value":drink_capita[59].All, "color":"#d8854f"},
               {"code":"CH" , "name":"Switzerland", "value":drink_capita[60].All, "color":"#d8854f"},
               {"code":"TH" , "name":"Thailand", "value":drink_capita[61].All, "color":"#eea638"},
               {"code":"TN" , "name":"Tunisia", "value":drink_capita[62].All, "color":"#de4c4f"},
               {"code":"TR" , "name":"Turkey", "value":drink_capita[63].All, "color":"#d8854f"},
               {"code":"UA" , "name":"Ukraine", "value":drink_capita[64].All, "color":"#d8854f"},
               {"code":"AE" , "name":"United Arab Emirates", "value":drink_capita[65].All, "color":"#eea638"},
               {"code":"GB" , "name":"United Kingdom", "value":drink_capita[66].All, "color":"#d8854f"},
               {"code":"US" , "name":"United States", "value":drink_capita[67].All, "color":"#a7a737"}]



// get min and max values
var minBulletSize = 0.1;
var maxBulletSize = 30;
var min = Infinity;
var max = -Infinity;
for ( var i = 0; i < mapData.length; i++ ) {
    var value = mapData[ i ].value;
    if ( value < min ) {
        min = value;
    }
    if ( value > max ) {
        max = value;
    }
}

// it's better to use circle square to show difference between values, not a radius
var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

// create circle for each country
var images = [];
for ( var i = 0; i < mapData.length; i++ ) {
    var dataItem = mapData[ i ];
    var value = dataItem.value;
    // calculate size of a bubble
    var square = ( value - min ) / ( max - min ) * ( maxSquare - minSquare ) + minSquare;
    if ( square < minSquare ) {
        square = minSquare;
    }
    var size = Math.sqrt( square / ( Math.PI * 2 ) );
    var id = dataItem.code;
    
    images.push( {
                "type": "circle",
                "theme": "light",
                
                "width": size,
                "height": size,
                "color": dataItem.color,
                "alpha":0.7,
                "longitude": latlong[ id ].longitude,
                "latitude": latlong[ id ].latitude,
                "title": dataItem.name + ":" + value ,
                "value": value
                } );
}

// build map
var map = AmCharts.makeChart( "chartdiv", {
                             type: "map",
                             projection: "mercator",
                             "panEventsEnabled" : true,
                             backgroundColor : "#B8D7E0",
                             areasSettings: {
                             //"unlistedAreasColor": "#000000",
                             //"unlistedAreasAlpha": 0.1
                             },
                             dataProvider: {
                             map: "worldLow",
                             images: images
                             },
                             export: {
                             enabled: false
                             }
                             } );
}

