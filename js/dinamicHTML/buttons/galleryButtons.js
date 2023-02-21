function createGalleryButton() {
    const galleryLi = document.createElement('li');
    galleryLi.id = 'register';
    galleryLi.classList.add('nav-item');
    galleryLi.classList.add('marginTop');
    
    const galleryForm = document.createElement('form');
    galleryForm.id = 'galleryButton';
    
    const galleryButton = document.createElement('button');
    galleryButton.textContent = 'Gallery';
    galleryButton.id = 'registerButton';
    galleryButton.type = 'button';
    galleryButton.classList.add('buttonStyle');
    galleryButton.setAttribute('style', "--clr:#ff9328");
    galleryButton.setAttribute('onclick', "changeContent('gallery');");

    galleryForm.appendChild(galleryButton);
    galleryLi.appendChild(galleryForm);
    navbar.appendChild(galleryLi);
}