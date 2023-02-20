// Delete posts
function deleteElementsPost(){
    while (documentContent.firstChild) {
       documentContent.firstChild.remove()
   }
}
// Delete posts

// Delete navbar
function deleteElementsNavbar(){
    while (navbar.firstChild) {
       navbar.firstChild.remove()
   }
}
// Delete navbar

// Delete posts
function deleteElementsPost(){
    while (documentContent.firstChild) {
       documentContent.firstChild.remove();
   }
}
// Delete posts

// Delete alerts
function deleteElementsAlert(){
    const documentAlert = document.getElementById('alertContent');
    while (documentAlert.firstChild) {
        documentAlert.firstChild.remove();
    }
}
// Delete alerts

//Delete post
function deletePostsUser(id) {
    const postId = id; // ID del documento a eliminar
    const postsRef = firebase.firestore().collection("posts");
    const postDocRef = postsRef.doc(postId);
    
    postDocRef.delete().then(() => {
        getFeedback("Delete post", 'Post deleted', true);
        deleteElementsPost();
        getPosts('all');
    }).catch((error) => {
        getFeedback("Delete Post", error, false);
    });   
}
//Delete post


// Disabled alert
function disableAlert(emails, id) {
    db.collection("alerts").doc(id).update({
        emails: emails
      })
      .then(function() {
        deleteElementsAlert();
        showAlerts();
      })
      .catch(function(error) {
        console.error("Error al editar el post: ", error);
      });
}
// Disabled alert

// Delete user feedback
function deleteUserFeedback(context) {
    const userFeedback = document.getElementById("userFeedback"); 
    userFeedback.removeChild(context);
}
// Delete user feedback 

// Delete modal
function deleteElementsModal(){
    while (modalContent.firstChild) {
        modalContent.firstChild.remove()
   }
}
// Delete modal