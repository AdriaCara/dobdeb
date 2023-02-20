function createDoAPostButton() {
    const doAPostLi = document.createElement('li');
    doAPostLi.id = 'doAPost';
    doAPostLi.classList.add('nav-item');
    doAPostLi.classList.add('marginTop');
    
    const doAPostButton = document.createElement('button');
    doAPostButton.textContent = 'Do a post';
    doAPostButton.id = 'doAPostButton';
    doAPostButton.type = 'button';
    doAPostButton.classList.add('buttonStyle');
    doAPostButton.setAttribute('style', "--clr:#b1f45f");
    doAPostButton.setAttribute('onclick', "changeModal('doAPost');");

    doAPostLi.appendChild(doAPostButton);
    navbar.appendChild(doAPostLi);
}