function changeModal(modalShow) {
    deleteElementsModal();

    if (modalShow=='login') {
        createModalLogin();
    } else if (modalShow=='register') {
        createModalRegister();
    } else if (modalShow=='doAPost') {
        createModalDoAPost();
        putInfoInModalDoAPost();
    } else if (modalShow=='changePhoto') {
        createModalChangePhoto();
    } else if (modalShow=='changeDescription') {
        createModalChangeDescription();
    } else if (modalShow=='changeEmogi') {
        createModalChangeEmogi();
    } else if (modalShow=='newAlert') {
        createModalNewAlert();
    } else {
        //  Nothing
    }
}