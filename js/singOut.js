function logOut() {
    var user = firebase.auth().currentUser;
    if (user) {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("Sesión cerrada");
      }).catch(function(error) {
        // An error happened.
        console.log("Error al cerrar sesión: ", error);
      });
}
}