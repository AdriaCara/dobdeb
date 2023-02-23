function createModalRegister() {
    // Create the modal for registering
    const registerModal = document.createElement("div");
    registerModal.classList.add("modal");
    registerModal.setAttribute("id", "registerModal");
    registerModal.setAttribute("tabindex", "-1");
    registerModal.setAttribute("aria-labelledby", "exampleModalLabel");
    registerModal.setAttribute("aria-hidden", "true");

    // Create the modal dialog
    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");

    // Create the modal content
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    // Create the modal header
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    // Create the title of the modal
    const modalTitle = document.createElement("h5");
    modalTitle.classList.add("modal-title");
    modalTitle.setAttribute("id", "registerModalLabel");
    modalTitle.textContent = "Register";

    // Create the button to close the modal
    const closeButton = document.createElement("button");
    closeButton.classList.add("btn-close", "btn-close-dark");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    // Append the title and close button to the modal header
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create the modal body
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    // Create the form for registering
    const registerForm = document.createElement("form");
    registerForm.setAttribute("id", "register-form");

    // Create the nickname field
    const nicknameDiv = document.createElement("div");
    nicknameDiv.classList.add("mb-3");

    const nicknameLabel = document.createElement("label");
    nicknameLabel.classList.add("col-form-label");
    nicknameLabel.setAttribute("for", "nicknameRegister");
    nicknameLabel.textContent = "Nickname:";

    const nicknameInput = document.createElement("input");
    nicknameInput.setAttribute("type", "text");
    nicknameInput.classList.add("form-control");
    nicknameInput.setAttribute("id", "nicknameRegister");
    nicknameInput.setAttribute("name", "nicknameRegister");

    // Append the nickname field to the form
    nicknameDiv.appendChild(nicknameLabel);
    nicknameDiv.appendChild(nicknameInput);
    registerForm.appendChild(nicknameDiv);

    // Create the real name field
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("mb-3");

    const nameLabel = document.createElement("label");
    nameLabel.classList.add("col-form-label");
    nameLabel.setAttribute("for", "nameRegister");
    nameLabel.textContent = "Real name:";

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.classList.add("form-control");
    nameInput.setAttribute("id", "nameRegister");
    nameInput.setAttribute("name", "nameRegister");

    // Append the real name field to the form
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);
    registerForm.appendChild(nameDiv);

    // Create the email field
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("mb-3");

    const emailLabel = document.createElement("label");
    emailLabel.classList.add("col-form-label");
    emailLabel.setAttribute("for", "emailRegister");
    emailLabel.textContent = "Email:";

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.classList.add("form-control");
    emailInput.setAttribute("id", "emailRegister");
    emailInput.setAttribute("name", "emailRegister");
    emailInput.setAttribute("autocomplete", "current-email");

    // Append the email field to the form
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    registerForm.appendChild(emailDiv);

    const passwordDiv = document.createElement("div");
    passwordDiv.classList.add("mb-3");

    const passwordLabel = document.createElement("label");
    passwordLabel.classList.add("col-form-label");
    passwordLabel.setAttribute("for", "passwordRegister");
    passwordLabel.textContent = "Password:";

    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "passwordRegister");
    passwordInput.setAttribute("name", "passwordRegister");
    passwordInput.setAttribute("autocomplete", "current-password");
    passwordInput.classList.add("form-control");

    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);

    const registerButtonDiv = document.createElement("div");
    registerButtonDiv.setAttribute("id", "register-button");
    registerButtonDiv.classList.add("modal-footer");

    const registerButton = document.createElement("button");
    registerButton.setAttribute("type", "submit");
    registerButton.classList.add("btn", "btn-primary");
    registerButton.setAttribute("data-bs-dismiss", "modal");
    registerButton.textContent = "Register";

    registerButtonDiv.appendChild(closeButton);
    registerButtonDiv.appendChild(registerButton);

    const registerModalBody = document.createElement("div");
    registerModalBody.classList.add("modal-body");
    registerModalBody.appendChild(registerForm);

    const registerModalContent = document.createElement("div");
    registerModalContent.classList.add("modal-content");
    registerModalContent.appendChild(registerModalHeader);
    registerModalContent.appendChild(registerModalBody);

    const registerModalDialog = document.createElement("div");
    registerModalDialog.classList.add("modal-dialog");
    registerModalDialog.appendChild(registerModalContent);

    document.body.appendChild(registerModal);

}