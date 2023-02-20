const changeEmogi = document.getElementById("changeEmogi-form");

function saveChangeEmogi() {
    const email = firebase.auth().currentUser.email;
    const emogi = document.getElementById("emoji-input").value;
    updateEmogi(email, emogi);
    deleteElementsModal();
}