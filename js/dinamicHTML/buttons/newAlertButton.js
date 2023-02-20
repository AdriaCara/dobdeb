function createNewAlertButton() {
    const newAlertLi = document.createElement('li');
    newAlertLi.id = 'newAlertLi';
    newAlertLi.classList.add('nav-item');
    newAlertLi.classList.add('marginTop');

    const newAlertButton = document.createElement('button');
    newAlertButton.textContent = 'New alert';
    newAlertButton.id = 'newAlertButton';
    newAlertButton.classList.add('buttonStyle');
    newAlertButton.setAttribute('style', "--clr:blue");
    newAlertButton.setAttribute('onclick', "changeModal('newAlert');");

    newAlertLi.appendChild(newAlertButton);
    navbar.appendChild(newAlertLi);
}