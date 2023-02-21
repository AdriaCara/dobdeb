function createProfileButton() {
    const profileLi = document.createElement('li');
    profileLi.id = 'myProfile';
    profileLi.classList.add('nav-item');
    profileLi.classList.add('marginTop');

    const profileForm = document.createElement('form');
    profileForm.id = 'myProfileButton';

    const profileButton = document.createElement('button');
    profileButton.textContent = 'Profile';
    profileButton.type = 'button';
    profileButton.classList.add('buttonStyle');
    profileButton.setAttribute('style', "--clr:#0D6EFD");
    profileButton.setAttribute('onclick', "changeContent('myProfile');");

    profileForm.appendChild(profileButton);
    profileLi.appendChild(profileForm);
    navbar.appendChild(profileLi);
}