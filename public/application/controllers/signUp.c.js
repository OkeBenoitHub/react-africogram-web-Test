// sign up process
window.signUpProcess = function signUpProcess() {
  $(".ui.checkbox").checkbox();
  $(".dropdown").dropdown();
  /* if user press enter instead of clicking sign up button to sign up */
  $("#signUpBox input").keyup(function(e) {
      if (e.keyCode == 13) {
          $("#signUpButton").trigger("click");
      }
  });
  /*
  window.h.listen(({ location, action }) => {
      alert(location.pathname + location.state);
  });*/
  $("#signUpButton").click(function(e) {
      e.preventDefault();
      //window.h.push("about/privacy");
      
      var firstName = $("#signUpBox .firstName").val().trim();
      var lastName = $("#signUpBox .lastName").val().trim();
      var email = $("#signUpBox .email").val().trim();
      var password = $("#signUpBox .password").val().trim();
      var birthMonth = $("#signUpBox .birthMonth").val().trim();
      var birthDay = $("#signUpBox .birthDay").val().trim();
      var birthYear = $("#signUpBox .birthYear").val().trim();
      var gender = $('#signUpBox').find('[name="gender"]:checked').val();
      var captchaWord = $("#captcha").val().trim();
      var agreeTerms = $("#agreeTerms").is(":checked");
      $("#signUpBox").removeClass("error");
      $("#signUpBox .field,.dropdown").removeClass("error");
      /* check for fields */
      /* if first name is empty */
      if(firstName == "") {
          $("#signUpBox").addClass("error");
          $("#signUpBox").find(".firstName").parent(".field").addClass("error");
          $("#signUpBox").find(".firstName").trigger("focus");
          $("#signUpBox #errorMessage p").text("Please enter your first name.");
          return false;
      }
      /* if first name does not contain only letters */
      if (!allLetter(firstName)) {
          $("#signUpBox").addClass("error");
          $("#signUpBox").find(".firstName").parent(".field").addClass("error");
          $("#signUpBox").find(".firstName").trigger("focus");
          $("#signUpBox #errorMessage p").text("Please enter a real name.");
          return false;
      }
      firstName = capital_letter(firstName);
      /* if last name is empty */
      if(lastName == "") {
          $("#signUpBox").addClass("error");
          $("#signUpBox").find(".lastName").parent(".field").addClass("error");
          $("#signUpBox").find(".lastName").trigger("focus");
          $("#signUpBox #errorMessage p").text("Please enter your last name.");
          return false;
      }
      /* if last name does not contain only letters */
      if (!allLetter(lastName)) {
          $("#signUpBox").addClass("error");
          $("#signUpBox").find(".lastName").parent(".field").addClass("error");
          $("#signUpBox").find(".lastName").trigger("focus");
          $("#signUpBox #errorMessage p").text("Please enter a real name.");
          return false;
      }
      lastName = capital_letter(lastName);
      /* check for email */
      /* if email is empty */
      if(email == "") {
          $("#signUpBox").addClass("error");
          $("#signUpBox").find(".email").parent(".field").addClass("error");
          $("#signUpBox").find(".email").trigger("focus");
          $("#signUpBox #errorMessage p").text("Please enter your email.");
          return false;
      }
      /* check for valid email format */
      if (!validateEmail(email)) {
          $("#signUpBox").addClass("error");
          $("#signUpBox").find(".email").parent(".field").addClass("error");
          $("#signUpBox").find(".email").trigger("focus");
          $("#signUpBox #errorMessage p").text("Enter a valid email address.");
          return false;
      }
      /* check for password */
      /* if password is empty */
      if(password == "") {
          $("#signUpBox").addClass("error");
          $("#signUpBox").find(".password").parent(".field").addClass("error");
          $("#signUpBox").find(".password").trigger("focus");
          $("#signUpBox #errorMessage p").text("Enter your password.");
          return false;
      }
      /* check for password length */
      if(password.length < 6) {
          $("#signUpBox").addClass("error");
          $("#signUpBox").find(".password").parent(".field").addClass("error");
          $("#signUpBox").find(".password").trigger("focus");
          $("#signUpBox #errorMessage p").text("Enter at least 6 characters");
          return false;
      }
      /* check for full birthday :: if empty or not number */
      if(birthMonth == "" || birthDay == "" || birthYear == "" || isNaN(birthMonth) || isNaN(birthDay) || isNaN(birthYear)) {
          $("#signUpBox").addClass("error");
          if(birthMonth == "" || isNaN(birthMonth)){
              $("#signUpBox").find(".birthMonth").parent(".field").addClass("error");
              $("#signUpBox").find(".birthMonth").trigger("focus");
          } else if(birthDay == "" || isNaN(birthDay)) {
              $("#signUpBox").find(".birthDay").parent(".field").addClass("error");
              $("#signUpBox").find(".birthDay").trigger("focus");
          } else if(birthYear == "" || isNaN(birthYear)) {
              $("#signUpBox").find(".birthYear").parent(".field").addClass("error");
              $("#signUpBox").find(".birthYear").trigger("focus");
          }
          $("#signUpBox #errorMessage p").text("Enter a number");
          return false;
      }
      /* check for valid birthday and birthmonth */
      birthMonth = parseInt(birthMonth, 10);
      birthDay = parseInt(birthDay,10);
      if((birthMonth < 1 || birthMonth > 12) || (birthDay < 1 || birthDay > 31)) {
          $("#signUpBox").addClass("error");
          if(birthMonth < 1 || birthMonth > 12){
              $("#signUpBox").find(".birthMonth").parent(".field").addClass("error");
              $("#signUpBox").find(".birthMonth").trigger("focus");
              $("#signUpBox #errorMessage p").text("Enter a valid month");
          } else if(birthDay < 1 || birthDay > 31) {
              $("#signUpBox").find(".birthDay").parent(".field").addClass("error");
              $("#signUpBox").find(".birthDay").trigger("focus");
              $("#signUpBox #errorMessage p").text("Enter a valid day");
          }
          return false;
      }
      /* check for valid birth year */
      birthYear = parseInt(birthYear);
      var userAge = new Date().getFullYear() - birthYear;
      if(userAge < 13 || userAge > 100) {
         $("#signUpBox").addClass("error");
         $("#signUpBox").find(".birthYear").parent(".field").addClass("error");
         $("#signUpBox").find(".birthYear").trigger("focus");
         if(userAge < 13 && userAge > 1) {
            $("#signUpBox #errorMessage p").text("You must be at least 13");
         } else {
            $("#signUpBox #errorMessage p").text("Enter a valid year");
         }
         return false;
      }
      /* check for gender */
      if(gender === undefined) {
          $("#signUpBox").addClass("error");
          $("#signUpBox #errorMessage p").text("Your gender?");
          return false;
      }
      /* check for captcha words */
      if (captchaWord == "" || captchaWord != "africa connect") {
          $("#signUpBox").addClass("error");
          $("#signUpBox").find(".captcha").parent(".field").addClass("error");
          $("#signUpBox").find(".captcha").trigger("focus");
          if(captchaWord == "") {
              $("#signUpBox #errorMessage p").text("Enter the 2 words from the picture above!");
          } else {
              $("#signUpBox #errorMessage p").text("Incorrect words!");
          }
          return false;
      }
      /* Make sure agree terms and condition is checked */
      if(!agreeTerms) {
          $("#signUpBox").addClass("error");
          $("#signUpBox #errorMessage p").text("You must agree to terms and service");
          return false;
      }
      /* try to sign up new user */
      $("#signUpBox").addClass("loading");
      signUpNewUserForAfricogram(email,password,firstName,lastName,birthMonth,birthDay,birthYear,gender);
      sendWelcomeEmail(email,firstName);
});
};