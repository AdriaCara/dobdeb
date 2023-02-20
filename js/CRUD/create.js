
// Create user
function createUser(nickname, nameUser, email) {
    db.collection("users").add({
    name: nameUser,
    nickname: nickname,
    rol: 3,
    email: email,
    photo: 'https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/gallery%2Fdefoult.png?alt=media&token=5d0239e7-74f5-4931-9d03-1579b50ced56',
    description: "Hey there, I'm using dobdeb!",
    time: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
        getFeedback("Register", "Enjoy dobdeb! :)", true);
    })
    .catch((error) => {
        getFeedback("Register", error.message, false);
    });
}
// Create user

// Create Post
function savePost(title, text, nickname) {
    // Guardar el post en la colección "posts"
    db.collection("posts").add({
      title: title,
      text: text,
      nickname: nickname,
      time: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function() {
        getFeedback("Post", "Posted with exit!", true);
        deleteElementsPost();
        getPosts('all');
    })
    .catch(function(error) {
        getFeedback("Post", error.message, false);
    });
}
// Create Post

// Create alert
function createAlert(message, rol) {
    getAllEmailUsers().then(emails => {
        db.collection("alerts").add({
            rol: parseInt(rol),
            emails: emails,
            message: message,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((docRef) => {
            getFeedback("Alert", "Alert created", true);
        })
        .catch((error) => {
            getFeedback("Alert", error, false);
        });
    });
}
// Create alert