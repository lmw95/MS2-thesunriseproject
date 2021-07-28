 // Google API key
let APIkey = "AIzaSyAz2AgSP-awt4zaXYsWQWIXLev7StjPLLM";

//Declare global map values
var mapL;
var mapY;
var mapK;
var mapY;

// Initiates the maps for all location pages
function initMap() {

    //LOWESTOFT

        //Declare variables for Lowestoft location markers 
        var locationsL = [
            [ 'Maritime Museum', 52.48786916515505, 1.757501231452841 ],
            [ 'Transport Museum', 52.45279120791381,1.6877369984663078 ],
            [ 'Ness Point', 52.48130428977037, 1.762758745215036 ],
            [ 'Lowestoft Beach', 52.463528942398, 1.7441735460103207 ],
            [ 'Pleasurewood Hills', 52.508024832271055, 1.7441718423062194 ]
        ];

        //Render Lowestoft map and center it
        mapL = new google.maps.Map(document.getElementById("mapLowestoft"), {
            zoom: 12,
            center: new google.maps.LatLng(52.4822390273935, 1.753391400138951)
        });

        //Declare marker and locationsL array index
        var marker, i;

        //Loop through array to get latitude and longitude values and place markers
        for (i = 0; i < locationsL.length; i++) {  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locationsL[i][1], locationsL[i][2]),
                map: mapL
            });
        }

    //GREAT YARMOUTH MAP

        //Declare variables for Great Yarmouth location markers 
        var locationsY = [
            [ 'Pleasure Beach', 52.595472217209974, 1.735949694382154 ],
            [ 'Redwings', 52.554241310046464, 1.6474202363498287 ],
            [ 'Yarmouth Race Course', 52.63021460217459, 1.7318343587904275 ],
            [ 'River Yare Valley', 52.60317161849138, 1.6820370627771835 ],
            [ 'Burgh Castle', 52.583751110675195, 1.6520405685211867 ]
        ];

        //Render Great Yarmouth map and center it
        mapY = new google.maps.Map(document.getElementById("mapYarmouth"), {
            zoom: 11,
            center: new google.maps.LatLng(52.60359934002129, 1.7262308646134656)
        });

        //Loop through array to get latitude and longitude values and place markers
        for (i = 0; i < locationsY.length; i++) {  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locationsY[i][1], locationsY[i][2]),
                map: mapY
            });
        }
    
    //KESSINGLAND

        //Declare variables for Lowestoft location markers 
        var locationsK = [
            [ 'Africa Alive', 52.413885514052815, 1.7015960432214932 ],
            [ 'Kessingland Beach', 52.41312737470827, 1.726270528821981 ],
            [ 'Benacre Nature Reserve', 52.3836188698611, 1.7015254766199701 ],
            [ 'Kessingland Car Boot', 52.41577308083052, 1.703570440794497 ],
            [ 'Suffolk Heath Path', 52.40321427281386, 1.7270214872345362 ]
        ];

        //Render Kessingland map and center it
        mapK = new google.maps.Map(document.getElementById("mapKessingland"), {
            zoom: 12,
            center: new google.maps.LatLng(52.42097755992867, 1.7125956365065302)
        });

        //Loop through array to get latitude and longitude values and place markers
        for (i = 0; i < locationsK.length; i++) {  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locationsK[i][1], locationsK[i][2]),
                map: mapK
            });
        }

    //OULTON BROAD

        //Declare variables for Oulton Broad location markers 
        var locationsOB = [
            [ 'Carlton Marshes', 52.46863102969376, 1.6924630550025137  ],
            [ 'Nicholas Everitt Park', 52.47432810657495, 1.707210704881762 ],
            [ 'Waveney River Tours', 52.47482176398323, 1.7103077905291226 ],
            [ 'Oulton Broad Watersports Center', 52.472291711185704, 1.7067331167685726 ],
            [ 'The Commodore', 52.47621693133902, 1.7109530876879453 ]
        ];

        //Render Oulton Broad map and center it
        mapOB = new google.maps.Map(document.getElementById("mapOultonBroad"), {
            zoom: 15,
            center: new google.maps.LatLng(52.47275017240344, 1.7041162042216889)
        });

        //Loop through array to get latitude and longitude values and place markers
        for (i = 0; i < locationsOB.length; i++) {  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locationsOB[i][1], locationsOB[i][2]),
                map: mapOB
            });
        }


        // Click events for each marker which will change the HTML in the neighbouring div


}


