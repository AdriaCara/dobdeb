function doAPostFucntion() {
    const titleDoAPost = document.getElementById("titleDoAPost").value;
    const textDoAPost = document.getElementById("textDoAPost").value;
    const nicknameDoAPost = document.getElementById("doAPostNickname").textContent;
    savePost(titleDoAPost, textDoAPost, nicknameDoAPost);
    deleteElementsModal();
}

function putInfoInModalDoAPost() {
    const userDoAPost = firebase.auth().currentUser;
    const emailDoAPost = userDoAPost.email;

    docUser.get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const user = doc.data();
            if (user.email == emailDoAPost) {
                const nicknameDoAPost = user.nickname;
                document.getElementById("doAPostNickname").textContent = nicknameDoAPost;
            }
        });
    });
}