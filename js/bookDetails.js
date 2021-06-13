$(document).ready(function() {
  var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  var name = decodeURIComponent(url[0].split('=')[1]);
  var $container = $( ".container");
  var checkoutCart = JSON.parse(sessionStorage.getItem("Books"));
  if(checkoutCart != null) {
    var item;
    for( var j = 0; j < checkoutCart.length; ++j ) {
      var cartItem = checkoutCart[j];
      if(cartItem.name == name) {
        item = cartItem;
        break;
      }
    }
    if(item != null) {
      var $form = $(".add-to-cart");
      var $h3name = $container.find( "h3" );
      $form.parent().data("name", item.name);
      $h3name.text(item.name);
      var $productPrice = $container.find(".product-price");
      $form.parent().data("price", item.price);
      $productPrice.text('$' + item.price);
      var $img = $container.find( "img" );
      $form.parent().data("src", item.src);
      $img.attr("src", item.src);
      var $productDesc = $container.find("#book-desc");
      $form.parent().data("desc", item.desc);
      $productDesc.html(item.desc);
    }
    else {
      $container.html( "" );
    }
  }
  else {
    $container.html( "" );
  }
  $("#date").text((new Date).getFullYear());
})
