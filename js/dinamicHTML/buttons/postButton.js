function createPostButton() {
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

    postForm.appendChild(postButton);
    postLi.appendChild(postForm);
    navbar.appendChild(postLi);  
}