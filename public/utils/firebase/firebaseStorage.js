/**
 * Firebase Storage Util
 */
/**
 * @param {File} file
 */
window.uploadFile = function(file,fileDir,fileContentType) {
    // [START storage_upload_handle_error]
    // Create the file metadata
    // Eg: contentType: 'image/jpeg'
    var metadata = {
      contentType: fileContentType
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    //return ref(storage,'Users/' + fileDir + '/' + file.name).put(file, metadata);
    // Upload the file and metadata
    // Upload the file and metadata
    var uploadTask = window.storageRef.child('Users/' + fileDir + '/' + file.name).put(file, metadata);
    return uploadTask;

  /*
  uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
  );
  */
}