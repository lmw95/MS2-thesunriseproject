$(document).ready(function() {

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

});

