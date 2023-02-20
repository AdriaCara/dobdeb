firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    // User is signed in
    changeContent('home');
  } else {
    // No user is signed in
    deleteElementsNavbar();

    createLoginButton();
    createRegisterButton();
    
    deleteElementsPost();
    getHome(false);
  }
});