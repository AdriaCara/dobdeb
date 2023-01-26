const changeToGallery = document.getElementById("galleryButton");
const changeToPosts = document.getElementById("postsButton");
const changeToProfile = document.getElementById('myProfileButton');

const titleDocument = document.getElementById("titleContent");
const doAPost = document.getElementById("doAPost");
const changePhoto = document.getElementById("changePhoto");
const changeDescription = document.getElementById("changeDescription");
const posts = document.getElementById("posts");
const gallery = document.getElementById("gallery");
const myProfile = document.getElementById("myProfile");
const changeClass = document.getElementById("postContent");

changeToGallery.addEventListener("submit", e => {
    e.preventDefault();
    changeContent('gallery');
});

changeToPosts.addEventListener("submit", e => {
    e.preventDefault();
    changeContent('posts');
});

changeToProfile.addEventListener("submit", e => {
    e.preventDefault();
    changeContent('myProfile');
});

function changeContent(documentShow) {
    doAPost.classList.add("hidden");
    changePhoto.classList.add("hidden");
    changeDescription.classList.add("hidden");
    posts.classList.add("hidden");
    gallery.classList.add("hidden");
    myProfile.classList.add("hidden");
    deleteElementsPost();

    if (documentShow=='gallery') {
        titleDocument.textContent = 'Gallery';
        changePhoto.classList.remove("hidden");
        changeDescription.classList.remove("hidden");
        posts.classList.remove("hidden");
        myProfile.classList.remove("hidden");
        changeClass.classList.add("row");
        getGallery();
    } else if (documentShow=='posts') {
        titleDocument.textContent = 'Recent posts';
        doAPost.classList.remove("hidden");
        gallery.classList.remove("hidden");
        myProfile.classList.remove("hidden");
        changeClass.classList.remove("row");
        getPosts('all');
    } else if (documentShow=='anotherProfile') {
        posts.classList.remove("hidden");
        gallery.classList.remove("hidden");
        myProfile.classList.remove("hidden");
    } else {
        const email = firebase.auth().currentUser.email;

        changePhoto.classList.remove("hidden");
        changeDescription.classList.remove("hidden");
        posts.classList.remove("hidden");
        gallery.classList.remove("hidden");
        changeClass.classList.remove("row");
        getProfile(email);
    }
}