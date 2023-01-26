const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
        // Handle successful login
        console.log("Usuario inició sesión con éxito", user);
    })
    .catch(error => {
        // Handle errors
        console.error("Error al iniciar sesión", error);
    });
});