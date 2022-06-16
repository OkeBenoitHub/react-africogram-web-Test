import React from 'react';
export default function ReportIssueModal() {
  return (
    <div>
      <div class="reportIssueModal tiny ui modal">
        <div class="header" style={{ color: '#aeaeae', fontSize: '17px' }}>
          Something went wrong
        </div>
        <div class="content" style={{ width: '100%' }}>
          <div class="ui form">
            <div class="field">
              <label style={{ color: 'grey' }}>Choose an area</label>
              <div class="ui selection dropdown">
                <input
                  type="hidden"
                  name="reportIssueArea"
                  id="reportIssueArea"
                />
                <i class="dropdown icon"></i>
                <div class="default text">Choose an area</div>
                <div class="menu">
                  <div class="item" data-value="News Feed">
                    News Feed
                  </div>
                  <div class="item" data-value="Weather">
                    Weather
                  </div>
                  <div class="item" data-value="Find Friends">
                    Find Friends
                  </div>
                  <div class="item" data-value="Groups">
                    Groups
                  </div>
                  <div class="item" data-value="Messages">
                    Messages
                  </div>
                  <div class="item" data-value="Photos/Albums">
                    Photos/Albums
                  </div>
                  <div class="item" data-value="Birthdays">
                    Birthdays
                  </div>
                  <div class="item" data-value="Play Music">
                    Play Music
                  </div>
                  <div class="item" data-value="Movie Library">
                    Movie Library
                  </div>
                  <div class="item" data-value="Notifications">
                    Notifications
                  </div>
                  <div class="item" data-value="Profile">
                    Profile
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label style={{ color: 'grey' }}>
                Tell us more about the issue
              </label>
              <textarea rows="2" id="reportIssueMessage"></textarea>
            </div>
          </div>
        </div>
        <div class="actions">
          <div class="ui basic circular button cancel">Cancel</div>
          <div class="ui button circular green" id="sendReport">
            Submit
          </div>
        </div>
      </div>
      <div class="reportIssueSuccessModal tiny ui modal">
        <div class="header" style={{ color: "#aeaeae", fontSize: "17px" }}>
            Thank you for your report
        </div>
        <div class="content" style={{ width: "100%" }}>
             <div
                class="ui success message successMessage"
                style={{ marginBottom: "13px" }}>
                <p>Sent successfully.</p>
             </div>
        </div>
        <div class="actions">
          <div class="ui basic circular button cancel">Close</div>
        </div>
      </div>
    </div>
  );
}
