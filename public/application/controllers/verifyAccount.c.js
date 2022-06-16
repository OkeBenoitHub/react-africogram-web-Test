// send verification code
window.sendVerificationCode = function(email) {
  // generate a random number for verification code
  window.verificationCode = getRandomIntInclusive(10000, 30000);
  var toEmailsArray = [email];
  var headLineTitle = "Verify your account";
  var htmlTemp = "Your verification code is " + verificationCode + ".<br/>" + "If you didn't request this code, you can simply ignore this email.";
  var subject = "Verify your account";
  if(!$("body").hasClass("verifyCodeProcess")) {
      $("body").addClass("verifyCodeProcess");
      sendHtmlEmail(toEmailsArray,headLineTitle,htmlTemp,subject).then(docRef => {
          // console.log("Document written with ID: ", docRef.id);
          showDialogBox("verifyAccountModal",false,false,false);
      })
      .catch(error => {
          console.error("Error adding document: ", error);
      });
  } else {
      // if verification code was sent already :: just show the dialog box
      showDialogBox("verifyAccountModal",false,false,false);
  }
};