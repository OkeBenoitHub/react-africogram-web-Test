import React from "react";

export default function SignUpBox() {
  return (
    <div id="signUpForm">
      <div>
        <h4 class="ui block header" id="signUpHeadline">
            The exclusive african network
        </h4>
        <form class="ui form" id="signUpBox">
          <div class="two fields">
            <div class="field">
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                className="firstName"
              />
            </div>
            <div class="field">
              <input
                type="text"
                name="last-name"
                placeholder="Last Name"
                className="lastName"
              />
            </div>
          </div>
          <div class="field">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="email"
            />
          </div>
          <div class="field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="password"
            />
          </div>
          <div class="field">
            <label style={{ color: "#777" }}>Birthday - (Eg: 01/27/1990)</label>
            <div class="three fields">
              <div class="field">
                <input
                  type="text"
                  name="month"
                  placeholder="Month"
                  className="birthMonth"
                />
              </div>
              <div class="field">
                <input
                  type="text"
                  name="day"
                  placeholder="Day"
                  className="birthDay"
                />
              </div>
              <div class="field">
                <input
                  type="text"
                  name="year"
                  placeholder="Year"
                  className="birthYear"
                />
              </div>
            </div>
          </div>
          <div class="inline fields">
            <label style={{ color: "#777" }}>Gender</label>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="gender"
                  tabIndex="0"
                  class="hidden"
                  value="F"
                />
                <label style={{ color: "#777" }}>Female</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="gender"
                  tabIndex="0"
                  class="hidden"
                  value="M"
                />
                <label style={{ color: "#777" }}>Male</label>
              </div>
            </div>
          </div>
          <div class="field">
            <center>
              <img
                className="captcha"
                src="https://res.cloudinary.com/africogram/image/upload/v1617794880/images/captcha2_ki8hak.jpg"
              />
            </center>
            <input
              type="text"
              style={{ marginTop: "10px" }}
              id="captcha"
              name="email"
              placeholder="Enter the words above"
            />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input
                type="checkbox"
                tabIndex="0"
                id="agreeTerms"
                class="hidden"
              />
              <label style={{ color: "#777" }}>
                I agree to the Terms and Conditions
              </label>
            </div>
          </div>
          <div>
            <button class="ui circular button green" type="button" id="signUpButton">
              Sign Up
            </button>
            <div
              class="ui error message"
              id="errorMessage"
              style={{ float: "right", marginTop: "2px", fontSize: "12px"}}
            >
              <p />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
