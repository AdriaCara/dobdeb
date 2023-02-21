function createLoginButton() {
    const loginLi = document.createElement('li');
    loginLi.id = 'login';
    loginLi.classList.add('nav-item');
    loginLi.classList.add('marginTop');

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.id = 'loginButton';
    loginButton.type = 'button';
    loginButton.classList.add('buttonStyle');
    loginButton.setAttribute('style', "--clr:#f65956");
    loginButton.setAttribute('onclick', "changeModal('login');");

    loginLi.appendChild(loginButton);
    navbar.appendChild(loginLi);
}