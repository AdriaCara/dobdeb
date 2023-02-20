const editPostForm = document.getElementById("editPost-form");

function saveEditPost() {
    const titleEditPost = document.getElementById("titleEditPost").value;
    const textEditPost = document.getElementById("textEditPost").value;
    const idPost = document.getElementById("editPostButtonFunction").getAttribute("idPost");
    editPost(titleEditPost, textEditPost, idPost);
    deleteElementsModal();
}