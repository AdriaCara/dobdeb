function createChangeEmogiButton() {
    const changeEmogiLi = document.createElement('li');
    changeEmogiLi.id = 'changeEmogi';
    changeEmogiLi.classList.add('nav-item');
    changeEmogiLi.classList.add('marginTop');

    const changeEmogiButton = document.createElement('button');
    changeEmogiButton.textContent = 'Change Emogi';
    changeEmogiButton.id = 'changeEmogiButton';
    changeEmogiButton.type = 'button';
    changeEmogiButton.classList.add('buttonStyle');
    changeEmogiButton.setAttribute('style', "--clr:#b1f45f");
    changeEmogiButton.setAttribute('onclick', "changeModal('changeEmogi');");

    changeEmogiLi.appendChild(changeEmogiButton);
    navbar.appendChild(changeEmogiLi);
}