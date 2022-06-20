/* Init Firebase */
window.firebaseInitConfig = function () {
  const firebaseTestConfig = {
    apiKey: "AIzaSyCTWURfCR46jFCjJTXPVw0izAhUVOChUZc",
    authDomain: "africogramdev.firebaseapp.com",
    projectId: "africogramdev",
    storageBucket: "africogramdev.appspot.com",
    messagingSenderId: "64271862697",
    appId: "1:64271862697:web:ae6657c145aaebf81212b8",
    measurementId: "G-929TBEPDNL"
  };

  const firebaseLiveConfig = {
    apiKey: "AIzaSyCGFSj0VGwNznYixYTb48iKqJXE0plJ5SE",
    authDomain: "africogram-live-e0477.firebaseapp.com",
    projectId: "africogram-live-e0477",
    storageBucket: "africogram-live-e0477.appspot.com",
    messagingSenderId: "548866228905",
    appId: "1:548866228905:web:555c30aaf220864ff9dfb8",
    measurementId: "G-S5TCT5S18N"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseTestConfig);
  // Initialize Analytics and get a reference to the service
  firebase.analytics();
  // Initialize Firebase Authentication and get a reference to the service
  window.auth = firebase.auth();
  // Initialize Cloud Firestore and get a reference to the service
  window.db = firebase.firestore();
  // Get a reference to the storage service, which is used to create references in your storage bucket
  window.storage = firebase.storage();
  // Create a storage reference from our storage service
  window.storageRef = window.storage.ref();
}; 
