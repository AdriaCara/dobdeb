function createModalDoAPost() {
    // Crear modal para agregar publicación
    const postModal = document.createElement('div');
    postModal.classList.add('modal');
    postModal.classList.add('show');
    postModal.setAttribute('id', 'postModal');
    postModal.setAttribute('style', 'display: block;');

    const modalDialog = document.createElement('div');
    modalDialog.setAttribute('class', 'modal-dialog');

    const contentModal = document.createElement('div');
    contentModal.setAttribute('class', 'modal-content stylecontentModal');

    const modalHeader = document.createElement('div');
    modalHeader.setAttribute('class', 'modal-header');

    const modalTitle = document.createElement('h5');
    modalTitle.setAttribute('class', 'modal-title');
    modalTitle.setAttribute('id', 'doAPostModalLabel');
    modalTitle.innerText = 'New post';

    const closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('class', 'btn-close btn-close-dark');
    closeButton.setAttribute('onclick', "changeModal('');");

    const modalBody = document.createElement('div');
    modalBody.setAttribute('class', 'card-body text-center');

    const form = document.createElement('form');
    form.setAttribute('id', 'doAPost-form');

    const postCard = document.createElement('div');
    postCard.setAttribute('class', 'card border-success m-5 justify-content-center');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'titleDoAPost');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('class', 'card-title card-header');
    titleInput.setAttribute('placeholder', 'Title');

    const textArea = document.createElement('textarea');
    textArea.setAttribute('id', 'textDoAPost');
    textArea.setAttribute('class', 'card-text');
    textArea.setAttribute('placeholder', 'TEXT');

    const nicknameError = document.createElement('p');
    nicknameError.setAttribute('id', 'doAPostNickname');
    nicknameError.setAttribute('class', 'disable');
    nicknameError.textContent= 'Error';

    const timeLabel = document.createElement('p');
    timeLabel.setAttribute('id', 'timeDoAPost');
    timeLabel.setAttribute('class', 'card-footer text-muted');
    timeLabel.innerText = '00/00/00 00:00:00';

    const modalFooter = document.createElement('div');
    modalFooter.setAttribute('id', 'doAPost-button');
    modalFooter.setAttribute('class', 'modal-footer');

    const closeButton2 = document.createElement('button');
    closeButton2.setAttribute('type', 'button');
    closeButton2.setAttribute('class', 'btn btn-danger');
    closeButton2.setAttribute('onclick', "changeModal('');");
    closeButton2.innerText = 'Close';

    const postButton = document.createElement('button');
    postButton.setAttribute('type', 'button');
    postButton.setAttribute('class', 'btn btn-primary');
    postButton.setAttribute('onclick', 'doAPostFucntion();');
    postButton.innerText = 'Post';

    // Anidar elementos
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    postCard.appendChild(titleInput);
    postCard.appendChild(textArea);
    postCard.appendChild(nicknameError);
    postCard.appendChild(timeLabel);

    modalFooter.appendChild(closeButton2);
    modalFooter.appendChild(postButton);

    form.appendChild(postCard);
    form.appendChild(modalFooter);

    modalBody.appendChild(form);

    contentModal.appendChild(modalHeader);
    contentModal.appendChild(modalBody);

    modalDialog.appendChild(contentModal);

    postModal.appendChild(modalDialog);

    modalContent.appendChild(postModal);

}