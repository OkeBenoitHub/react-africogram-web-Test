import React from "react";
function GetStartedMain() {
    const mainContentStyle = {
        backgroundColor: "#fff",
        width: "100%",
        height: "auto",
        marginTop: "15px"
    }
    return (
    <div class="getStartedP">
      <div>
        <div class="responsiveBox">
          <div class="w3-row">
            <div class="w3-container">
              <div id="getStartedContent" style={mainContentStyle}>
                <div class="ui basic segment" style={{ marginBottom: "15px" }}>
                     <h4 class="ui block header" id="signUpHeadline">
                        Welcome to Africogram
                     </h4>
                     <h4 class="ui horizontal divider header">
                          <span style={{color: "grey"}}>Get started</span>
                     </h4>
                    <div class="ui centered cards">
                        <div class="card">
                            <div class="image">
                                <img src="https://res.cloudinary.com/africogram/image/upload/v1620170805/images/profile_pic_default_u046d1.jpg" id="profilePic" />
                            </div>
                            <div class="content">
                                <a class="header"><span style={{color: "#777", fontSize: "16px"}} id="firstNameH"></span></a>
                            </div>
                            <div class="ui bottom attached button addProfilePhoto">
                                <i class="add icon"></i>
                                Add Profile Photo
                            </div>
                            <input type="file" class="inputfile" accept="image/*" id="embedpollfileinput" />
                        </div>
                        <div class="card">
                            <div class="ui form content" style={{width: "100%"}}>
                                <div class="field">
                                  <label>Which country were you born in?</label>
                                  <select class="ui search dropdown" onChange={window.handleCountryBornChange}>
                                  { window.africanCountries.map(africaCountry => (
                                      <option value={africaCountry.code}>{africaCountry.name}</option>
                                  ))}
                                  </select>
                                  <input type="hidden" id="countryBornCode" value="" />
                                </div>
                                <div class="field">
                                  <label>Which country do you live in?</label>
                                  <select class="ui search dropdown" onChange={window.handleCountryLiveChange}>
                                  { window.allCountries.map(country => (
                                      <option value={country.code}>{country.name}</option>
                                  ))}
                                  </select>
                                  <input type="hidden" id="countryLiveCode" value="" />
                                </div>
                            </div>
                            <div class="ui bottom green attached button goToHomePage">
                                <i class="arrow right icon"></i>&nbsp;
                                Go to Home
                            </div>
                        </div>
                    </div>
                    <div class="ui divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}