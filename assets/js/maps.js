 //Google API key
 let apiKey = "AIzaSyAz2AgSP-awt4zaXYsWQWIXLev7StjPLLM";
 

//Declare global variables

let map;
let markers = [];


// 'Walks' locations

    let walkLocations = [{
            coordinates: { // Yare Valley
                lat: 52.570964914134606,
                lng: 1.6164365115490809
            },
        },
        {
            coordinates: { // Suffolk Coast Path
                lat: 52.41244492746119,
                lng: 1.727733211662086
            },
        },
        {
            coordinates: { // Carlton Marshes
                lat: 52.46844639791714, 
                lng: 1.6924854514230112 
            },
        },
        {
            coordinates: { // Blunderston to Flixton
                lat: 52.504425395383315, 
                lng: 1.6946567319033825
            },
        },
        {
            coordinates: { // Benacre Nature Reserve
                lat: 52.38465376750189, 
                lng: 1.7007969578473394
            }
    }];


// 'Nature' locations

    let natureLocations = [{
            coordinates: { // The Norfolk Broads
                lat: 52.60455007585693, 
                lng: 1.606962272050122
            },
        },
        {
            coordinates: { // Carlton Marshes
                lat: 52.46844639791714, 
                lng: 1.6924854514230112
            },
        },
        {
            coordinates: { // North Cove Nature Reserve
                lat: 52.45829960600791, 
                lng: 1.6358439674500105
            },
        },
        {
            coordinates: { // Benacre Nature Reserve
                lat: 52.3836188698611, 
                lng: 1.701525476619970
            },
        },
        {
            coordinates: { // Berney Marshes
                lat: 52.58713398373798,
                lng: 1.6365220566284384
            }
    }];


// 'Conservation' locations

    let conservationLocations = [{
            coordinates: { // Africa Alive
                lat: 52.413885514052815, 
                lng: 1.7015960432214932
            },
        },
        {
            coordinates: { // Redwings
                lat: 52.554241310046464, 
                lng: 1.6474202363498287
            },
        },
        {
            coordinates: { // Cartlon Marshes
                lat: 52.46844639791714,
                lng: 1.6924854514230112
            },
        },
        {
            coordinates: { // Pettit's Animal Adventure Park
                lat: 52.56991832767232, 
                lng: 1.5780622191626201
            },
        },
        {
            coordinates: { // SeaLife
                lat: 52.601002375867395, 
                lng: 1.7364748490458481
            }
    }];


// 'Family' locations

    let familyLocations = [{
            coordinates: { // Pleasurewood Hills
                lat: 52.508024832271055, 
                lng: 1.7441718423062194
            },
        },
        {
            coordinates: { // Pleasure Beach
                lat: 52.595472217209974, 
                lng: 1.735949694382154
            },
        },
        {
            coordinates: { // Pettit's Animal Adventure Park
                lat: 52.56991832767232, 
                lng: 1.5780622191626201
            },
        },
        {
            coordinates: { // Africa, Alive!
                lat: 52.413885514052815, 
                lng: 1.7015960432214932
            },
        },
        {
            coordinates: { // Joyland Children's Fun Park
                lat: 52.609054772153904, 
                lng: 1.7376054518090684
            }
    }];


// 'Thrill-seeker' locations

    let thrillLocations = [{
            coordinates: { // Pleasurewood Hills
                lat: 52.508024832271055, 
                lng: 1.7441718423062194
            },
        },
        {
            coordinates: { // Pleasure Beach
                lat: 52.595472217209974, 
                lng: 1.735949694382154
            },
        },
        {
            coordinates: { // Quasar 
                lat: 52.60487794938296, 
                lng: 1.7363555728396223
            },
        },
        {
            coordinates: { // Prestige Escape Rooms
                lat: 52.48506018063326, 
                lng: 1.7564538121270539
            },
        },
        {
            coordinates: { // Ellough Go Karting
                lat: 52.44184134766564, 
                lng: 1.6028291447370862
            }
    }];


// 'History' locations

    let historyLocations = [{
            coordinates: { // Burgh Castle
                lat: 52.583751110675195, 
                lng: 1.6520405685211867
            },
        },
        {
            coordinates: { // Maritime Museum
                lat: 52.48786916515505, 
                lng: 1.757501231452841
            },
        },
        {
            coordinates: { // Time and Tide Museum
                lat: 52.603253824438475, 
                lng: 1.7310108009596652
            },
        },
        {
            coordinates: { // National Trust Elizabethan House
                lat: 52.60944715108201, 
                lng: 1.7258494494042143
            },
        },
        {
            coordinates: { // Lowestoft Museum
                lat: 52.47616014344233, 
                lng: 1.7064895970139302
            }
    }];


// 'Broads' locations

    let broadsLocations = [{
            coordinates: { // The Norfolk Broads
                lat: 52.60455007585693, 
                lng: 1.606962272050122
            },
        },
        {
            coordinates: { // Waveney River Center
                lat: 52.48436404767674, 
                lng: 1.669898801169207
            },
        },
        {
            coordinates: { // Nicholas Everitt Park
                lat: 52.47459243329394, 
                lng: 1.7072134383271722
            },
        },
        {
            coordinates: { // Oulton Broad Watersports Park
                lat: 52.47217387174025, 
                lng: 1.70679854630566
            },
        },
        {
            coordinates: { // Breydon Water
                lat: 52.60261231260812,
                lng: 1.6818637854118503
            }

    }];


// 'Music & art' locations

    let musicLocations = [{
            coordinates: { // Latitude Festival
                lat: 52.33835187750651, 
                lng: 1.6000265707292998
            },
        },
        {
            coordinates: { // Marina Theatre
                lat: 52.476160107028896, 
                lng: 1.7534854694519173
            },
        },
        {
            coordinates: { // First Lights Festival
                lat: 52.46364777632944, 
                lng: 1.7442255790112735
            },
        },
        {
            coordinates: { // Lowestoft Players
                lat: 52.475500658720186, 
                lng: 1.7536388108125185
            },
        },
        {
            coordinates: { // Hippodrome Circus
                lat: 52.60492435352424, 
                lng: 1.7359257171956493
            }
    }];


// 'Nightlife' locations

    let nightlifeLocations = [{
            coordinates: { // Ocean Rooms
                lat: 52.57100281960958, 
                lng: 1.7330287761391332
            },
        },
        {
            coordinates: { // The Commodore
                lat: 52.47657739053018, 
                lng: 1.7109636377713318
            },
        },
        {
            coordinates: { // Iconic Bar
                lat: 52.4730167674014, 
                lng: 1.749305229887624
            },
        },
        {
            coordinates: { // Broadview Wine Bar
                lat: 52.475119348264386, 
                lng: 1.7100462277306123
            },
        },
        {
            coordinates: { // The Hotel Hatfield
                lat: 52.46846444363252, 
                lng: 1.7468426271224402
            }
    }];


// 'Local oddities' locations

    let odditiesLocations = [{
            coordinates: { // Kessingland Car Boot
                lat: 52.41577308083052, 
                lng: 1.703570440794497 
            },
        },
        {
            coordinates: { // Corton Car Boot
                lat: 52.51180491401297, 
                lng: 1.7481962223133396
            },
        },
        {
            coordinates: { // Lound Plant Center
                lat: 52.535749880262394, 
                lng: 1.7173005489329447
            },
        },
        {
            coordinates: { // Yarmouth Market
                lat: 52.60837685330005, 
                lng: 1.7268673694566699
            },
        },
        {
            coordinates: { // Upper Wood Farm Shop
                lat: 52.6585056993711, 
                lng: 1.6886565622926037
            }

    }];


// 'Beach days' locations

    let beachLocations = [{
            coordinates: { // Lowestoft Beach
                lat: 52.463528942398, 
                lng: 1.7441735460103207
            },
        },
        {
            coordinates: { // Great Yarmouth Beach
                lat: 52.60639302326283, 
                lng: 1.7381536439944512
            },
        },
        {
            coordinates: { // Gorleston Beach
                lat: 52.574998738621645, 
                lng: 1.7316959505477176
            },
        },
        {
            coordinates: { // Kessingland Beach
                lat: 52.41312737470827, 
                lng: 1.726270528821981
            },
        },
        {
            coordinates: { // Pakefield Beach
                lat: 52.45805938018954, 
                lng: 1.7387002795530795
            }
    }];


// 'On the water' locations

    let waterLocations = [{
            coordinates: { // Oulton Broad Watersports Center
                lat: 52.47217387174025, 
                lng: 1.70679854630566
            },
        },
        {
            coordinates: { // Waveney River Center
                lat: 52.48436404767674, 
                lng: 1.669898801169207
            },
        },
        {
            coordinates: { // Oulton Broad Yacht Club
                lat: 52.47364701692827, 
                lng: 1.7051126376816224
            },
        },
        {
            coordinates: { // Scroby Sands Boat Trips
                lat: 52.60908304108401, 
                lng: 1.7383112160643936
            },
        },
        {
            coordinates: { // Waveney River Tours
                lat: 52.47874805388766, 
                lng: 1.7109467675594736 
            }
    }];


//Initiates the map

function initMap(chosenDestinations) {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: new google.maps.LatLng(52.51582061982711, 1.743778460969181)
    });

    let labels = ['A', 'B', 'C', 'D', 'E'];


    //Loop through array to get latitude and longitude values and place markers

    if (chosenDestinations) {
        for (i = 0; i < chosenDestinations.length; i++) {  
            markers = new google.maps.Marker({
                position: chosenDestinations[i].coordinates,
                map: map,
                label: labels[i % labels.length],
                animation: google.maps.Animation.DROP
            });
        }
    }
}


// jQuery to contain all click events for activity buttons

$(document).ready(function() {

    $(function () {
        let $walksButton = $("#activityWalks");
        $walksButton.click(function () {
            initMap(walkLocations);
        });

        let $natureButton = $("#activityNature");
        $natureButton.click(function () {
            initMap(natureLocations);
        });

        let $conservationButton = $("#activityConservation");
        $conservationButton.click(function () {
            initMap(conservationLocations);
        });

        let $familyButton = $("#activityFamily");
        $familyButton.click(function () {
            initMap(familyLocations);
        });

        let $thrillsButton = $("#activityThrills");
        $thrillsButton.click(function () {
            initMap(thrillLocations);
        });

        let $historyButton = $("#activityHistory");
        $historyButton.click(function () {
            initMap(historyLocations);
        });

        let $broadsButton = $("#activityBroads");
        $broadsButton.click(function () {
            initMap(broadsLocations);
        });

        let $musicButton = $("#activityMusic");
        $musicButton.click(function () {
            initMap(musicLocations);
        });

        let $nightlifeButton = $("#activityNightlife");
        $nightlifeButton.click(function () {
            initMap(nightlifeLocations);
        });

        let $odditiesButton = $("#activityLocal");
        $odditiesButton.click(function () {
            initMap(odditiesLocations);
        });

        let $beachButton = $("#activityBeach");
        $beachButton.click(function () {
            initMap(beachLocations);
        });

        let $waterButton = $("#activityWater");
        $waterButton.click(function () {
            initMap(waterLocations);
        })
    });
});
