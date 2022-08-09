/**
 * Main Util
 */

window.africanCountries = window.africanCountryListEn;
// sort african coutries by name alphabetically
window.africanCountries.sort(function (a, b) {
    return a.name.localeCompare(b.name);
});
window.allCountries = [];
window.africanCountriesFr = [];
// for loop all countries in en with code
Object.entries(countriesAllJsonEn).forEach((entry) => {
    const [key, value] = entry;
    window.allCountries.push({"name": value, "code": key});
    for(var i = 0; i < window.africanCountries.length; i++) {
        if(window.africanCountries[i].code == key) {
          window.africanCountriesFr.push({"name": value, "code": key});
        }
    }
});

/* show bootstrap dialog box */
window.showDialogBox = function showDialogBox(dialogModalClassName,closeOnClickedOutside,isInverted,isBlurred) {
    $("."+dialogModalClassName+".modal").modal({
        inverted: isInverted,
        blurring: isBlurred,
        allowMultiple: true
    })
    .modal('setting', 'transition', animationList[Math.floor(Math.random() * animationList.length)])
    .modal('setting', 'closable', closeOnClickedOutside)
    .modal("show");
}

/* hide bootstrap dialog box */
window.hideDialogBox = function hideDialogBox(dialogModalClassName,closeOnClickedOutside,isInverted,isBlurred) {
    $("."+dialogModalClassName+".modal").modal({
        inverted: isInverted,
        blurring: isBlurred,
        allowMultiple: true
    })
    .modal('setting', 'transition', animationList[Math.floor(Math.random() * animationList.length)])
    .modal('setting', 'closable', closeOnClickedOutside)
    .modal("hide");
}

/* get a random integer between two values, inclusive */
window.getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

/* check for all letters in a string */
window.allLetter = function allLetter(inputtxt) {
    var letters = /^[A-Za-z\s]+$/;
    if(inputtxt.match(letters)){
      return true;
    } else {
      return false;
    }
}
/* validate email */
window.validateEmail = function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/* Capitalize first letter for each word in string */
window.capital_letter = function capital_letter(str){
    str = str.toLowerCase().split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
