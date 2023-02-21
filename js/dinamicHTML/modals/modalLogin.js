function createModalLogin() {
    // Crea el modal de login
    const loginModal = document.createElement('div');
    loginModal.classList.add('modal');
    loginModal.classList.add('show');
    loginModal.setAttribute('id', 'loginModal');
    loginModal.setAttribute('tabindex', '-1');
    loginModal.setAttribute('aria-labelledby', 'exampleModalLabel');
    loginModal.setAttribute('aria-hidden', 'true');
    loginModal.setAttribute('style', 'display:block;');

    // Crea el diálogo del modal
    const dialog = document.createElement('div');
    dialog.classList.add('modal-dialog');

    // Crea el contenido del modal
    const content = document.createElement('div');
    content.classList.add('modal-content');

    // Crea el encabezado del modal
    const header = document.createElement('div');
    header.classList.add('modal-header');

    const title = document.createElement('h5');
    title.classList.add('modal-title');
    title.setAttribute('id', 'loginModalLabel');
    title.textContent = 'Login';

    const closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.classList.add('btn-close', 'btn-close-dark');
    closeButton.setAttribute('onclick', "changeModal('');");

    header.appendChild(title);
    header.appendChild(closeButton);

    // Crea el cuerpo del modal
    const body = document.createElement('div');
    body.classList.add('modal-body');

    const form = document.createElement('form');
    form.setAttribute('id', 'login-form');

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('mb-3');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'emailLogin');
    emailLabel.classList.add('col-form-label');
    emailLabel.textContent = 'Email:';

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.classList.add('form-control');
    emailInput.setAttribute('id', 'emailLogin');
    emailInput.setAttribute('name', 'emailLogin');
    emailInput.setAttribute('autocomplete', 'current-email');

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    const passwordDiv = document.createElement('div');
    passwordDiv.classList.add('mb-3');

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'passwordLogin');
    passwordLabel.classList.add('col-form-label');
    passwordLabel.textContent = 'Password:';

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.classList.add('form-control');
    passwordInput.setAttribute('id', 'passwordLogin');
    passwordInput.setAttribute('name', 'passwordLogin');
    passwordInput.setAttribute('autocomplete', 'current-password');

    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    form.appendChild(emailDiv);
    form.appendChild(passwordDiv);

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('id', 'login-button');
    buttonDiv.classList.add('modal-footer');

    const closeButton2 = document.createElement('button');
    closeButton2.setAttribute('type', 'button');
    closeButton2.classList.add('btn', 'btn-danger');
    closeButton2.setAttribute('data-bs-dismiss', 'modal');
    closeButton2.textContent = 'Close';
    closeButton2.setAttribute('onclick', "changeModal('');");

    const loginButton = document.createElement('button');
    loginButton.setAttribute('type', 'button');
    loginButton.classList.add('btn', 'btn-primary');
    loginButton.setAttribute('data-bs-dismiss', 'modal');
    loginButton.textContent = 'Login';
    loginButton.setAttribute('onclick', 'login();');

    buttonDiv.appendChild(closeButton2);
    buttonDiv.appendChild(loginButton);

    form.appendChild(buttonDiv);

    body.appendChild(form);

    // Agrega los elementos al DOM
    content.appendChild(header);
    content.appendChild(body);
    dialog.appendChild(content);
    loginModal.appendChild(dialog);
    modalContent.appendChild(loginModal);
}