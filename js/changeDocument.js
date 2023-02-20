const titleDocument = document.getElementById("titleContent");

function changeContent(documentShow) {
    deleteElementsPost();
    deleteElementsNavbar();

    if (documentShow=='gallery') {
        titleDocument.textContent = 'Gallery';
        createHomeButton();
        createProfileButton();
        createPostButton();
        getGallery();
    } else if (documentShow=='posts') {
        titleDocument.textContent = 'Recent posts';
        createHomeButton();
        createProfileButton();
        createGalleryButton();
        createDoAPostButton();
        getPosts('all');
    } else if (documentShow=='anotherProfile') {
        createHomeButton();
        createProfileButton();
        createGalleryButton();
        createPostButton();
    } else if (documentShow=='myProfile') {
        const email = firebase.auth().currentUser.email;
        createHomeButton();
        createGalleryButton();
        createPostButton();
        createChangePhotoButton();
        createChangeDescriptionButton();
        createChangeEmogiButton();
        getProfile(email);
    } else {
        titleDocument.textContent = 'Home';
        createProfileButton();
        createGalleryButton();
        createPostButton();
        getHome(true);
    }

    createAlertButton();

    getRolActualUser().then(rol => {
        if (rol==0) {
            createNewAlertButton();
        }
        createLogOutButton();
        showAlerts();
    });
}