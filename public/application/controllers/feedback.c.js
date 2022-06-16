// feedback process
window.feedbackProcess = function () {
  $('#sendFeedback').click(function () {
    var feedbackArea = $('#feedbackArea').val();
    var feedbackMessage = $('#feedbackMessage').val().trim();
    if (feedbackMessage == '') {
      return;
    } else {
      $(this).addClass("loading");
      var toEmailsArray = window.adminEmails;
      var headLineTitle = "Africogram - Feedback";
      var htmlTemp = window.firstName + " " + window.lastName + " sent you a feedback" + ".<br/>" + "Area: " + feedbackArea + "<br/>" + feedbackMessage;
      var subject = "New Feedback";
      // send feedback email
      sendHtmlEmail(toEmailsArray, headLineTitle, htmlTemp, subject)
        .then(() => {
          $('#sendFeedback').removeClass("loading");
          // console.log("Document written with ID: ", docRef.id);
          hideDialogBox('feedbackModal', false, false, false);
          showDialogBox('feedbackSuccessModal', false, false, false);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  });
};