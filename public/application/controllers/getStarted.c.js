window.countryBornCode = "DZ";
window.countryLiveCode = "AF";
// get started process
window.getStartedProcess = function() {
    // add profile photo
    $(".addProfilePhoto").click(function(){
        $(".inputfile").trigger("click");
    });
    var file = "";
    $('.inputfile').change(function() {
        var input = this;
        var url = $(this).val();
        var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
        if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#profilePic').attr('src', e.target.result);
                $("#profilePic").css('min-height',"200px");
            }
            file = input.files[0];
            reader.readAsDataURL(file);
        }
    });
    // go to Home
    $(".goToHomePage").click(function(){
        var countryDocData = {
            countryBornCode: window.countryBornCode,
            countryLiveCode: window.countryLiveCode
        }
        var userData = {
            userId: window.uid,
            firstName: window.firstName,
            lastName: window.lastName,
            birthMonth: window.birthMonth,
            birthDay: window.birthDay,
            birthYear: window.birthYear,
            gender: window.gender,
            email: window.email,
            profilePic: "",
            lastOnlineTime: Date.now(),
            lastOnlineDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
            countryBornCode: window.countryBornCode,
            countryLiveCode: window.countryLiveCode
       };
        // push country born and live to Users collection
        $(".addProfilePhoto").addClass("loading");
        addDocumentToCollectionById("Users",window.uid,userData).then(() => {
            if(file != "") {
                // save profile picture
                uploadFile(file,window.uid + "/profile","image/jpeg").then(snapshot => snapshot.ref.getDownloadURL()).then((url) => {
                  // update profile picture and set isNewUser false
                  updateDocumentById("Users",window.uid,{ profilePic: url, isNewUser: false }).then(() => {
                        $(".addProfilePhoto").removeClass("loading");
                        location.reload();
                  }).catch(error => {
                        location.reload();
                  });
                }).catch(error => {
                    location.reload();
                });
            } else {
                // set isNewUser false with default profile picture
                updateDocumentById("Users",window.uid,{ profilePic: defaultUserProfilePicUrl, isNewUser: false }).then(() => {
                    $(".addProfilePhoto").removeClass("loading");
                    location.reload();
                });
            }
        }).catch(error => {
            location.reload();
        });
    });
}
window.handleCountryBornChange = function (e) { window.countryBornCode = e.target.value; }
window.handleCountryLiveChange = function (e) { window.countryLiveCode = e.target.value; }