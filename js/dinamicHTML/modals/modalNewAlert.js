function createModalNewAlert() {
    const newAlertModal = document.createElement('div');
    newAlertModal.classList.add('modal');
    newAlertModal.classList.add('show');
    newAlertModal.id = 'newAlertModal';
    newAlertModal.setAttribute('data-backdrop', 'false');
    newAlertModal.tabIndex = 150;
    newAlertModal.setAttribute('style', 'display:block;');
    
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');
    
    const contentModal = document.createElement('div');
    contentModal.classList.add('modal-content');
    contentModal.style.width = '35rem';
    
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'newAlertModalLabel';
    modalTitle.textContent = 'New alert';
    
    const btnClose = document.createElement('button');
    btnClose.classList.add('btn-close', 'btn-close-dark');
    btnClose.setAttribute('onclick', "changeModal('');");
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(btnClose);
    
    const textCenter = document.createElement('div');
    textCenter.classList.add('text-center');
    
    const newAlertForm = document.createElement('form');
    newAlertForm.id = 'newAlert-form';
    
    const formContent = document.createElement('div');
    formContent.classList.add('border-success', 'm-5', 'justify-content-center');
    formContent.style.width = '30rem';
    
    const rolLabel = document.createElement('label');
    rolLabel.classList.add('col-form-label');
    rolLabel.setAttribute('for', 'newAlertRol');
    rolLabel.textContent = 'Rol';
    
    const rolInput = document.createElement('input');
    rolInput.id = 'newAlertRol';
    rolInput.classList.add('text-center');
    rolInput.setAttribute('placeholder', 'Default Rol 3');
    
    const messageLabel = document.createElement('label');
    messageLabel.classList.add('col-form-label');
    messageLabel.setAttribute('for', 'newAlertMessage');
    messageLabel.textContent = 'Message';
    
    const messageInput = document.createElement('input');
    messageInput.id = 'newAlertMessage';
    messageInput.classList.add('text-center');
    messageInput.setAttribute('placeholder', 'Alert message');
    
    formContent.appendChild(rolLabel);
    formContent.appendChild(rolInput);
    formContent.appendChild(messageLabel);
    formContent.appendChild(messageInput);
    
    const modalFooter = document.createElement('div');
    modalFooter.id = 'newAlert-button';
    modalFooter.classList.add('modal-footer');
    
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.setAttribute('onclick', "changeModal('');");
    closeButton.textContent = 'Close';
    
    const alertButton = document.createElement('button');
    alertButton.type = 'button';
    alertButton.setAttribute('onclick', 'saveNewAlert();');
    alertButton.textContent = 'Alert!!';
    
    modalFooter.appendChild(closeButton);
    modalFooter.appendChild(alertButton);
    
    newAlertForm.appendChild(formContent);
    newAlertForm.appendChild(modalFooter);
    
    textCenter.appendChild(newAlertForm);
    
    contentModal.appendChild(modalHeader);
    contentModal.appendChild(textCenter);
    
    modalDialog.appendChild(contentModal);
    
    newAlertModal.appendChild(modalDialog);
    
    modalContent.appendChild(newAlertModal);
    
}