function createModalChangeDescription() {
    // Create modal
    const changeDescriptionModal = document.createElement('div');
    changeDescriptionModal.className = 'modal';
    changeDescriptionModal.classList.add('show');
    changeDescriptionModal.id = 'changeDescriptionModal';
    changeDescriptionModal.setAttribute('tabindex', '-1');
    changeDescriptionModal.setAttribute('aria-labelledby', 'changeDescriptionBackdropLabel');
    changeDescriptionModal.setAttribute('style', 'display:block;');

    // Create dialog
    const changeDescriptionDialog = document.createElement('div');
    changeDescriptionDialog.className = 'modal-dialog';

    // Create content
    const changeDescriptionContent = document.createElement('div');
    changeDescriptionContent.className = 'modal-content';

    // Create form
    const changeDescriptionForm = document.createElement('form');
    changeDescriptionForm.id = 'changeDescription-form';

    // Create header
    const changeDescriptionHeader = document.createElement('div');
    changeDescriptionHeader.className = 'modal-header';

    const changeDescriptionTitle = document.createElement('h5');
    changeDescriptionTitle.className = 'modal-title';
    changeDescriptionTitle.id = 'changeDescriptionModalLabel';
    changeDescriptionTitle.innerText = 'Change Description';

    const changeDescriptionCloseButton = document.createElement('button');
    changeDescriptionCloseButton.type = 'button';
    changeDescriptionCloseButton.className = 'btn-close';
    changeDescriptionCloseButton.setAttribute('onclick', "changeModal('');");

    changeDescriptionHeader.appendChild(changeDescriptionTitle);
    changeDescriptionHeader.appendChild(changeDescriptionCloseButton);

    // Create body
    const changeDescriptionBody = document.createElement('textarea');
    changeDescriptionBody.id = 'description';
    changeDescriptionBody.className = 'card-text text-center m-2';
    changeDescriptionBody.placeholder = 'Description';
    changeDescriptionBody.style.width = '30rem';
    changeDescriptionBody.style.height = '15rem';

    // Create footer
    const changeDescriptionFooter = document.createElement('div');
    changeDescriptionFooter.className = 'modal-footer';

    const changeDescriptionCloseButtonFooter = document.createElement('button');
    changeDescriptionCloseButtonFooter.type = 'button';
    changeDescriptionCloseButtonFooter.className = 'btn btn-danger';
    changeDescriptionCloseButtonFooter.setAttribute('onclick', "changeModal('newAlert');");
    changeDescriptionCloseButtonFooter.innerText = 'Close';

    const changeDescriptionSaveButton = document.createElement('button');
    changeDescriptionSaveButton.type = 'button';
    changeDescriptionSaveButton.className = 'btn btn-primary';
    changeDescriptionSaveButton.setAttribute('onclick', 'saveChangeDescription();');
    changeDescriptionSaveButton.innerText = 'Save';

    changeDescriptionFooter.appendChild(changeDescriptionCloseButtonFooter);
    changeDescriptionFooter.appendChild(changeDescriptionSaveButton);

    // Assemble modal
    changeDescriptionForm.appendChild(changeDescriptionHeader);
    changeDescriptionForm.appendChild(changeDescriptionBody);
    changeDescriptionForm.appendChild(changeDescriptionFooter);
    changeDescriptionContent.appendChild(changeDescriptionForm);
    changeDescriptionDialog.appendChild(changeDescriptionContent);
    changeDescriptionModal.appendChild(changeDescriptionDialog);

    // Add modal to the document body
    modalContent.appendChild(changeDescriptionModal);
}