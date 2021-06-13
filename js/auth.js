
$(document).ready(function() {

  if($(".modal")){
    $(".login-card").css("opacity","1");
    $(".modal").css("display","none");
  }

  if($(".reg-error-modal")){
    $(".register-card").css("opacity","1");
    $(".reg-error-modal").css("display","none");
  }

    // the handler for the click event of a submit button
    var ErrArr = [];
    $("#submit").click(

        function(event) {
            event.preventDefault();
            var isValid = true;

            // validate the email entry with a regular expression

            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

            var email = $("#email").val().trim();

            if (email == "") {
                $("#email_er").text("This field is required.");

                isValid = false;

            } else if ( !emailPattern.test(email) ) {
                $("#email_er").text("Must be a valid email address.");

                isValid = false;

            } else {
                $("#email").next().text("");

            }

            $("#email").val(email);

            // validate the second email entry

            var email2 = $("#email1").val().trim();

            if (email2 == "") {
                $("#email1_er").text("This field is required.");

                isValid = false;

            } else if (email !== email2 ) {
                $("#email1_er").text("Email 2 Must equal first email entry.");

                isValid = false;

            } else {

                $("#email1").next().text("");

            }

            $("#email2").val(email2);

            // validate the first name entry

            if ($("#first_name").val() == "") {

                $("#first_name_er").text("This field is required.");

                isValid = false;

            } else {

                $("#first_name").next().text("");

            }

            // validate the last name entry

            var lastName = $("#last_name").val().trim();

            if (lastName == "") {

                  $("#last_name_er").text("This field is required.");

                isValid = false;

            } else {

                $("#last_name").next().text("");

            }

            $("#last_name").val(lastName);


            var password = $('#password1').val();

            var confirm_password = $('#confirm_password').val();

            if(password.length < 6)
            {
                  $("#password_er").text("Your Password must be greater than 5");
                  isValid = false;
            }
            else{
              $("#password1").next().text("");
            }

            if(password == "")
            {
                $("#password_er").text("Your Password cannot be empty");
                isValid = false;
            }
            else{
              $("#password1").next().text("");
            }

            if(confirm_password == "")
            {
                $("#confirm_password_er").text("Your Password cannot be empty");
                isValid = false;
            }
            else if(password != confirm_password)
            {
                $("#confirm_password_er").text("Your passwords do not match");
                isValid = false;
            }
            else{
                $("#confirm_password").next().text("");
            }


            if(!isValid) {

              $(".register-card").css("opacity","0.5");
              $(".reg-error-dialog").css("display","block");


                return false;
              }
              else{

                $(location).attr('href','login.html');

              }

        } // end function

    );  // end submit

    $("#error-dialog .close").click(function(){
      $(".login-card").css("opacity","1");
      $("#error-dialog").css("display","none");
    });

    $(".reg-error-dialog .close").click(function(){
      $(".register-card").css("opacity","1");
      $(".reg-error-dialog").css("display","none");
    });



    //Login Validation

    $('#loginbtn').click(
        function(event){
            event.preventDefault();
            var emailRegex = /\b[A-Za-z0-9]+[.]{0,1}[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}\b/;
            var email = $("#email").val();
            var password = $("#password").val();

            if(!emailRegex.test(email) || password.length<6)
            {
                $(".login-card").css("opacity","0.5");
                $("#error-dialog").css("display","block");
            }
            else
            {
                sessionStorage.setItem("email", email);
                $(location).attr('href','index.html');
            }
         }
    );

}); // end ready

//redirect user to login page if they are not logged in
function isLoggedIn()
{

  if(sessionStorage.getItem("email")==null)
  {
    window.location.href="login.html";
  }
}
