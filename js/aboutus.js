$(document).ready(function(){
  $(".aboutus-content").slideDown(500);
  $('.aboutus-content img').css('display', 'block');
  $('.aboutus-content img').animate({
    display: "block",
    width: "50%",
    opacity: 1
  }, 500);

  $("#date").text((new Date).getFullYear());
});
