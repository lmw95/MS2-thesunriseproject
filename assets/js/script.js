jQuery(document).ready(function() {

// Function which takes the user to the next section from header - code https://stackoverflow.com/a/8143318
$("#clickToScroll").click(function(){
    var position = $("#visitorCenter").position();
    scroll(0,position.top);
});

// Function that changes the navbar when the user scrolls down - code https://stackoverflow.com/a/41037394
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

//Function that allows modal to open
$("#toggleModal, #toggleModalOption").click(function() {
  $(".modal").addClass("is-active", "is-clipped");
});

//Function that allows modal to close when cancel button is clicked
$("#closeModal").click(function() {
  $(".modal").removeClass("is-active", "is-clipped");
});

// Function that allows modal to close when background is clicked
$(".modal-background").click(function() {
  $(".modal").removeClass("is-active", "is-clipped");
});

//Functions that will toggle the Bulma tabs
$("#projectToggleButton").on("click", function() {
  $(this).addClass("active-tab");
  $("#projectToggle").slideDown(1000);
  if ($("#historyToggleButton").hasClass("active-tab") || $("#inspoToggleButton").hasClass("active-tab")) {
    $("#historyToggleButton").removeClass("active-tab") && $("#inspoToggleButton").removeClass("active-tab");
  }
  $("#historyToggle").css("display", "none");
  $("#inspoToggle").css("display", "none");
});

// Function that toggles the Visitor Center menu to reveal their sections
$("#historyToggleButton").on("click", function() {
  $(this).addClass("active-tab");
  $("#historyToggle").slideDown(1000);
  if ($("#projectToggleButton").hasClass("active-tab") || $("#inspoToggleButton").hasClass("active-tab")) {
    $("#projectToggleButton").removeClass("active-tab") && $("#inspoToggleButton").removeClass("active-tab");
  }
  $("#projectToggle").css("display", "none");
  $("#inspoToggle").css("display", "none");
});

$("#inspoToggleButton").on("click", function() {
  $(this).addClass("active-tab");
  $("#inspoToggle").slideDown(1000);
  if ($("#projectToggleButton").hasClass("active-tab") || $("#historyToggleButton").hasClass("active-tab")) {
    $("#projectToggleButton").removeClass("active-tab") && $("#historyToggleButton").removeClass("active-tab");
  }
  $("#projectToggle").css("display", "none");
  $("#historyToggle").css("display", "none");
});

// Function that allows the user to scroll to next section of the page from the Visitor's Center section
$("#clickToScrollQuiz").click(function() {
  var position = $("#quizSection").position();
  scroll(0,position.top);
});

// Function that allows the user to scroll to the next section of the website from the Guide section
$("#clickToScrollVC").click(function() {
var position = $("#visitorCenter").position();
scroll(0,position.top);
});

// Function that changes background of guide options when clicked on
$(".quiz-option").on("click", function() {
$(this).addClass("clicked");
});

// Function that changes the cursor to a pointer when mouseover
$(".quiz-option").on("mouseover", function() {
$(this).css("cursor", "pointer");
});

// Function that changes the border colour of the quiz options when mouseover
$(".quiz-option").on("mouseover", function() {
  $(this).css("border", "solid 4px rgb(96, 190, 134, 0.3)");
});

$(".quiz-option").on("mouseleave", function() {
  $(this).css("border", "solid 4px transparent");
});

// Function that only allows two quiz option divs to be clicked
$(".quiz-option").on("click", function() {
  let clicked = document.getElementsByClassName("clicked");
  for (let i = 0; i < clicked.length; i++) {
    if (clicked.length > 1) {
      changeTextColour();
    }
  }
  function changeTextColour() {
    $(".quiz-option:not(.clicked)").addClass("faded");
    $(".quiz-option").off();
  }
});

// Function that toggles the location pages when selected
$(".quiz-option").on("click", function() {
  $(this).hasClass("clicked", true);
  if ($("#history").hasClass("clicked") && $("#walking").hasClass("clicked")) {
    $("#lowestoft").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#lowestoft").position();
    scroll(0,position.top);

  }
  else if ($("#history").hasClass("clicked") && $("#nature").hasClass("clicked")) {
    $("#yarmouth").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#yarmouth").position();
    scroll(0,position.top);
  }
  else if ($("#history").hasClass("clicked") && $("#broads").hasClass("clicked")) {
    $("#yarmouth").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#yarmouth").position();
    scroll(0,position.top);
  }
  else if ($("#history").hasClass("clicked") && $("#fun").hasClass("clicked")) {
    $("#lowestoft").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#lowestoft").position();
    scroll(0,position.top);
  }
  else if ($("#history").hasClass("clicked") && $("#nightlife").hasClass("clicked")) {
    $("#yarmouth").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#yarmouth").position();
    scroll(0,position.top);
  }
  else if ($("#nature").hasClass("clicked") && $("#walking").hasClass("clicked")) {
    $("#kessingland").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#kessingland").position();
    scroll(0,position.top);
  }
  else if ($("#nature").hasClass("clicked") && $("#broads").hasClass("clicked")) {
    $("#oultonBroad").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#oultonBroad").position();
    scroll(0,position.top);
  }
  else if ($("#nature").hasClass("clicked") && $("#fun").hasClass("clicked")) {
    $("#yarmouth").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#yarmouth").position();
    scroll(0,position.top);
  }
  else if ($("#walking").hasClass("clicked") && $("#broads").hasClass("clicked")) {
    $("#oultonBroad").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#oultonBroad").position();
    scroll(0,position.top);
  }
  else if ($("#walking").hasClass("clicked") && $("#fun").hasClass("clicked")) {
    $("#lowestoft").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#lowestoft").position();
    scroll(0,position.top);
  }
  else if ($("#walking").hasClass("clicked") && $("#nightlife").hasClass("clicked")) {
    $("#oultonBroad").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#oultonBroad").position();
    scroll(0,position.top);
  }
  else if ($("#broads").hasClass("clicked") && $("#fun").hasClass("clicked")) {
    $("#oultonBroad").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#oultonBroad").position();
    scroll(0,position.top);
  }
  else if ($("broads").hasClass("clicked") && $("#nightlife").hasClass("clicked")) {
    $("oultonBroad").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#oultonBroad").position();
    scroll(0,position.top);
  }
  else if ($("#fun").hasClass("clicked") && $("#nightlife").hasClass("clicked")) {
    $("#yarmouth").slideToggle(1500);
    $(".fade-in").fadeIn(3000);
    var position = $("#yarmouth").position();
    scroll(0,position.top);
  }
});
  
// Function that resets the quiz
$("#resetButton").on("click", function() {
  location.reload();
}); 

// Function that toggles ALL locations

//Function toggles the accordions next to Google Maps
$("div.ah").on("click", function() {
  $(this).next("div").slideToggle();

  var otherItems = $("div.ah").not($(this)).next("div");
  otherItems.slideUp();
});

// Function that toggles Bulma tabs

// Function that adds effects to link that opens modal
$("#toggleModalOption").on("mouseover", function() {
  $(this).css("cursor", "pointer");
});

});
