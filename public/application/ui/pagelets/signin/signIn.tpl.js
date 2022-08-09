import React from "react";

export default function SignInModalBox() {
  return (
    <div>
      <div class="signInModal tiny ui modal">
        <div class="header" style={{ color: "#aeaeae", fontSize: "17px" }}>
          Sign in to your account
        </div>
        <div class="content" style={{ width: "100%" }}>
          <SignInFormLayout />
        </div>
        <div class="actions">
          <div class="ui basic circular button cancel">Cancel</div>
          <div class="ui button circular green" id="signInButton2">
            Sign In
          </div>
        </div>
      </div>
      <div class="recoverPasswordModal mini ui modal">
        <div class="header" style={{ color: "#aeaeae", fontSize: "17px" }}>
          Reset your password
        </div>
        <div class="content" style={{ width: "100%" }}>
          <ResetPasswordFormLayout />
        </div>
        <div class="actions">
          <div class="ui basic circular button cancel">Cancel</div>
          <div class="ui button circular green" id="resetPasswordButton">
            Reset
          </div>
        </div>
      </div>
      <div class="notLoggedInModal tiny ui modal">
        <div class="header" style={{ color: "#aeaeae", fontSize: "17px" }}>
             Not signed in
        </div>
        <div class="content" style={{ width: "100%" }}>
            Please sign in again to continue.
        </div>
        <div class="actions">
          <div class="ui basic circular button cancelSignInAgain">Cancel</div>
          <div class="ui button circular green" id="signedInAgain">
               Sign In
          </div>
        </div>
      </div>
    </div>
  );
}

function SignInFormLayout() {
  return (
    <div>
      <form class="ui form" id="signInForm">
        <div class="field">
          <input
            type="text"
            name="email"
            placeholder="Email"
            class="emailLog"
          />
        </div>
        <div class="field" style={{ marginBottom: "8px" }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            class="passwordLog"
          />
        </div>
        <label className="link" id="forgotPass">
          Forgot your password?
        </label>
        <div
          class="ui error message"
          id="errorMessageLog"
          style={{ marginBottom: "13px" }}>
          <p />
        </div>
      </form>
    </div>
  );
}

function ResetPasswordFormLayout() {
  return (
    <div>
      <form class="ui form" id="recoverForm">
        <div class="field">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            class="emailRec"
          />
        </div>
        <div
          class="ui success message successMessage"
          style={{ marginBottom: "13px" }}>
          <p />
        </div>
        <div
          class="ui error message errorMessage"
          style={{ marginBottom: "13px" }}>
          <p />
        </div>
      </form>
    </div>
  );
}
