/**
   * Url processing
   */
var urlPath = window.location.pathname;
switch (urlPath) {
    case "/home":
    case "/index":
    case "/":
    case "/news_feed":
    case "/weather":
    case "/find_friends":
    case "/groups":
    case "/messages":    
    case "/photos-albums":
    case "/birthdays":
    case "/play_music":
    case "/movie_library":
    case "/file_storage":
    case "/marketplace":
    case "/jobs":
        // home page controller
        window.controller = "home.c.js";
        break;
    case "/about/terms":
        // terms of service controller
        window.controller = "terms.c.js";
        break;
    case "/about/privacy":
        // privacy policy controller
        window.controller = "privacy.c.js";
        break;
    default:
        // 404 page controller
        window.controller = "404.c.js"
}