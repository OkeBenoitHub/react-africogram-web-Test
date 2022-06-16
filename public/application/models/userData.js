/**
 * User Data Model
 */
// get all user data from collection by user ID
var userCollectionName = "Users";
window.getUserDataById = function(userId) {
    return getDocumentDataById(userCollectionName,userId);
}