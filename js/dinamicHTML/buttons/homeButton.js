function createHomeButton() {
    const homeLi = document.createElement('li');
    homeLi.classList.add('nav-item');
    homeLi.classList.add('marginTop');
    homeLi.id = 'home';

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('buttonStyle');
    homeButton.setAttribute('style', "--clr:#676723");
    homeButton.setAttribute('onclick', "changeContent('home');");

    homeLi.appendChild(homeButton);
    navbar.appendChild(homeLi);
}