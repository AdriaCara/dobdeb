function saveEditPost(id) {
    const titleEditPost = document.getElementById("titleEditPost").value;
    const textEditPost = document.getElementById("textEditPost").value;
    console.log(titleEditPost, textEditPost, id);
    editPost(titleEditPost, textEditPost, id);
    deleteElementsModal();
}