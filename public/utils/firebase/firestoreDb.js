/**
 * Firestore DB Util
 */

// create or overwrite a single document, use the set()
/*{
    Example of document data
    var docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }

    .then(() => {
      console.log("Document successfully written!");
    })
    .catch(error => {
      console.error("Error writing document: ", error);
    });
};
*/
/**
 * Add document to collection by specific doc ID
 */
window.addDocumentToCollectionById = function(collectionName, documentId,documentData) {
    return window.db.collection(collectionName).doc(documentId).set(documentData, { merge: true });
};

/**
 * Add document to collection by generated doc ID
 */
window.addDocumentToCollectionByGeneratedId = function(collectionName,documentData) {
    // Add a new document with a generated id.
    return window.db.collection(collectionName).add(documentData);
};

/**
 * Update document from collection by its doc ID
 */
window.updateDocumentById = function(collectionName, documentId, updatedDocData) {
    // update a document from collection based on its id
    return window.db.collection(collectionName).doc(documentId).update(updatedDocData);  
};

/**
 * Get document data by its ID
 */
window.getDocumentDataById = function(collectionName, documentId) {
    var docRef = window.db.collection(collectionName).doc(documentId);
    return docRef.get();
    /*
    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    */
}