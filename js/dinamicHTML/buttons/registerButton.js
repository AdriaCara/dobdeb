function createRegisterButton() {
    const registerLi = document.createElement('li');
    registerLi.id = 'register';
    registerLi.classList.add('nav-item');
    registerLi.classList.add('marginTop');

    const registerButton = document.createElement('button');
    registerButton.textContent = 'Register';
    registerButton.id = 'registerButton';
    registerButton.type = 'button';
    registerButton.classList.add('buttonStyle');
    registerButton.setAttribute('style', "--clr:#f65956");
    registerButton.setAttribute('data-bs-toggle', 'modal');
    registerButton.setAttribute('data-bs-target', '#registerModal');

    registerLi.appendChild(registerButton);
    navbar.appendChild(registerLi);
}