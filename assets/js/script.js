
window.onload = (event) => {

// All click events / jQuery code

  //Click event where navbar background fades in when user scrolls - https://stackoverflow.com/a/41037394

  $(function () {
    $(document).scroll(function () {
      let $nav = $(".navbar");
      $nav.toggleClass('nav-scrolled', $(this).scrollTop() > $nav.height());
    });


    // Click event that opens the modal from the nav menu

    let $openModal = $("#toggleModal");
    $openModal.on("click", function() {
      $(".modal").addClass("is-active", "is-clipped");
    });

    // Click event that opens to modal from the contact section
    let $openModalOption = $("#toggleModalOption");
    $openModalOption.on("click", function() {
      $(".modal").addClass("is-active", "is-clipped");
    })

    // Click event that allows modal to close by cancel

    let $closeModalButton = $("#closeModal");
    $closeModalButton.on("click", function(){
      $(".modal").removeClass("is-active", "is-clipped");
    });


    //Click event that allows modal to close when background is clicked

    let $closeModalBackground = $(".modal-background");
    $closeModalBackground.on("click", function() {
      $(".modal").removeClass("is-active", "is-clipped");
    });


    // Click event which takes the user to the top 5 picks when activity clicked - code https://stackoverflow.com/a/8143318

    let $activity = $(".activity");
    $activity.on("click", function(){
      var position = $("#map").position();
      scroll(0,position.top);
    });


    // Click event that allows map locations to show

    $(".activity").on("click", function() {
      if (window.screen.width < 768 ) {
        $("#activityWrapper").css("display", "block");
      } else {
        $("#activityWrapper").css("display", "flex");
      }
    });

  });
}


// Event listener that allows online guide to fade in and out when user scrolls - https://webdesign.tutsplus.com/tutorials/simple-fade-effect-on-scroll--cms-35166

const checkpoint = 150;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 0 - currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.querySelector(".online-guide").style.opacity = opacity;
});


// Changes content for 'walks'

let walks = document.getElementById("activityWalks");
walks.addEventListener("click", function () {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "Yare Valley";
    titles[1].textContent = "Suffolk Coast Path";
    titles[2].textContent = "Carlton Marshes";
    titles[3].textContent = "Blunderston to Flixton";
    titles[4].textContent = "Benacre Nature Reserve";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://yarevalleysociety.org.uk/");
    website[1].setAttribute("href", "https://ldwa.org.uk/ldp/members/show_path.php?path_name=Suffolk+Coast+Path");
    website[2].setAttribute("href", "https://www.suffolkwildlifetrust.org/carlton");
    website[3].setAttribute("href", "https://www.alltrails.com/trail/england/suffolk/blundeston-marsh-lane-to-flixton-decoy-broad-to-oulton-broad");
    website[4].setAttribute("href", "https://www.gov.uk/government/publications/suffolks-national-nature-reserves/suffolks-national-nature-reserves");
  }
});


// Changes content for 'nature'

let nature = document.getElementById("activityNature");
nature.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "The Norfolk Broads";
    titles[1].textContent = "Carlton Marshes";
    titles[2].textContent = "North Cove Nature Reserve";
    titles[3].textContent = "Benacre Nature Reserve";
    titles[4].textContent = "Berney Marshes";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.visitthebroads.co.uk/");
    website[1].setAttribute("href", "https://www.suffolkwildlifetrust.org/carlton");
    website[2].setAttribute("href", "https://www.visitthebroads.co.uk/things-to-do/wildlife/nature-reserves/product-detail?listing=3&key=749741");
    website[3].setAttribute("href", "https://www.gov.uk/government/publications/suffolks-national-nature-reserves/suffolks-national-nature-reserves");
    website[4].setAttribute("href", "https://www.rspb.org.uk/reserves-and-events/reserves-a-z/berney-marshes-breydon-water/");
  }
});


// Changes content for 'conservation'

let conservation = document.getElementById("activityConservation");
conservation.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "Africa, Alive!";
    titles[1].textContent = "Redwings";
    titles[2].textContent = "Carlton Marshes";
    titles[3].textContent = "Pettit's Animal Adventure Park";
    titles[4].textContent = "SeaLife";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.africa-alive.co.uk/");
    website[1].setAttribute("href", "https://www.redwings.org.uk/");
    website[2].setAttribute("href", "https://www.suffolkwildlifetrust.org/carlton");
    website[3].setAttribute("href", "https://www.pettittsadventurepark.co.uk/");
    website[4].setAttribute("href", "https://www.visitsealife.com/great-yarmouth//");
  }
});


// Changes the content for 'family'

let family = document.getElementById("activityFamily");
family.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "Pleasurewood Hills";
    titles[1].textContent = "Pleasure Beach";
    titles[2].textContent = "Pettit's Animal Adventure Park";
    titles[3].textContent = "Africa, Alive!";
    titles[4].textContent = "Joyland Children's Fun Park";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.pleasurewoodhills.com/");
    website[1].setAttribute("href", "https://pleasure-beach.co.uk/");
    website[2].setAttribute("href", "https://www.pettittsadventurepark.co.uk/");
    website[3].setAttribute("href", "https://www.africa-alive.co.uk/");
    website[4].setAttribute("href", "http://www.joyland.org.uk/");
  }
});


// Changes the content of 'thill-seekers'

let thrills = document.getElementById("activityThrills");
thrills.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "Pleasurewood Hills";
    titles[1].textContent = "Pleasure Beach";
    titles[2].textContent = "Quasar";
    titles[3].textContent = "Prestige Escape Rooms";
    titles[4].textContent = "Ellough Go Karting";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.pleasurewoodhills.com/");
    website[1].setAttribute("href", "https://pleasure-beach.co.uk/");
    website[2].setAttribute("href", "https://www.visitgreatyarmouth.co.uk/information/product-catch-all/quasar-functions-p1391841");
    website[3].setAttribute("href", "https://www.prestige-escape-rooms.co.uk/");
    website[4].setAttribute("href", "http://www.elloughpark.co.uk/");
  }
});


// Changes content of 'history'

let history = document.getElementById("activityHistory");
history.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "Burgh Castle";
    titles[1].textContent = "Maritime Museum";
    titles[2].textContent = "Time and Tide Museum";
    titles[3].textContent = "National Trust Elizabethan House";
    titles[4].textContent = "Lowestoft Museum";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.english-heritage.org.uk/visit/places/burgh-castle/");
    website[1].setAttribute("href", "http://www.lowestoftmaritimemuseum.co.uk/");
    website[2].setAttribute("href", "https://www.museums.norfolk.gov.uk/time-tide");
    website[3].setAttribute("href", "https://www.nationaltrust.org.uk/elizabethan-house-museum");
    website[4].setAttribute("href", "https://lowestoftmuseum.org/");
  }
});


// Changes content of 'The Broads'

let broads = document.getElementById("activityBroads");
broads.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "The Norfolk Broads";
    titles[1].textContent = "Waveney River Center";
    titles[2].textContent = "Nicholas Everitt Park";
    titles[3].textContent = "Oulton Watersports Center";
    titles[4].textContent = "Breydon Water";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.visitthebroads.co.uk/");
    website[1].setAttribute("href", "https://www.waveneyrivercentre.co.uk/");
    website[2].setAttribute("href", "https://www.discoverlowestoft.co.uk/business/nicholas-everett-park/");
    website[3].setAttribute("href", "https://oultonbroadwatersportscentre.co.uk/");
    website[4].setAttribute("href", "https://www.broads-authority.gov.uk/boating/navigating-the-broads/water-depths/breydon-water");
  }
});


//Changes content of 'music'

let music = document.getElementById("activityMusic");
music.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "Latitude Festival";
    titles[1].textContent = "Marina Theatre";
    titles[2].textContent = "First Lights Festival";
    titles[3].textContent = "Lowestoft Players";
    titles[4].textContent = "Hippodrome Circus";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.latitudefestival.com/");
    website[1].setAttribute("href", "https://www.marinatheatre.co.uk/");
    website[2].setAttribute("href", "https://firstlightlowestoft.com/");
    website[3].setAttribute("href", "https://www.lowestoftplayers.co.uk/");
    website[4].setAttribute("href", "https://hippodromecircus.co.uk/");
  }
});


// Change content for 'nightlife'

let nightlife = document.getElementById("activityNightlife");
nightlife.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "Ocean Rooms";
    titles[1].textContent = "The Commodore";
    titles[2].textContent = "Iconic Bar";
    titles[3].textContent = "Broadview Wine Bar";
    titles[4].textContent = "Hotel Hatfield";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.oceanroom.co.uk/");
    website[1].setAttribute("href", "https://www.moss-co.com/the-commodore/");
    website[2].setAttribute("href", "https://www.iconiclowestoft.co.uk/");
    website[3].setAttribute("href", "https://www.tripadvisor.co.uk/Attraction_Review-g2317313-d5917176-Reviews-Broadview_Winebar-Oulton_West_Yorkshire_England.html");
    website[4].setAttribute("href", "http://www.thehatfieldhotel.co.uk/");
  }
});


// Change content for 'local oddities'

let local = document.getElementById("activityLocal");
local.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "Kessingland Car Boot";
    titles[1].textContent = "Corton Car Boot";
    titles[2].textContent = "Lound Plant Center";
    titles[3].textContent = "Yarmouth Market";
    titles[4].textContent = "Upper Wood Farm Shop";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.tripadvisor.co.uk/Attraction_Review-g1464316-d7186715-Reviews-Kessingland_Car_Boot-Kessingland_Suffolk_East_Anglia_England.html");
    website[1].setAttribute("href", "http://www.carbootjunction.com/car-boot-by-county-listing.php?id=11459#:~:text=Mills%20Drive%2C%20Corton%2C%20Lowestoft%2C%20Suffolk%2C%20NR32%205JB&text=Car%20boot%20sales%20are%20held,Strictly%20no%20traders.");
    website[2].setAttribute("href", "https://loundplantcentre.com/");
    website[3].setAttribute("href", "https://www.visitgreatyarmouth.co.uk/things-to-do/market-day-p1392221");
    website[4].setAttribute("href", "https://www.facebook.com/upperwoodfarm/");
  }
});


// Change the content for 'beach day'

let beach = document.getElementById("activityBeach");
beach.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "Lowestoft Beach";
    titles[1].textContent = "Yarmouth Beach";
    titles[2].textContent = "Gorleston Beach";
    titles[3].textContent = "Kessingland Beach";
    titles[4].textContent = "Pakefield Beach";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://www.thebeachguide.co.uk/south-east-england/suffolk/lowestoft-town");
    website[1].setAttribute("href", "https://www.visitgreatyarmouth.co.uk/explore/the-beach-guide");
    website[2].setAttribute("href", "https://www.thebeachguide.co.uk/south-east-england/norfolk/gorleston-beach.htm");
    website[3].setAttribute("href", "https://www.thebeachguide.co.uk/south-east-england/suffolk/kessingland.htm");
    website[4].setAttribute("href", "https://www.visitsuffolk.com/attraction_activity/pakefield-beach");
  }
});


// Change content for 'on the water'

let water = document.getElementById("activityWater");
water.addEventListener("click", function() {
  let titles = document.getElementsByClassName("location-title");
  for (i = 0; i < titles.length ; i++) {
    titles[0].textContent = "The Watersports Center";
    titles[1].textContent = "Waveney River Center";
    titles[2].textContent = "Oulton Broad Yacht Club";
    titles[3].textContent = "Scroby Sands Boat Trips";
    titles[4].textContent = "Waveney River Tours";
  }
  let website = document.getElementsByClassName("location-website");
  for (i = 0; i < website.length; i++) {
    website[0].setAttribute("href", "https://oultonbroadwatersportscentre.co.uk/");
    website[1].setAttribute("href", "https://www.waveneyrivercentre.co.uk/");
    website[2].setAttribute("href", "https://wobyc.com/");
    website[3].setAttribute("href", "https://www.visiteastofengland.com/attraction_activity/scroby-sands-boat-trips");
    website[4].setAttribute("href", "https://www.waveneyrivertours.com/");
  }
});