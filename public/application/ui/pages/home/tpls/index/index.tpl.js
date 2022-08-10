import React from "react";
export default function IndexMain() {
  return (
    <div class="indexP">
      <div>
        <div class="responsiveBox">
          <div class="w3-row">
            <div class="w3-half w3-container">
              <div id="leftBox">
                <div style={{ width: "100%", background: "#fff" }}>
                  <center>
                    <img
                      class="africaMap"
                      src="https://res.cloudinary.com/africogram/image/upload/v1616996671/images/africa_map_cvysp3.jpg"
                    />
                  </center>
                </div>
                <AppHeadline1 />
                <AppHeadline2 />
                <AppHeadline3 />
              </div>
            </div>
            <div class="w3-half w3-container">
              <SignUpBox />
              <footer class="w3-container w3-center w3-opacity" style={{marginTop: "20px",marginBottom: "20px"}}>
                <div class="w3-large">
                  <i class="fa fa-facebook-official w3-hover-opacity" />&nbsp;
                  <i class="fa fa-twitter w3-hover-opacity" />&nbsp;
                  <i class="fa fa-linkedin w3-hover-opacity" /><br/>
                  <small>Africogram&copy;{window.currentYear}</small>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function AppHeadline1() {
  return (
    <h4 class="ui header block headline" style={{ marginTop: "13px" }}>
      <table>
        <tr>
          <td>
            <img
              src="https://res.cloudinary.com/africogram/image/upload/v1616975340/images/people_v65d0j.png"
              style={{ width: "48px" }}
            />
          </td>
          <td style={{ padding: "10px" }}>
            <div class="content">
              <span className="subheadline">
                Connect with africans nearby and the diaspora around the world!
              </span>
            </div>
          </td>
        </tr>
      </table>
    </h4>
  );
}

function AppHeadline2() {
  return (
    <h4 class="ui header block headline">
      <table>
        <tr>
          <td>
            <img
              src="https://res.cloudinary.com/africogram/image/upload/v1618054801/images/ic_chat_rj4bqt.png"
              style={{ width: "48px" }}
            />
          </td>
          <td style={{ padding: "10px" }}>
            <div class="content">
              <span className="subheadline">
                Keep in touch via direct message, voice call and video chat!
              </span>
            </div>
          </td>
        </tr>
      </table>
    </h4>
  );
}

function AppHeadline3() {
  return (
    <h4 class="ui header block headline">
      <table>
        <tr>
          <td>
            <img
              src="https://res.cloudinary.com/africogram/image/upload/v1618054801/images/ic_call_ap12g1.png"
              style={{ width: "48px" }}
            />
          </td>
          <td style={{ padding: "10px" }}>
            <div class="content">
              <span className="subheadline">
                Share your status updates with friends and family from Africa!
              </span>
            </div>
          </td>
        </tr>
      </table>
    </h4>
  );
}

function SignUpBox() {
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
