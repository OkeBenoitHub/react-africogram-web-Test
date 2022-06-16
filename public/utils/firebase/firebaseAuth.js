/* Sign user out */
window.signUserOut = function signUserOut() {
    window.auth.signOut().then(() => {
         /* Sign-out successful. */
         $("body").addClass("signOut");
      }).catch(function(error) {
         /* An error happened. */
    });
}
 
 /* Check for user authentication */
window.checkForUserAuth = function() {
    window.auth.onAuthStateChanged((user) => {
        if (user) {
             // user is logged in
             if($("body").hasClass("notLoggedIn")) {
                 location.reload();
                 return false;
             }
             $("body").addClass("loggedIn");
             window.email = user.email;
             window.uid = user.uid;
             window.firstName = Cookies.get('firstName');
            getUserDataById(window.uid).then((doc) => {
                if (doc.exists) {
                     var data = doc.data();
                     window.firstName = data.firstName;
                     window.lastName = data.lastName;
                     window.email = data.email;
                     window.isNewUser = data.isNewUser;
                     window.birthMonth = data.birthMonth;
                     window.birthDay = data.birthDay;
                     window.birthYear = data.birthYear;
                     window.gender = data.gender;
                     window.lastOnlineDate = data.lastOnlineDate;
                     window.lastOnlineTime = data.lastOnlineTime;
                     window.profilePic = data.profilePic;
                     window.countryBornCode = data.countryBornCode;
                     window.countryLiveCode = data.countryLiveCode;
                }
                setUpPageControllerJs(true);
                $("#" + window.tempId + " .loggedIn").removeAttr("style");
            });
        } else {
             // not logged in
             if($("body").hasClass("signOut") || $("body").hasClass("loggedIn")) {
                 location.reload();
                 return false;
             }
             $("body").addClass("notLoggedIn");
             setUpPageControllerJs(false);
             $("#" + window.tempId + " .notLoggedIn").removeAttr("style");
        }
     });
 }
 
 /* Update user password */
window.updateUserPassword = function(newPassword) {
    var user = window.auth.currentUser;
     user.updatePassword(newPassword).then(() => {
         // Update successful.
     }).catch(function(error) {
        // An error happened.
     });
}
 
 /* Update user email address */
 window.updateUserEmail = function(newEmail) {
     var user = window.auth.currentUser;
     user.updateEmail(newEmail).then(() => {
         // Update successful.
     }).catch(function(error) {
         // An error happened.
     });
 }
 
 /* Delete current user */
window.deleteCurrentUser = function() {
     var user = window.auth.currentUser;
     user.deleteUser().then(() => {
         // User deleted.
     }).catch(function(error) {
        // An error happened.
     });
}
 
 /* Sign in user to Africogram based on email and password */
window.signInUserToAfricogram = function signInUserToAfricogram(emailLog,passwordLog) {
    window.auth.signInWithEmailAndPassword(emailLog, passwordLog).then(userCredential => {
             $("#signInForm").removeClass("loading");
             location.reload();
        },function(error) {
             /* Handle Errors here. */
             $("#signInForm").removeClass("loading");
             var errorCode = error.code;
             if(errorCode === 'auth/user-not-found') {
                 $("#signInForm").addClass("error");
                 $("#signInForm").find(".emailLog").parent(".field").addClass("error");
                 $("#signInForm").find(".emailLog").trigger("focus");
                 $("#errorMessageLog").text("This email does not exist in our system.");
                 return false;
             }
             if(errorCode === 'auth/wrong-password') {
                 $("#signInForm").addClass("error");
                 $("#signInForm").find(".passwordLog").parent(".field").addClass("error");
                 $("#signInForm").find(".passwordLog").trigger("focus");
                 $("#errorMessageLog").text("Incorrect password.");
                 return false;
             } else {
                 $("#signInForm").addClass("error");
                 $("#signInForm").find(".passwordLog").parent(".field").addClass("error");
                 $("#signInForm").find(".passwordLog").trigger("focus");
                 $("#errorMessageLog").text("Failed to sign in! Try again.");
                 return false;
             }
       });
   }
 
 /* Send user password reset email */
 window.sendUserPasswordReset = function sendUserPasswordReset(emailRecover) {
    window.auth.languageCode = 'en';
    window.auth.sendPasswordResetEmail(emailRecover).then(() => {
             /* Email sent. */
             $("#recoverForm").removeClass("loading");
             $("#recoverForm").addClass("success");
             $("#recoverForm .successMessage").text("Check your email! We sent you a link to reset your password.");
          }).catch(function(error) {
             /* An error happened. */
             $("#recoverForm").removeClass("loading");
             var errorCode = error.code;
             if(errorCode === 'auth/invalid-email') {
                 $("#recoverForm").addClass("error");
                 $("#recoverForm").find(".emailRec").parent(".field").addClass("error");
                 $("#recoverForm").find(".emailRec").trigger("focus");
                 $("#recoverForm .errorMessage").text("Invalid email.");
                 return false;
             }
             if(errorCode === 'auth/user-not-found') {
                 $("#recoverForm").addClass("error");
                 $("#recoverForm").find(".emailRec").parent(".field").addClass("error");
                 $("#recoverForm").find(".emailRec").trigger("focus");
                 $("#recoverForm .errorMessage").text("This email does not exist in our system.");
                 return false;
             }
     });
   }
 
 /* Sign up a new user to Pictoslide */
 window.signUpNewUserForAfricogram = function signUpNewUserForAfricogram(
                     email,
                     password,
                     firstName,
                     lastName,
                     birthMonth,
                     birthDay,
                     birthYear,
                     gender) {
        window.auth.createUserWithEmailAndPassword(email, password).then(userCredential => {
             var user = userCredential.user;
             var userId = user.uid;
             alert(userId);
             var userData = {
                 userId: userId,
                 firstName: firstName,
                 lastName: lastName,
                 birthMonth: birthMonth,
                 birthDay: birthDay,
                 birthYear: birthYear,
                 gender: gender,
                 email: email,
                 profilePic: "",
                 lastOnlineTime: Date.now(),
                 lastOnlineDate: moment().format('MMMM Do YYYY, h:mm:ss a')
             };
             addDocumentToCollectionById("Users",userId,userData).then(() => {
                 location.reload();
             }).catch(() => {
                $(".verifyAccountModal.modal").modal("hide");
                $("#signUpButton").prop('disabled', true);
                $("#signUpBox").removeClass("loading");
                $("#signUpBox").addClass("error");
                $("#signUpBox #errorMessage p").text("An unexpected error occurred!");
             });
             },(error) => {
                 $(".verifyAccountModal.modal").modal("hide");
                 $("#signUpButton").prop('disabled', true);
                 $("#signUpBox").removeClass("loading");
                 /* Handle Errors here. */
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 /* Check if email belongs to existing member */
                 if(errorCode === 'auth/email-already-in-use') {
                     $("#signUpBox").addClass("error");
                     $("#signUpBox").find(".email").parent(".field").addClass("error");
                     $("#signUpBox #errorMessage p").text("This email already exists in our system.");
                     $("#signUpBox").find(".email").trigger("focus");
                     return false;
                 } else {
                     $("#signUpBox").addClass("error");
                     $("#signUpBox #errorMessage p").text(errorMessage);
                 }
             });
}