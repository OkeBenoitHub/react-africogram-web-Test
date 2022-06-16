import React from "react";
import FooterBox from "./indexFoot.tpl.js";

export default function _404Template() {
  return (
    <div>
      <_404Main />
    </div>
  );
}

function _404Main() {
  const mainContentStyle = {
      backgroundColor: "#fff",
      width: "100%",
      height: "auto",
      marginTop: "15px"
  };
  return (
    <div class="_404P">
      <div>
        <div class="responsiveBox">
          <div class="w3-row">
            <div class="w3-container">
              <div id="termsContent" style={mainContentStyle}>
                <div class="ui basic segment" style={{ marginBottom: "15px" }}>
                  <div>
                    <center>
                      <h2 style={{ color: "#4caf50" }}>This page isn't available</h2>
                    </center>
                    <div style={{ margin: "30px", color: "grey" }} id="_404Tpl">
                      <center>
                      <h3>
                        The link you followed may be broken,<br/>or the page may have been removed.
                      </h3>
                      <img  
                      src="https://res.cloudinary.com/africogram/image/upload/v1618438730/images/not_found_yezkms.png" style={{width: "128px"}} />
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <FooterBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
