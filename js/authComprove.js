firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    deleteElementsPost();
    getPosts();
    document.getElementById("myProfile").classList.remove("hidden");
    document.getElementById("posts").classList.remove("hidden");
    document.getElementById("login").classList.add("hidden");
    document.getElementById("register").classList.add("hidden");
    document.getElementById("logOut").classList.remove("hidden");
    document.getElementById("doAPost").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden");
    document.getElementById("changePhoto").classList.add("hidden");
    document.getElementById("changeDescription").classList.add("hidden");
    document.getElementById("newAlert").classList.add("hidden");
    document.getElementById("dropdownAlert").classList.remove("hidden");
    // User is signed in
    console.log("Usuario conectado");
  } else {
    deleteElementsPost();
    document.getElementById("myProfile").classList.add("hidden");
    document.getElementById("posts").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("register").classList.remove("hidden");
    document.getElementById("logOut").classList.add("hidden");
    document.getElementById("doAPost").classList.add("hidden");
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("changePhoto").classList.add("hidden");
    document.getElementById("changeDescription").classList.add("hidden");
    document.getElementById("newAlert").classList.add("hidden");
    document.getElementById("dropdownAlert").classList.add("hidden");
    // No user is signed in
    console.log("Usuario no conectado");
  }
});