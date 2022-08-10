// send welcome email
window.sendWelcomeEmail = function(email,firstName) {
  var toEmailsArray = [email];
  var headLineTitle = "Hi" + " " + firstName;
  var htmlTemp = "Africogram helps you connect with africans nearby and the diaspora around the world!<br/>" + "Feel free to invite your friends to join to make it a bigger place.";
  var subject = "Get started";
  sendHtmlEmail(toEmailsArray,headLineTitle,htmlTemp,subject);
}
window.sendVerificationCode = function(email) {
  // generate a random number for verification code
  window.verificationCode = getRandomIntInclusive(10000, 30000);
  var toEmailsArray = [email];
  var headLineTitle = "Verification code";
  var htmlTemp = "Your verification code is " + verificationCode + ".<br/>" + "If you didn't request this code, you can simply ignore this email.";
  var subject = "Verification code";
  if(!$("body").hasClass("verificationCodeProcess")) {
      $("body").addClass("verificationCodeProcess");
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
// send reset code :: use later??
window.sendResetCode = function(email) {
  // generate a random number for reset code
  window.resetCode = getRandomIntInclusive(10000, 30000);
  var toEmailsArray = [email];
  var headLineTitle = "Reset code";
  var htmlTemp = "Your reset code is " + resetCode + ".<br/>" + "If you didn't request this code, you can simply ignore this email.";
  var subject = "Reset code";
  if(!$("body").hasClass("resetCodeProcess")) {
      $("body").addClass("resetCodeProcess");
      sendHtmlEmail(toEmailsArray,headLineTitle,htmlTemp,subject).then(docRef => {
          // console.log("Document written with ID: ", docRef.id);
          showDialogBox("resetCodeModal",false,false,false);
      })
      .catch(error => {
          console.error("Error adding document: ", error);
      });
  } else {
      // if verification code was sent already :: just show the dialog box
      showDialogBox("resetCodeModal",false,false,false);
  }
};