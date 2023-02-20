function createLogOutButton() {
    const logOutLi = document.createElement('li');
    logOutLi.id = 'logOut';
    logOutLi.classList.add('nav-item');
    logOutLi.classList.add('marginTop');
    
    const logOutButton = document.createElement('button');
    logOutButton.textContent = 'Log out';
    logOutButton.id = 'logOutButton';
    logOutButton.classList.add('buttonStyle');
    logOutButton.setAttribute('style', "--clr:#f65956");
    logOutButton.setAttribute('onclick', 'logOut();');

    logOutLi.appendChild(logOutButton);
    navbar.appendChild(logOutLi);
}