const titleDocument = document.getElementById("titleContent");

function changeContent(documentShow) {
    deleteElementsPost();
    deleteElementsNavbar();

    if (documentShow=='gallery') {
        titleDocument.textContent = 'Gallery';
        homeLi.appendChild(homeButton);
        navbar.appendChild(homeLi);
        profileForm.appendChild(profileButton);
        profileLi.appendChild(profileForm);
        navbar.appendChild(profileLi);
        postForm.appendChild(postButton);
        postLi.appendChild(postForm);
        navbar.appendChild(postLi);
        getGallery();
    } else if (documentShow=='posts') {
        titleDocument.textContent = 'Recent posts';
        homeLi.appendChild(homeButton);
        navbar.appendChild(homeLi);
        profileForm.appendChild(profileButton);
        profileLi.appendChild(profileForm);
        navbar.appendChild(profileLi);
        galleryForm.appendChild(galleryButton);
        galleryLi.appendChild(galleryForm);
        navbar.appendChild(galleryLi);
        doAPostLi.appendChild(doAPostButton);
        navbar.appendChild(doAPostLi);
        getPosts('all');
    } else if (documentShow=='anotherProfile') {
        homeLi.appendChild(homeButton);
        navbar.appendChild(homeLi);
        profileForm.appendChild(profileButton);
        profileLi.appendChild(profileForm);
        navbar.appendChild(profileLi);
        galleryForm.appendChild(galleryButton);
        galleryLi.appendChild(galleryForm);
        navbar.appendChild(galleryLi);
        postForm.appendChild(postButton);
        postLi.appendChild(postForm);
        navbar.appendChild(postLi);
    } else if (documentShow=='myProfile') {
        const email = firebase.auth().currentUser.email;
        homeLi.appendChild(homeButton);
        navbar.appendChild(homeLi);
        postForm.appendChild(postButton);
        postLi.appendChild(postForm);
        navbar.appendChild(postLi);  
        galleryForm.appendChild(galleryButton);
        galleryLi.appendChild(galleryForm);
        navbar.appendChild(galleryLi); 
        changePhotoLi.appendChild(changePhotoButton);
        navbar.appendChild(changePhotoLi);
        changeDescriptionLi.appendChild(changeDescriptionButton);
        navbar.appendChild(changeDescriptionLi);
        changeEmogiLi.appendChild(changeEmogiButton);
        navbar.appendChild(changeEmogiLi);
        getProfile(email);
    } else {
        titleDocument.textContent = 'Home';
        profileForm.appendChild(profileButton);
        profileLi.appendChild(profileForm);
        navbar.appendChild(profileLi);
        postForm.appendChild(postButton);
        postLi.appendChild(postForm);
        navbar.appendChild(postLi);
        galleryForm.appendChild(galleryButton);
        galleryLi.appendChild(galleryForm);
        navbar.appendChild(galleryLi);
        getHome(true);
    }

    button.appendChild(image);
    dropdown.appendChild(button);
    dropdownItem.appendChild(p);
    alertContent.appendChild(dropdownItem);
    dropdown.appendChild(alertContent);
    alert.appendChild(dropdown);

    navbar.appendChild(alert);

    getRolActualUser().then(rol => {
        if (rol==0) {
            const newAlertLi = document.createElement('li');
            newAlertLi.id = 'newAlertLi';
            newAlertLi.classList.add('nav-item');
            newAlertLi.classList.add('marginTop');
        
            const newAlertButton = document.createElement('button');
            newAlertButton.textContent = 'New alert';
            newAlertButton.id = 'newAlertButton';
            newAlertButton.classList.add('buttonStyle');
            newAlertButton.setAttribute('style', "--clr:blue");
            newAlertButton.setAttribute('data-bs-toggle', 'modal');
            newAlertButton.setAttribute('data-bs-target', '#newAlertModal');
        
            newAlertLi.appendChild(newAlertButton);
            navbar.appendChild(newAlertLi);
        }
        logOutLi.appendChild(logOutButton);
        navbar.appendChild(logOutLi);
        showAlerts();
    });
}