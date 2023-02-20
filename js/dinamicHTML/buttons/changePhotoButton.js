function createChangePhotoButton() {
    const changePhotoLi = document.createElement('li');
    changePhotoLi.id = 'changePhoto';
    changePhotoLi.classList.add('nav-item');
    changePhotoLi.classList.add('marginTop');
    
    const changePhotoButton = document.createElement('button');
    changePhotoButton.textContent = 'Change Photo';
    changePhotoButton.id = 'changePhotoButton';
    changePhotoButton.type = 'button';
    changePhotoButton.classList.add('buttonStyle');
    changePhotoButton.setAttribute('style', "--clr:#b1f45f");
    changePhotoButton.setAttribute('onclick', "changeModal('changePhoto');");

    changePhotoLi.appendChild(changePhotoButton);
    navbar.appendChild(changePhotoLi);
}