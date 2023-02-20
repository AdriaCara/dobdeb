function login() {
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
        // Handle successful login
        getFeedback("Login", 'Logeado con exito', true);
    })
    .catch(error => {
        // Handle errors
        getFeedback("Login", error, false);
    });
    deleteElementsModal();
}