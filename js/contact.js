$(document).ready(function(){
  var input = $('.validate-input .input');

  $('#sendMail').click(function(){
      var check = true;

      for(var i=0; i<input.length; i++) {
          if(validate(input[i]) == false){
              showValidate(input[i]);
              check=false;
          }
      }

      if(check){
        $(".bg-contact").css("opacity","0.5");
        $("#success-dialog").css('display','block');
      }

  });

  $("#success-dialog .close").click(function(){
    $(".bg-contact").css("opacity","1");
    $("#success-dialog").css("display","none");
    $("#contact-us-form").trigger("reset");
  });


  $('.validate-form .input').each(function(){
      $(this).focus(function(){
         hideValidate(this);
      });
  });

  function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim()
          .match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }
  $("#date").text((new Date).getFullYear());
});
