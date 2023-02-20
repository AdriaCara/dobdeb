function changeModal(modalShow) {
    deleteElementsModal();

    if (modalShow=='login') {
        createModalLogin();
    } else if (modalShow=='register') {
        createModalRegister();
    } else if (modalShow=='logOut') {
        createModalLogOut();
    } else if (modalShow=='doAPost') {
        createModalDoAPost();
    } else if (modalShow=='editAPost') {
        createModalEditPost();
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