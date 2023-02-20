const profileLi = document.createElement('li');
profileLi.id = 'myProfile';
profileLi.classList.add('nav-item');
profileLi.classList.add('marginTop');

const profileForm = document.createElement('form');
profileForm.id = 'myProfileButton';

const profileButton = document.createElement('button');
profileButton.textContent = 'Profile';
profileButton.type = 'button';
profileButton.classList.add('buttonStyle');
profileButton.setAttribute('style', "--clr:#0D6EFD");
profileButton.setAttribute('onclick', "changeContent('myProfile');");

const homeLi = document.createElement('li');
homeLi.classList.add('nav-item');
homeLi.classList.add('marginTop');
homeLi.id = 'home';

const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.classList.add('buttonStyle');
homeButton.setAttribute('style', "--clr:#676723");
homeButton.setAttribute('onclick', "changeContent('home');");

const postLi = document.createElement('li');
postLi.id = 'posts';
postLi.classList.add('nav-item');
postLi.classList.add('marginTop');

const postForm = document.createElement('form');
postForm.id = 'postsButton';

const postButton = document.createElement('button');
postButton.textContent = 'Posts';
postButton.type = 'button';
postButton.classList.add('buttonStyle');
postButton.setAttribute('style', "--clr:#2af499");
postButton.setAttribute('onclick', "changeContent('posts');");

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
doAPostButton.setAttribute('data-bs-toggle', 'modal');
doAPostButton.setAttribute('data-bs-target', '#postModal');
doAPostButton.setAttribute('onclick', 'doAPostFucntion();');

const changePhotoLi = document.createElement('li');
changePhotoLi.id = 'changePhoto';
changePhotoLi.classList.add('nav-item');
changePhotoLi.classList.add('marginTop');

const changePhotoButton = document.createElement('button');
changePhotoButton.textContent = 'Change Photo';
changePhotoButton.id = 'changePhotoButton';
changePhotoButton.type = 'button';
changePhotoButton.classList.add('buttonStyle');
changePhotoButton.setAttribute('style', "--clr:#b1f45f");
changePhotoButton.setAttribute('data-bs-toggle', 'modal');
changePhotoButton.setAttribute('data-bs-target', '#changePhotoModal');

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
changeDescriptionButton.setAttribute('data-bs-toggle', 'modal');
changeDescriptionButton.setAttribute('data-bs-target', '#changeDescriptionModal');


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

const galleryLi = document.createElement('li');
galleryLi.id = 'register';
galleryLi.classList.add('nav-item');
galleryLi.classList.add('marginTop');

const galleryForm = document.createElement('form');
galleryForm.id = 'galleryButton';

const galleryButton = document.createElement('button');
galleryButton.textContent = 'Gallery';
galleryButton.id = 'registerButton';
galleryButton.type = 'button';
galleryButton.classList.add('buttonStyle');
galleryButton.setAttribute('style', "--clr:#ff9328");
galleryButton.setAttribute('onclick', "changeContent('gallery');");

const logOutLi = document.createElement('li');
logOutLi.id = 'logOut';
logOutLi.classList.add('nav-item');
logOutLi.classList.add('marginTop');

const logOutButton = document.createElement('button');
logOutButton.textContent = 'Log out';
logOutButton.id = 'logOutButton';
logOutButton.classList.add('buttonStyle');
logOutButton.setAttribute('style', "--clr:#f65956");
logOutButton.setAttribute('onclick', 'logOut();');

const alert = document.createElement('li');
alert.setAttribute('id', 'alert');
alert.setAttribute('class', 'nav-item mt-0');

const dropdown = document.createElement('div');
dropdown.setAttribute('class', 'dropdown ms-5');

const button = document.createElement('button');
button.setAttribute('class', 'btn');
button.setAttribute('type', 'button');
button.setAttribute('id', 'dropdownAlert');
button.setAttribute('data-bs-toggle', 'dropdown');
button.setAttribute('aria-expanded', 'false');

const image = document.createElement('img');
image.setAttribute('id', 'imageAlert');
image.setAttribute('alt', 'Alert image');
image.setAttribute('width', '50');
image.setAttribute('height', '50');
image.setAttribute('class', 'btn-img bg-secondary');
image.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/alerts%2Falert.png?alt=media&token=b4c52418-2052-49f4-96dc-07e4b907fc4a');
image.setAttribute('alt', 'Image');
image.setAttribute('onmouseover', 'alertMouseover();');
image.setAttribute('onmouseout', 'alertMouseout();');

const alertContent = document.createElement('ul');
alertContent.setAttribute('id', 'alertContent');
alertContent.setAttribute('class', 'dropdown-menu');
alertContent.setAttribute('aria-labelledby', 'dropdownAlert');

const dropdownItem = document.createElement('li');
dropdownItem.setAttribute('class', 'dropdown-item d-flex justify-content-center');

const p = document.createElement('p');
p.setAttribute('class', 'mt-3 text-muted');
p.textContent = 'EMPTY';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    // User is signed in
    changeContent('home');
    console.log("Usuario conectado");
  } else {
    // No user is signed in
    
    deleteElementsNavbar();
    const loginLi = document.createElement('li');
    loginLi.id = 'login';
    loginLi.classList.add('nav-item');
    loginLi.classList.add('marginTop');

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    loginButton.id = 'loginButton';
    loginButton.type = 'button';
    loginButton.classList.add('buttonStyle');
    loginButton.setAttribute('style', "--clr:#f65956");
    loginButton.setAttribute('data-bs-toggle', 'modal');
    loginButton.setAttribute('data-bs-target', '#loginModal');

    loginLi.appendChild(loginButton);
    navbar.appendChild(loginLi);

    const registerLi = document.createElement('li');
    registerLi.id = 'register';
    registerLi.classList.add('nav-item');
    registerLi.classList.add('marginTop');

    const registerButton = document.createElement('button');
    registerButton.textContent = 'Register';
    registerButton.id = 'registerButton';
    registerButton.type = 'button';
    registerButton.classList.add('buttonStyle');
    registerButton.setAttribute('style', "--clr:#f65956");
    registerButton.setAttribute('data-bs-toggle', 'modal');
    registerButton.setAttribute('data-bs-target', '#registerModal');

    registerLi.appendChild(registerButton);
    navbar.appendChild(registerLi);
    
    console.log("Usuario no conectado");
    deleteElementsPost();
    getHome(false);
  }
});