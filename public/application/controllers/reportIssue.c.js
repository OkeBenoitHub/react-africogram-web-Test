// report issue process
window.reportIssueProcess = function () {
  $('#sendReport').click(function () {
    var reportIssueArea = $('#reportIssueArea').val();
    var reportIssueMessage = $('#reportIssueMessage').val().trim();
    if (reportIssueMessage == '') {
      return;
    } else {
      $(this).addClass("loading");
      var toEmailsArray = window.adminEmails;
      var headLineTitle = 'Africogram - Report Issue';
      var htmlTemp = window.firstName + " " + window.lastName + " sent you a report regarding an issue" + ".<br/>" + "Area: " + reportIssueArea + "<br/>" + reportIssueMessage;
      var subject = 'New Report';
      // send report email
      sendHtmlEmail(toEmailsArray, headLineTitle, htmlTemp, subject)
        .then((docRef) => {
          $("#sendReport").removeClass("loading");
          // console.log("Document written with ID: ", docRef.id);
          hideDialogBox('reportIssueModal', false, false, false);
          showDialogBox('reportIssueSuccessModal', false, false, false);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  });
};