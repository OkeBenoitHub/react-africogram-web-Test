import React from "react";
import FeedbackModal from "ui/pagelets/feedback/feedback.tpl.js";
import ReportIssueModal from "ui/pagelets/reports/reportIssue.tpl.js";
import "css/homeHead.css";

export default function HomeHead() {
  return(
    <div id="homeHeader">        
        <div class="w3-top">
            <div class="w3-bar w3-left-align w3-large" style={{backgroundColor: "#b6c2b7"}}>
                  <a class="w3-bar-item w3-button w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" id="openNav">
                      <i class="fa fa-bars"></i>
                  </a>
                  <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large w3-green w3-hover-green" id="appLogo"><i class="fa fa-home w3-margin-right"></i>Africogram</a>
                  <div id="mainNav">
                  <a href="javascript:void(0);" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Friends"><i class="fa fa-user" style={{color:"#808e95"}}></i></a>
                  <a href="javascript:void(0);" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i class="fa fa-envelope" style={{color:"#808e95"}}></i></a>
                  <div class="w3-dropdown-hover w3-hide-small">
                      <button class="w3-button w3-padding-large w3-hover-white" title="Notifications">
                          <i class="fa fa-bell" style={{color:"#808e95"}}></i>
                          <span class="w3-badge w3-right w3-medium w3-green">3</span>
                      </button>     
                      <div class="w3-dropdown-content w3-card-4 w3-bar-block" style={{width:"300px"}}>
                           Notificati
                      </div>
                  </div>
                  <div class="w3-dropdown-hover w3-hide-small">
                      <button class="w3-button w3-padding-large w3-hover-white" title="Notifications" id="notif">
                          <i class="fa fa-chevron-down" style={{color:"#808e95"}}></i>
                      </button>     
                      <div class="w3-dropdown-content w3-card-4 w3-bar-block" style={{width:"300px"}}>
                          <a href="javascript:void(0);" class="w3-bar-item w3-button feedback">Feedback</a>
                          <a href="javascript:void(0);" class="w3-bar-item w3-button reportIssue">Report a Problem</a>
                          <a href="javascript:void(0);" class="w3-bar-item w3-button inviteFriends">Invite friends</a>
                          <a href="javascript:void(0);" class="w3-bar-item w3-button settings">Settings</a>
                          <a href="javascript:void(0);" class="w3-bar-item w3-button signOut">Sign Out</a>
                      </div>
                  </div>
                  <div class="item" style={{float: "right",marginTop: "6px",marginRight: "16px"}}>
                      <div class="ui mini icon input" style={{width: "300px",height: "32px"}}>
                          <input type="text" placeholder="Search..." />
                          <i class="search link icon"></i>
                      </div>
                  </div>
                  </div>
            </div>
            <div id="smallNav" class="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
              <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large">Friend Requests</a>
              <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large">Messages (1)</a>
              <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large">Notifications (3)</a>
              <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large">Search</a>
              <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large feedback">Feedback</a>
              <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large reportIssue">Report a Problem</a>
              <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large inviteFriends">Invite Friends</a>
              <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large settings">Settings</a>
              <a href="javascript:void(0);" class="w3-bar-item w3-button w3-padding-large signOut">Sign Out</a>
            </div>
        </div>
        <FeedbackModal />
        <ReportIssueModal />
    </div>
  )
}