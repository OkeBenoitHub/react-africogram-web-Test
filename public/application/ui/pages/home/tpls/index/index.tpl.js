import React from "react";
import SignUpBox from "ui/pagelets/signup/signup.tpl.js";
import "css/index.tpl.css";
import FooterBox from "./indexFoot.tpl.js";

export default function IndexTemplate() {
  return (
    <div>
      <IndexMain />
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

function IndexMain() {
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
              <FooterBox />
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
