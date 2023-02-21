function createModalChangeEmogi() {

    // Crear los elementos HTML
    const modal = document.createElement('div');
    const modalDialog = document.createElement('div');
    const contentModal = document.createElement('div');
    const form = document.createElement('form');
    const modalHeader = document.createElement('div');
    const modalTitle = document.createElement('h5');
    const closeButton = document.createElement('button');
    const emojiButton = document.createElement('button');
    const emojiList = document.createElement('div');
    const emojiOptions = [
        '👾', '🦄', '🍺', '🚬', '🚗', '🌠', '✊🏿', '🏳️‍🌈', '🏳️‍⚧️', '🍀', '🌹'
    ];
      
    const emojiInput = document.createElement('input');
    const modalFooter = document.createElement('div');
    const cancelButton = document.createElement('button');
    const saveButton = document.createElement('button');

    // Configurar los atributos de los elementos
    modal.classList.add('modal');
    modal.classList.add('show');
    modal.id = 'changeEmogiModal';
    modal.tabIndex = '-1';
    modal.setAttribute('aria-labelledby', 'changeEmogiBackdropLabel');
    modal.setAttribute('style', 'display:block;');

    modalDialog.className = 'modal-dialog';

    contentModal.className = 'modal-content';

    form.id = 'changeEmogi-form';

    modalHeader.className = 'modal-header';

    modalTitle.className = 'modal-title';
    modalTitle.id = 'changeEmogiModalLabel';
    modalTitle.innerText = 'Change Emogi';

    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('onclick', "changeModal('');");

    emojiButton.type = 'button';
    emojiButton.id = 'emoji-button';
    emojiButton.innerText = '😀';
    emojiButton.addEventListener('click', () => {
    emojiList.style.display = 'block';
    });

    emojiList.id = 'emoji-list';
    emojiList.style.display = 'none';

    for (const emoji of emojiOptions) {
    const emojiOption = document.createElement('span');
    emojiOption.className = 'emoji-option';
    emojiOption.innerHTML = emoji;
    emojiOption.addEventListener('click', () => {
        emojiInput.value = emoji;
        emojiList.style.display = 'none';
    });
    emojiList.appendChild(emojiOption);
    }

    emojiInput.type = 'text';
    emojiInput.id = 'emoji-input';
    emojiInput.maxLength = '1';

    modalFooter.className = 'modal-footer';

    cancelButton.type = 'button';
    cancelButton.className = 'btn btn-danger';
    cancelButton.setAttribute('data-bs-dismiss', 'modal');
    cancelButton.innerText = 'Close';
    cancelButton.setAttribute('onclick', "changeModal('');");

    saveButton.type = 'button';
    saveButton.className = 'btn btn-primary';
    saveButton.setAttribute('data-bs-dismiss', 'modal');
    saveButton.innerText = 'Save';
    saveButton.setAttribute('onclick', 'saveChangeEmogi();');

    // Agregar los elementos en el orden correcto
    contentModal.appendChild(form);

    form.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    form.appendChild(emojiButton);
    form.appendChild(emojiList);
    form.appendChild(emojiInput);

    form.appendChild(modalFooter);
    modalFooter.appendChild(cancelButton);
    modalFooter.appendChild(saveButton);

    modalDialog.appendChild(contentModal);

    modal.appendChild(modalDialog);

    modalContent.appendChild(modal);
}