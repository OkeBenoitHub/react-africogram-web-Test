import React from "react";
// verify account process
window.verifyAccountProcess = function(email,password,firstName,lastName,birthMonth,birthDay,birthYear,gender,verificationCode) {
  $(".verifyAccount").click(function() {
      var inputCode = $(".verifyCode").val().trim();
      if (inputCode == verificationCode) {
          // verification code matches
          $("#verifyAccountBox").removeClass("error").removeClass("success").addClass("loading");
          /* try to sign up new user */
          signUpNewUserForAfricogram(email,password,firstName,lastName,birthMonth,birthDay,birthYear,gender);
      } else {
          // verification code incorrect
          $("#verifyAccountBox").removeClass("success").addClass("error");
      }
  });
  // re-send verification code
  $(".resendCode").click(function() {
      $("#verifyAccountBox").removeClass("error").addClass("success");
      $(".verifyAccountModal.modal").modal("hide");
      $("body").removeClass("verifyCodeProcess");
      sendVerificationCode(email);
  });
};

export default function VerifyAccountModalBox() {
  return (
    <div>
      <div class="verifyAccountModal tiny ui modal">
        <div class="header" style={{ color: "#aeaeae", fontSize: "17px" }}>
            Verify your account
        </div>
        <div class="content" style={{ width: "100%" }}>
            <VerifyAccountLayout />
        </div>
        <div class="actions">
          <div class="ui basic circular button cancel">Cancel</div>
          <div class="ui button verifyAccount circular green">Verify</div>
        </div>
      </div>
    </div>
  );
}

function VerifyAccountLayout() {
  return (
    <div>
      <form class="ui form success" id="verifyAccountBox">
        <div class="field">
          <input
            type="text"
            name="code"
            placeholder="Enter code"
            class="verifyCode"
          />
        </div>
        <label className="link resendCode">Resend code</label>
        <div class="ui error message" id="verifyErrorMessage">
            <p>Incorrect code!</p>
        </div>
        <div class="ui success message">
          <div class="header">Check your email!</div>
          <p>We sent you a 5-digit code to verify your account.</p>
        </div>
      </form>
    </div>
  );
}
