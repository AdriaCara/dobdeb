const changePhotoForm = document.getElementById("changePhoto-form");
changePhotoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Recoger el archivo del formulario
    const file = document.getElementById('newPhoto').files[0];
    // Recoger el email del usuario actualmente autenticado
    const email = firebase.auth().currentUser.email;
    // Llamar la función de subida de foto con el archivo y el email
    uploadPhoto(file, email);
});