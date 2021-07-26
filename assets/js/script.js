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
  $(this).css("margin-top", "-4px");
  $(this).css("margin-bottom", "-4px");
})

$(".quiz-option").on("mouseleave", function() {
  $(this).css("border", "none");
})

// Function that only allows two quiz option divs to be clicked at one time

// Function that resets the quiz
$("#resetButton").on("click", function() {
  $(".quiz-option").removeClass("clicked");
});

// Function that returns the user's results

});

