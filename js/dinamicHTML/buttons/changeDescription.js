function createChangeDescriptionButton() {
    const changeDescriptionLi = document.createElement('li');
    changeDescriptionLi.id = 'changeDescription';
    changeDescriptionLi.classList.add('nav-item');
    changeDescriptionLi.classList.add('marginTop');
    
    const changeDescriptionButton = document.createElement('button');
    changeDescriptionButton.textContent = 'Change Description';
    changeDescriptionButton.id = 'changeDescriptionButton';
    changeDescriptionButton.type = 'button';
    changeDescriptionButton.classList.add('buttonStyle');
    changeDescriptionButton.setAttribute('style', "--clr:#b1f45f");
    changeDescriptionButton.setAttribute('onclick', "changeModal('changeDescription');");

    changeDescriptionLi.appendChild(changeDescriptionButton);
    navbar.appendChild(changeDescriptionLi);
}