/* Init Firebase */
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
window.firebaseInitConfig = function () {
  const firebaseConfig = {
    apiKey: "AIzaSyCTWURfCR46jFCjJTXPVw0izAhUVOChUZc",
    authDomain: "africogramdev.firebaseapp.com",
    projectId: "africogramdev",
    storageBucket: "africogramdev.appspot.com",
    messagingSenderId: "64271862697",
    appId: "1:64271862697:web:ae6657c145aaebf81212b8",
    measurementId: "G-929TBEPDNL"
  };  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
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
