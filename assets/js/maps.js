 // Google API key
let APIkey = "AIzaSyAz2AgSP-awt4zaXYsWQWIXLev7StjPLLM";

// Initiates the maps for all location pages
function initMap() {

    //Declare variables for Lowestoft location markers 
    const maritimeMuseum = { lat: 52.48786916515505, lng: 1.757501231452841 };
    const transportMuseum = { lat: 52.45279120791381, lng: 1.6877369984663078 };
    const nessPoint = { lat: 52.48130428977037, lng: 1.762758745215036 };
    const lowestoftBeach = { lat: 52.463528942398, lng: 1.7441735460103207 };
    const pleasurewoodHills = { lat: 52.508024832271055, lng: 1.7441718423062194 };

    //Initialise map
    let mapL = new google.maps.Map(document.getElementById("mapLowestoft"), {
        zoom: 13,
        center: {
            lat: 52.4822390273935,
            lng: 1.753391400138951
        }
    });

    //Set markers for each location
    let marker1 = new google.maps.Marker({
        position: maritimeMuseum,
        map: mapL,
    });

    let marker2 = new google.maps.Marker({
        poisition: transportMuseum,
        map: mapL,
    });

    let marker3 = new google.maps.Marker({
        position: nessPoint,
        map: mapL,
    });

    let marker4 = new google.maps.Marker({
        position: lowestoftBeach,
        map: mapL,
    })

    let marker5 = new google.maps.Marker({
        position: pleasurewoodHills,
        map: mapL,
    })

    var bounds = new google.maps.LatLngBounds(marker1, marker2, marker3, marker4, marker5);
    mapL.fitBounds(bounds);

}


/*

    let mapY = new google.maps.Map(document.getElementById("mapYarmouth"), {
        zoom: 13,
        center: {
            lat: 52.60359934002129, 
            lng: 1.7262308646134656
        }
    });

    let mapK = new google.maps.Map(document.getElementById("mapKessingland"), {
        zoom: 13,
        center: {
            lat: 52.42097755992867,
            lng: 1.7125956365065302
        }
    });

    let mapOB = new google.maps.Map(document.getElementById("mapOultonBroad"), {
        zoom: 15,
        center: {
            lat: 52.47275017240344, 
            lng: 1.7041162042216889
        }
    });

    // Create all locations for each location's top 5 attractions

    //YARMOUTH
    const pleasureBeach = { lat: 52.595472217209974, lng: 1.735949694382154 };
    const redwings = { lat: 52.554241310046464, lng: 1.6474202363498287 };
    const raceCourse = { lat: 52.63021460217459, lng: 1.7318343587904275 };
    const yareValley = { lat: 52.60317161849138, lng: 1.6820370627771835 };
    const burghCastle = { lat: 52.583751110675195, lng: 1.6520405685211867 };

    //KESSINGLAND
    const africaAlive = { lat: 52.413885514052815, lng: 1.7015960432214932 }
    const kessinglandBeach = { lat: 52.41312737470827, lng: 1.726270528821981 };
    const benacre = { lat: 52.3836188698611, lng: 1.7015254766199701 };
    const carBoot = { lat: 52.41577308083052, lng: 1.703570440794497 };
    const suffolkHeathPath = { lat: 52.40321427281386, lng: 1.7270214872345362 };

    //OULTON BROAD
    const carltonMarshes = { lat: 52.46863102969376, lng: 1.6924630550025137 };
    const nicholasEveritt = { lat: 52.47432810657495, lng: 1.707210704881762 };
    const riverTours = { lat: 52.47482176398323, lng: 1.7103077905291226 };
    const watersports = { lat: 52.472291711185704, lng: 1.7067331167685726 };
    const commodore = { lat: 52.47621693133902, lng: 1.7109530876879453 };
}  
*/