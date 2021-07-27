 // Google API key
let APIkey = "AIzaSyAz2AgSP-awt4zaXYsWQWIXLev7StjPLLM";

// Initiates the maps for all location pages
function initMap() {
    let mapL = new google.maps.Map(document.getElementById("mapLowestoft"), {
        zoom: 13,
        center: {
            lat: 52.4822390273935,
            lng: 1.753391400138951
        }
    });

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
    // LOWESTOFT
    const maritimeMuseum;

    const transportMuseum ;

    const nessPoint;

    const lowestoftBeacH;

    const pleasurewoodHills;

    //YARMOUTH
    const pleasureBeach;

    const redwings;

    const raceCourse;

    const yareValley;

    const burghCastle;
    

    //KESSINGLAND
    const africaAlive

    const kessinglandBeach;
    
    const benacre;

    const carBoot;

    const suffolkHeathPath;

    //OULTON BROAD
    const carltonMarshes;

    const nicholasEveritt;

    const riverTours;

    const watersports;

    const commodorePub;

}