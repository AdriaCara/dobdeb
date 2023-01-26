// Obteniendo valores de los inputs de email y password
const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const nicknameRegister = document.getElementById("nicknameRegister").value;

    firebase.firestore().collection("users").where("nickname", "==", nicknameRegister)
    .get()
    .then(function(querySnapshot) {
        if (querySnapshot.size > 0) {
        alert("This nickname is already registered");
        } else {
            const nicknameRegister = document.getElementById("nicknameRegister").value;
            const emailRegister = document.getElementById("emailRegister").value;
            const passwordRegister = document.getElementById("passwordRegister").value;
            const nameUserRegister = document.getElementById("nameRegister").value;
            firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister)
            .then(function(user) {
                createUser(nicknameRegister, nameUserRegister, emailRegister);
                console.log("Usuario registrado", user);
            })
            .catch(function(error) {
                console.log("Error al registrar usuario: ", error);
            });
        }
    });

});