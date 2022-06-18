import React from "react";
import "../css/home.tpl.css";

export default function HomeTemplate() {
  return (
    <div>
        <div class="w3-container w3-content" style={{maxWidth:"1400px", marginTop: "60px"}}>
            <div class="w3-row">
                <LeftContainer />
                <MiddleContainer/>
                <RightContainer />
            </div>
        </div>
        <br/>

        <footer class="w3-container w3-theme-d3 w3-padding-16 homeFooter" style={{padding: "5px"}}>
            <h5>
            <center>
                <a href="about/terms">Terms</a>&nbsp;&nbsp;
                <a href="about/privacy">Privacy</a>
            </center>
            </h5>
        </footer>

        <footer class="w3-container w3-theme-d5 text-uppercase" style={{padding: "10px"}}>
            <center><small class="copyright">Africogram&copy;{window.currentYear}</small></center>
        </footer>
    </div>
  );
}

function LeftContainer() {
  return(
     <div class="sidenav">
        <div class="w3-col m3 ui sticky" id="LeftContainer">
            <div class="w3-card w3-round">
                <div class="ui card" style={{width: "100%"}}>         
                <div class="content">
                    <div class="right floated mini ui image" id="profilePicSmall"></div>
                    <div class="header username" id="username"></div>
                    <div class="meta countryBornInfo">Born in Gabon</div>
                    <div class="description countryLivesInfo">Lives in USA</div> 
                </div>
                <div class="extra content">
                    <div class="ui two buttons">
                        <div class="ui basic grey button">Profile</div>
                        <div class="ui basic grey button">Friends (20)</div>
                    </div>
                </div>
                </div>
            </div>
            <br/>
            <div class="w3-card w3-round">
            <div class="ui card" style={{width: "100%"}} id="LeftContainerCard"> 
                <div class="ui vertical left menu">
                <a class="active green item" id="news_feed">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1624636388/images/news_feed_64_zwptih.png" />
                    <span class="menuText">News Feed</span>
                </a>
                <a class="item" id="weather">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1624636732/images/weather_64_zhbp3q.png"   />
                    <span class="menuText">Weather</span>
                    <div class="ui label">51</div>
                </a>
                <a class="item" id="find_friends">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1624636978/images/find_64_ekucdn.png"  />
                    <span class="menuText">Find Friends</span>
                    <div class="ui label">51</div>
                </a>
                <a class="item" id="groups">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1624638942/images/group_64_rq3h6j.png" />
                    <span class="menuText">Groupers</span>
                    <div class="ui label">51</div>
                </a>
                <a class="item" id="messages">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1617787139/images/africochat_512_vlesoj.png" />
                    <span class="menuText">Messages</span>
                    <div class="ui green left pointing label">1</div>
                </a>
                <a class="item" id="photos-albums">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1624639074/images/gallery_64_zrygpx.png"  />
                    <span class="menuText">Photos/Albums</span>
                </a>
                <a class="item" id="birthdays">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1624639179/images/birthday_64_qilekq.png" />
                    <span class="menuText">Birthdays</span>
                </a>
                <a class="item" id="play_music">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1624639426/images/music_64_wxmf6m.png" />
                    <span class="menuText">Play Music</span>
                </a>
                <a class="item" id="movie_library">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1624639723/images/movie_64_b7ajgq.png" />
                    <span class="menuText">Movie Library</span>
                </a>
                <a class="item" id="file_storage">
                    <img src="https://res.cloudinary.com/africogram/image/upload/v1643858183/images/1343439_file_folder_office_paper_place_icon_xwie68.png" />
                    <span class="menuText">File Storage</span>
                </a>
                <a class="item" style={{display: "none"}} id="marketplace">
                    Marketplace
                </a>
                <a class="item" style={{display: "none"}} id="jobs">
                    Jobs
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
   )
}

function MiddleContainer() {
    return(
        <div class="w3-col m7" id="MiddleContainer">
            <div data-box="weather" style={{display: "none"}} class="boxTemp"><Weather /></div>
            <div data-box="file_storage" style={{display: "none"}} class="boxTemp">file storage</div>
            <div data-box="news_feed" style={{display: "none"}} class="boxTemp">
            <div class="w3-row-padding">
              <div class="w3-col m12">
                  <div class="w3-card w3-round w3-white" style={{paddingBottom: "13px"}}>
                      <div class="w3-container w3-padding">
                          <h6 class="w3-opacity">What's on your mind?</h6>
                          <p contenteditable="true" class="w3-border w3-padding" id="feedPostEditable"></p>
                          <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i> Post</button>
                      </div>
                  </div>
              </div>
          </div>

          <div class="w3-container w3-card w3-white w3-round w3-margin" style={{position: "relative",top: "2px"}}><br/>
              <img src="https://res.cloudinary.com/africogram/image/upload/v1620170805/images/profile_pic_default_u046d1.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:"60px"}}/>
              <span class="w3-right w3-opacity">1 min</span>
              <h4>John Doe</h4><br/>
               <hr class="w3-clear"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div class="w3-row-padding" style={{margin:"0 -16px"}}>
                  <div class="w3-half">
                      <img src="https://res.cloudinary.com/africogram/image/upload/v1620170805/images/profile_pic_default_u046d1.jpg" style={{width:"100%"}} alt="Northern Lights" class="w3-margin-bottom"/>
                  </div>
                  <div class="w3-half">
                      <img src="https://res.cloudinary.com/africogram/image/upload/v1620170805/images/profile_pic_default_u046d1.jpg" style={{width:"100%"}} alt="Nature" class="w3-margin-bottom"/>
                  </div>
              </div>
              <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
              <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
          </div>

          <div class="w3-container w3-card w3-white w3-round w3-margin" style={{position: "relative",top: "2px"}}><br />
              <img src="https://res.cloudinary.com/africogram/image/upload/v1620170805/images/profile_pic_default_u046d1.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:"60px"}}/>
              <span class="w3-right w3-opacity">16 min</span>
              <h4>Jane Doe</h4><br/>
              <hr class="w3-clear"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
              <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
          </div>

          <div class="w3-container w3-card w3-white w3-round w3-margin" style={{position: "relative",top: "2px"}}><br/>
              <img src="https://res.cloudinary.com/africogram/image/upload/v1620170805/images/profile_pic_default_u046d1.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:"60px"}}/>
              <span class="w3-right w3-opacity">32 min</span>
              <h4>Angie Jane</h4><br/>
              <hr class="w3-clear"/>
              <p>Have you seen this?</p>
              <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752" style={{width:"100%"}} class="w3-margin-bottom"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button> 
              <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button> 
          </div>
          </div>
        </div>
    )
}

function Weather() {
    return (
        <div>
            weather data
        </div>
    )
}

function RightContainer() {
    return(
     <div class="w3-col m2" id="RightContainer">
          
          <div class="w3-card w3-round w3-white w3-center">
              <div class="w3-container">
                  <p>Upcoming Events:</p>
                  <img src="https://res.cloudinary.com/africogram/image/upload/v1620170805/images/profile_pic_default_u046d1.jpg" alt="Forest" style={{width:"100%"}} />
                  <p><strong>Holiday</strong></p>
                  <p>Friday 15:00</p>
                  <p><button class="w3-button w3-block w3-theme-l4">Info</button></p>
                  <br/>
              </div>
          </div>

          <br/>
          
          <div class="w3-card w3-round w3-white w3-center">
              <div class="w3-container">
                  <p>Friend Request</p>
                  <img src="https://res.cloudinary.com/africogram/image/upload/v1620170805/images/profile_pic_default_u046d1.jpg" alt="Avatar" style={{width:"50%"}}/><br/>
                  <span>Jane Doe</span>
                  <div class="w3-row w3-opacity">
                      <div class="w3-half">
                          <button class="w3-button w3-block w3-green w3-section" title="Accept"><i class="fa fa-check"></i></button>
                      </div>
                      <div class="w3-half">
                          <button class="w3-button w3-block w3-red w3-section" title="Decline"><i class="fa fa-remove"></i></button>
                      </div>
                  </div>
              </div>
          </div>

          <br/>

          <div class="w3-card w3-round w3-white w3-padding-16 w3-center">
              <p>ADS</p>
          </div>

          <br />
      
          <div class="w3-card w3-round w3-white w3-padding-32 w3-center">
              <p><i class="fa fa-bug w3-xxlarge"></i></p>
          </div>

     </div>
   )
}