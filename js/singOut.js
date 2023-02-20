function logOut() {
    var user = firebase.auth().currentUser;
    if (user) {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        getFeedback("Log out", 'Bye!', true);
      }).catch(function(error) {
        // An error happened.
        getFeedback("Log out", error, false);
      });
}
}