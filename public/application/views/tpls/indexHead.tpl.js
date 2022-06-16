import React from "react";
import "../css/indexHead.css";

export default function IndexHead() {
  return (
    <div id="indexHeader">
      <div id="topHead" />
      <div class="responsiveBox">
        <div class="w3-container">
          <button
            class="circular ui green large button logoSite"
            id="logoSite"
            title="Africogram"
          >
            Africogram
          </button>
          <button
            class="mini ui button circular basic inverted"
            id="androidApp" style={{display: "none"}}>
            <i class="icon android" />Android
          </button>
          <button class="circular ui button" id="signInButton" style={{display: "none"}}>
            <span>Sign In</span>
          </button>
          <button class="circular ui button signOutButton" id="signOutButton" style={{display: "none"}}>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
