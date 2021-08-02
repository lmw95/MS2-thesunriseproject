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
$("#toggleModal").click(function() {
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

// Function that toggles different sections in visitor center
$("#projectToggleButton").click(function() {
  $(this).addClass("active-tab");
  $("#historyToggleButton").removeClass("active-tab");
  $("#inspoToggleButton").removeClass("active-tab");
});

$("#historyToggleButton").click(function() {
  $(this).addClass("active-tab");
  $("#projectToggleButton").removeClass("active-tab");
  $("#inspoToggleButton").removeClass("active-tab");
});

$("#inspoToggleButton").click(function() {
  $(this).addClass("active-tab");
  $("#projectToggleButton").removeClass("active-tab");
  $("#historyToggleButton").removeClass("active-tab");
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
  $(this).css("border", "solid 4px rgb(221, 110, 66, 0.3)");
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

// Function that resets the quiz
$("#resetButton").on("click", function() {
  location.reload();
});

// Toggle accordion for Google Maps locations (Lowestoft)
$("#ah1").on("click", function() {
  $("#ab1").slideToggle(500);
});

$("#ah2").on("click", function() {
  $("#ab2").slideToggle(500);
});

$("#ah3").on("click", function() {
  $("#ab3").slideToggle(500);
});

$("#ah4").on("click", function() {
  $("#ab4").slideToggle(500);
});

$("#ah5").on("click", function() {
  $("#ab5").slideToggle(500);
})

// Toggle accordion for Google Maps locations (Yarmouth)
$("#ah6").on("click", function() {
  $("#ab6").slideToggle(500);
});

$("#ah7").on("click", function() {
  $("#ab7").slideToggle(500);
});

$("#ah8").on("click", function() {
  $("#ab8").slideToggle(500);
});

$("#ah9").on("click", function() {
  $("#ab9").slideToggle(500);
});

$("#ah10").on("click", function() {
  $("#ab10").slideToggle(500);
});

// Toggle accordion for Google Maps (Kessingland)
$("#ah11").on("click", function() {
  $("#ab11").slideToggle(500);
});

$("#ah12").on("click", function() {
  $("#ab12").slideToggle(500);
});

$("#ah13").on("click", function() {
  $("#ab13").slideToggle(500);
});

$("#ah14").on("click", function() {
  $("#ab14").slideToggle(500);
});

$("#ah15").on("click", function() {
  $("#ab15").slideToggle(500);
});

// Toggle accordion for Google Maps (Oulton Broad)
$("#ah16").on("click", function() {
  $("#ab16").slideToggle(500);
});

$("#ah17").on("click", function() {
  $("#ab17").slideToggle(500);
});

$("#ah18").on("click", function() {
  $("#ab18").slideToggle(500);
});

$("#ah19").on("click", function() {
  $("#ab19").slideToggle(500);
});

$("#ah20").on("click", function() {
  $("#ab20").slideToggle(500);
});

}

/*
  $(".quiz-option").removeClass("clicked");
  $(".quiz-option").removeClass("faded");
  $(".quiz-option").on("mouseover", function() {
      $(this).css("border", "solid 4px rgb(221, 110, 66, 0.3)");
      $(this).css("cursor", "pointer");
    })
  $(".quiz-option").on("mouseleave", function() {
      $(this).css("border", "solid 4px transparent");
    });
});

// Function that returns the user's results

});

)*/)
