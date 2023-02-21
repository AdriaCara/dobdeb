function saveChangeDescription() {
    // Recoger el teto del formulario
    const text = document.getElementById('description').value;
    // Recoger el email del usuario actualmente autenticado
    const email = firebase.auth().currentUser.email;
    // Llamar la función de actualizacion de la descripción del usuario
    if (text.length > 0) {
        updateDescription(text, email);
    }
    deleteElementsModal();
}