 //Google API key
 let apiKey = "AIzaSyAz2AgSP-awt4zaXYsWQWIXLev7StjPLLM";
 
//Declare global variables
let map;
let markers = [];
let labels = ['A', 'B', 'C', 'D', 'E'];

//Initiates the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: new google.maps.LatLng(52.4822390273935, 1.753391400138951)
    });

    // Function that places markers for walks when walk activity button is clicked
    let activityWalks = document.getElementById("activityWalks");
    let locationsWalks = [
        [ 'Yare Valley', 52.570964914134606, 1.6164365115490809 ],
        [ 'Suffolk Coast Path', 52.41244492746119, 1.727733211662086 ],
        [ 'Carlton Marshes', 52.46844639791714, 1.6924854514230112 ],
        [ 'Blunderston to Flixton', 52.504425395383315, 1.6946567319033825 ],
        [ 'Benacre Nature Reserve', 52.38465376750189, 1.7007969578473394 ]
    ]
    activityWalks.addEventListener("click", function() {
        for (i = 0; i < locationsWalks.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsWalks[i][1], locationsWalks[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    // Function that places markers for nature
    let activityNature = document.getElementById("activityNature");
    let locationsNature = [
        [ 'The Norfolk Broads', 52.60455007585693, 1.606962272050122 ],
        [ 'Carlton Marshes', 52.46844639791714, 1.6924854514230112 ],
        [ 'North Cove Nature Reserve', 52.45829960600791, 1.6358439674500105 ],
        [ 'Benacre Nature Reserve', 52.3836188698611, 1.701525476619970 ],
        [ 'Berney Marshes', 52.58713398373798, 1.6365220566284384 ]
    ]
    activityNature.addEventListener("click", function() {
        for (i = 0; i < locationsNature.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsNature[i][1], locationsNature[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityConservation = document.getElementById("activityConservation");
    let locationsConservation = [
        [ 'Africa Alive', 52.413885514052815, 1.7015960432214932 ],
        [ 'Redwings', 52.554241310046464, 1.6474202363498287 ],
        [ 'Carlton Marshes', 52.46844639791714, 1.6924854514230112 ],
        [ 'Pettits Animal Adventure Park', 52.56991832767232, 1.5780622191626201 ],
        [ 'SeaLife', 52.601002375867395, 1.7364748490458481 ]
    ]
    activityConservation.addEventListener("click", function() {
        for (i = 0; i < locationsConservation.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsConservation[i][1], locationsConservation[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityFamily = document.getElementById("activityFamily");
    let locationsFamily = [
        [ 'Pleasurewood Hills', 52.508024832271055, 1.7441718423062194 ],
        [ 'Pleasure Beach', 52.595472217209974, 1.735949694382154 ],
        [ 'Pettits Animal Adventure Park', 52.56991832767232, 1.5780622191626201 ],
        [ 'Africa Alive', 52.413885514052815, 1.7015960432214932 ],
        [ 'Joyland Childrens Fun Park', 52.609054772153904, 1.7376054518090684 ]
    ]
    activityFamily.addEventListener("click", function() {
        for (i = 0; i < locationsFamily.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsFamily[i][1], locationsFamily[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityThrills = document.getElementById("activityThrills");
    let locationsThrills = [
        [ 'Pleasurewood Hills', 52.508024832271055, 1.7441718423062194 ],
        [ 'Pleasure Beach', 52.595472217209974, 1.735949694382154 ],
        [ 'Quasar Great Yarmouth', 52.60487794938296, 1.7363555728396223 ],
        [ 'Prestige Escape Rooms', 52.48506018063326, 1.7564538121270539 ],
        [ 'Ellough Go Karting', 52.44184134766564, 1.6028291447370862 ]
    ]
    activityThrills.addEventListener("click", function() {
        for (i = 0; i < locationsThrills.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsThrills[i][1], locationsThrills[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityHistory = document.getElementById("activityHistory");
    let locationsHistory = [
        [ 'Burgh Castle', 52.583751110675195, 1.6520405685211867 ],
        [ 'Maritime Museum', 52.48786916515505, 1.757501231452841 ],
        [ 'Time and Tide Museum', 52.603253824438475, 1.7310108009596652 ],
        [ 'National Trust Elizabethan House', 52.60944715108201, 1.7258494494042143 ],
        [ 'Lowestoft Museum', 52.47616014344233, 1.7064895970139302 ]
    ]
    activityHistory.addEventListener("click", function() {
        for (i = 0; i < locationsHistory.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsHistory[i][1], locationsHistory[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityBroads = document.getElementById("activityBroads");
    let locationsBroads = [
        [ 'The Norfolk Broads', 52.60455007585693, 1.606962272050122 ],
        [ 'Waveney River Center', 52.48436404767674, 1.669898801169207 ],
        [ 'Nicholas Everitt Park', 52.47459243329394, 1.7072134383271722],
        [ 'Oulton Broad Watersports Center', 52.47217387174025, 1.70679854630566 ],
        [ 'Breydon Water', 52.60261231260812, 1.6818637854118503 ]
    ]
    activityBroads.addEventListener("click", function() {
        for (i = 0; i < locationsBroads.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsBroads[i][1], locationsBroads[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityMusic = document.getElementById("activityMusic");
    let locationsMusic = [
        [ 'Latitude Festival', 52.33835187750651, 1.6000265707292998 ],
        [ 'Marina Theatre', 52.476160107028896, 1.7534854694519173  ],
        [ 'First Lights Festival', 52.46364777632944, 1.7442255790112735 ],
        [ 'Lowestoft Players', 52.475500658720186, 1.7536388108125185 ],
        [ 'Hippodrome Circus', 52.60492435352424, 1.7359257171956493 ]
    ]
    activityMusic.addEventListener("click", function() {
        for (i = 0; i < locationsMusic.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsMusic[i][1], locationsMusic[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityNightlife = document.getElementById("activityNightlife");
    let locationsNightlife = [
        [ 'Ocean Rooms', 52.57100281960958, 1.7330287761391332 ],
        [ 'The Commodore', 52.47657739053018, 1.7109636377713318 ],
        [ 'Iconic Bar', 52.4730167674014, 1.749305229887624 ],
        [ 'Broadview Wine Bar', 52.475119348264386, 1.7100462277306123],
        [ 'The Hotel Hatfield', 52.46846444363252, 1.7468426271224402 ]
    ]
    activityNightlife.addEventListener("click", function() {
        for (i = 0; i < locationsNightlife.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsNightlife[i][1], locationsNightlife[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityLocal = document.getElementById("activityLocal");
    let locationsLocal = [
        [ 'Kessingland Car Boot', 52.41577308083052, 1.703570440794497 ],
        [ 'Corton Car Boot', 52.51180491401297, 1.7481962223133396 ],
        [ 'Lound Plant Center', 52.535749880262394, 1.7173005489329447 ],
        [ 'Yarmouth Market', 52.60837685330005, 1.7268673694566699 ],
        [ 'Upper Wood Farm Shop', 52.6585056993711, 1.6886565622926037 ]
    ]
    activityLocal.addEventListener("click", function() {
        for (i = 0; i < locationsLocal.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsLocal[i][1], locationsLocal[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityBeach = document.getElementById("activityBeach");
    let locationsBeach = [
        [ 'Lowestoft Beach', 52.463528942398, 1.7441735460103207 ],
        [ 'Great Yarmouth Beach', 52.60639302326283, 1.7381536439944512 ],
        [ 'Gorleston Beach', 52.574998738621645, 1.7316959505477176 ],
        [ 'Kessingland Beach', 52.41312737470827, 1.726270528821981 ],
        [ 'Pakefield Beach', 52.45805938018954, 1.7387002795530795 ]
    ]
    activityBeach.addEventListener("click", function() {
        for (i = 0; i < locationsBeach.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsBeach[i][1], locationsBeach[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

    let activityWater = document.getElementById("activityWater");
    let locationsWater = [
        [ 'Oulton Broad Watersports Center', 52.47217387174025, 1.70679854630566 ],
        [ 'Waveney River Center', 52.48436404767674, 1.669898801169207 ],
        [ 'Oulton Broad Yacht Club', 52.47364701692827, 1.7051126376816224 ],
        [ 'Scroby Sands Boat Trips', 52.60908304108401, 1.7383112160643936 ],
        [ 'Waveney River Tours', 52.47874805388766, 1.7109467675594736 ]
    ]
    activityWater.addEventListener("click", function() {
        for (i = 0; i < locationsWater.length; i++) {  
            markers = new google.maps.Marker({
                position: new google.maps.LatLng(locationsWater[i][1], locationsWater[i][2]),
                map: map,
                label: labels[i % labels.length]
            });
        }
    });

}

/*

// Initiates the maps for all location pages
function initMap() {

    //LOWESTOFT
        var labelsL = ["A", "B", "C", "D", "E"];

        //Declare variables for Lowestoft location markers 
        var locationsL = [
            [ 'Maritime Museum', 52.48786916515505, 1.757501231452841 ],
            [ 'Marina Theatre', 52.476160107028896, 1.7534854694519173 ],
            [ 'Ness Point', 52.48130428977037, 1.762758745215036 ],
            [ 'Lowestoft Beach', 52.463528942398, 1.7441735460103207 ],
            [ 'Pleasurewood Hills', 52.508024832271055, 1.7441718423062194 ]
        ];

        //Render Lowestoft map and center it
        mapL = new google.maps.Map(document.getElementById("mapLowestoft"), {
            zoom: 12,
            center: new google.maps.LatLng(52.4822390273935, 1.753391400138951)
        });

        //Loop through array to get latitude and longitude values and place markers
        for (i = 0; i < locationsL.length; i++) {  
            markersL = new google.maps.Marker({
                position: new google.maps.LatLng(locationsL[i][1], locationsL[i][2]),
                map: mapL,
                label: labelsL[i % labelsL.length]
            });
        }

    //GREAT YARMOUTH MAP

        var labelsY = ["F", "G", "H", "I", "J"];

        //Declare variables for Great Yarmouth location markers 
        var locationsY = [
            [ 'Pleasure Beach', 52.595472217209974, 1.735949694382154 ],
            [ 'Redwings', 52.554241310046464, 1.6474202363498287 ],
            [ 'Ocean Rooms', 52.57100281960958, 1.7330287761391332 ],
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
            markersY = new google.maps.Marker({
                position: new google.maps.LatLng(locationsY[i][1], locationsY[i][2]),
                map: mapY,
                label: labelsY[i % labelsY.length]
            });
        }
    
    //KESSINGLAND

        var labelsK = ["K", "L", "M", "N", "O"];

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
            markersK = new google.maps.Marker({
                position: new google.maps.LatLng(locationsK[i][1], locationsK[i][2]),
                map: mapK,
                label: labelsK[i % labelsK.length]
            });
        }

    //OULTON BROAD

        var labelsOB = ["P", "Q", "R", "S", "T"];

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
            markersOB = new google.maps.Marker({
                position: new google.maps.LatLng(locationsOB[i][1], locationsOB[i][2]),
                map: mapOB,
                label: labelsOB[i % labelsOB.length]
            });
        }
    }; */