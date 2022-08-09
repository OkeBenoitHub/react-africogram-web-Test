import React from "react";
import "../css/indexFoot.css";

export default function FooterBox() {
  return (
    <div style={{width: "100%"}}>
      <div class="ui text menu" id="footerBox">
        <div class="item" style={{ padding: "0px", marginLeft: "9px" }}>
          <div class="ui button footLink">
            <a href="about/terms" className="terms">
              Terms
            </a>
          </div>
        </div>
        <div class="item" style={{ padding: "0px" }}>
          <div class="ui button footLink">
            <a href="/about/privacy" className="privacy">
              Privacy
            </a>
          </div>
        </div>
        <div class="item right" style={{ padding: "0px", marginRight: "13px" }}>
          <div class="ui green buttons">
            <div class="ui floating dropdown icon button">
              <i class="dropdown icon" />
              <div class="menu">
                <div class="item">
                      English
                </div>
                <div class="item">
                      Francais
                </div>
                <div class="item">
                      Espagnol
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
