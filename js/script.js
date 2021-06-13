$(document).ready(function() {
  if(sessionStorage.getItem("email")!=null){
    $('#username').text("Hi " + sessionStorage.getItem('email'));
    $('#sign-up').hide();
    $('#login').hide();
    $('#sign-up-bottom').hide();
    $('#login-bottom').hide();
    $('#sign-out').css('display','block');
    $('#sign-out-bottom').css('display','block');
  }

  $('#sign-out, #sign-out-bottom').click(function(){
    sessionStorage.removeItem('email');
    $('#sign-up').show();
    $('#login').show();
    $('#sign-up-bottom').show();
    $('#login-bottom').show();
    $('#sign-out').hide();
    $('#sign-out-bottom').hide();
    window.location.reload();
  });

  $("#date").text((new Date).getFullYear());

  $('.slider').slick({
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});


function validate(){
  var email = document.getElementById("email").value;
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  var result = emailReg.test(email);
  if(email == ""){
    $('#error').text("Please enter your email");
  }else if(!result){
    $('#error').text("Please enter valid email");
  }
  else{
    window.location.href = "success.html";
  }
}

function details(elem) {
  setBooksObject();
  var title=$(elem).parents('.card').children(1).children('.product-description').data('name');
  window.location.href = "bookDetails.html?title="+title;
}

function descDetails(elem) {
  setBooksObject();
  var title=$(elem).siblings('.product-description').data('name');
  window.location.href = "bookDetails.html?title="+title;
}

function setBooksObject() {
  var cart = sessionStorage.getItem("Books");
  var cartItems = [];
  if(cart == null || cart.length == 0) {
    $(".product-description").each(function() {
      var name = $(this).data("name");
      var src = $(this).data( "src" );
      var desc = $(this).data("desc");
      var price = $(this).data("price");
      var cartObject = {
        name: name,
        src: src,
        desc: desc,
        price: price
      }
      cartItems.push(cartObject);
    });
    sessionStorage.setItem("Books", JSON.stringify(cartItems));
  }
}

// $(".slider-one")
// .not(".slick-initialized")
// .slick({
// 	prevArrow:".site-slider.prev",
// 	nextArrow: ".site-slider.next",
// 	slidesToShow: 5,
// 	slidesToScroll: 1,
// 	autoplaySpeed: 2000
// });
