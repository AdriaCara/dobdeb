function createModalChangePost(title, text, nickname, id) {
    // Crear elementos
    const editPostModal = document.createElement("div");
    editPostModal.classList.add('modal');
    editPostModal.classList.add('show');
    editPostModal.setAttribute('id', 'editPostModal');
    editPostModal.setAttribute('style', 'display: block;');

    const modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog";

    const contentModal = document.createElement("div");
    contentModal.className = "modal-content";
    contentModal.style.width = "35rem";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    const modalTitle = document.createElement("h5");
    modalTitle.className = "modal-title";
    modalTitle.id = "editPostModalLabel";
    modalTitle.textContent = "Edit post";

    const modalCloseButton = document.createElement("button");
    modalCloseButton.type = "button";
    modalCloseButton.className = "btn-close btn-close-dark";
    modalCloseButton.dataset.bsDismiss = "modal";
    modalCloseButton.setAttribute('onclick', "changeModal('');");

    const modalCardBody = document.createElement("div");
    modalCardBody.className = "card-body text-center stylecontentModal";

    const editPostForm = document.createElement("form");
    editPostForm.id = "editPost-form";

    const editPostCard = document.createElement("div");
    editPostCard.className = "card border-success m-5 justify-content-center";

    const editPostTitle = document.createElement("input");
    editPostTitle.id = "titleEditPost";
    editPostTitle.type = "text";
    editPostTitle.className = "card-title card-header";
    editPostTitle.placeholder = "Title";
    editPostTitle.setAttribute("value", title);

    const editPostText = document.createElement("textarea");
    editPostText.id = "textEditPost";
    editPostText.className = "card-text";
    editPostText.placeholder = "Text";
    editPostText.textContent = text;

    const editPostNickname = document.createElement("p");
    editPostNickname.id = "editPostNickname";
    editPostNickname.className = "disable";
    editPostNickname.textContent = "Error";
    editPostNickname.textContent = nickname;

    const editPostTime = document.createElement("p");
    editPostTime.id = "timeEditPost";
    editPostTime.className = "card-footer text-muted";
    editPostTime.textContent = "00/00/00 00:00:00";

    const editPostButton = document.createElement("div");
    editPostButton.id = "editPost-button";
    editPostButton.className = "modal-footer";

    const editPostCloseButton = document.createElement("button");
    editPostCloseButton.type = "button";
    editPostCloseButton.className = "btn btn-danger";
    editPostCloseButton.setAttribute('onclick', "changeModal('');");
    editPostCloseButton.textContent = "Close";

    const editPostSubmitButton = document.createElement("button");
    editPostSubmitButton.type = "button";
    editPostSubmitButton.className = "btn btn-primary";
    editPostSubmitButton.setAttribute('onclick', `saveEditPost('${id}');`);
    editPostSubmitButton.textContent = "Edit";

    // Añadir elementos al árbol DOM
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalCloseButton);

    editPostCard.appendChild(editPostTitle);
    editPostCard.appendChild(editPostText);
    editPostCard.appendChild(editPostNickname);
    editPostCard.appendChild(editPostTime);

    editPostForm.appendChild(editPostCard);

    editPostButton.appendChild(editPostCloseButton);
    editPostButton.appendChild(editPostSubmitButton);

    contentModal.appendChild(modalHeader);
    contentModal.appendChild(modalCardBody);
    contentModal.appendChild(editPostForm);
    contentModal.appendChild(editPostButton);

    modalDialog.appendChild(contentModal);

    editPostModal.appendChild(modalDialog);

    modalContent.appendChild(editPostModal);

}