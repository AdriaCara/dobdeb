function createModalChangePhoto() {
    // Crear el elemento modal
    const changePhotoModal = document.createElement('div');
    changePhotoModal.className = 'modal';
    changePhotoModal.classList.add('show');
    changePhotoModal.id = 'changePhotoModal';
    changePhotoModal.tabIndex = '-1';
    changePhotoModal.setAttribute('style', 'display:block;');

    // Crear el elemento modal-dialog
    const modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';

    // Crear el elemento modal-content
    const contentModal = document.createElement('div');
    contentModal.className = 'modal-content';

    // Crear el elemento form
    const form = document.createElement('form');
    form.id = 'changePhoto-form';

    // Crear el elemento modal-header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    // Crear el elemento h5
    const h5 = document.createElement('h5');
    h5.className = 'modal-title';
    h5.id = 'changePhotoModalLabel';
    h5.innerText = 'Change Photo';

    // Crear el elemento button (Cerrar modal)
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('onclick', "changeModal('');");
    
    // Crear el elemento input (Seleccionar archivo)
    const inputFile = document.createElement('input');
    inputFile.type = 'file';
    inputFile.id = 'newPhoto';
    inputFile.accept = 'image/*';

    // Crear el elemento modal-footer
    const modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';

    // Crear el botón "Close"
    const closeButtonFooter = document.createElement('button');
    closeButtonFooter.type = 'button';
    closeButtonFooter.className = 'btn btn-danger';
    closeButtonFooter.setAttribute('data-bs-dismiss', 'modal');
    closeButtonFooter.innerText = 'Close';
    closeButtonFooter.setAttribute('onclick', "changeModal('');");

    // Crear el botón "Save"
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.className = 'btn btn-primary';
    saveButton.setAttribute('data-bs-dismiss', 'modal');
    saveButton.innerText = 'Save';
    saveButton.setAttribute('onclick', 'saveChangePhoto();');

    // Agregar los elementos al DOM
    modalHeader.appendChild(h5);
    modalHeader.appendChild(closeButton);
    form.appendChild(modalHeader);
    form.appendChild(inputFile);
    modalFooter.appendChild(closeButtonFooter);
    modalFooter.appendChild(saveButton);
    form.appendChild(modalFooter);
    contentModal.appendChild(form);
    modalDialog.appendChild(contentModal);
    changePhotoModal.appendChild(modalDialog);
    modalContent.appendChild(changePhotoModal);
}