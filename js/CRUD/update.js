
// Update photo
function uploadPhoto(file, email) {
    // Referencia de storage
    const storageRef = firebase.storage().ref();
    // Referencia de la colección donde se encuentra el documento
    const collectionRef = firebase.firestore().collection('users');
    // Crear una referencia al archivo en el Storage
    const fileRef = storageRef.child(`/gallery/${file.name}`);
    // Subir el archivo al Storage
    fileRef.put(file)
    .then(snapshot => {
    // Obtener la URL descargable del archivo
    return snapshot.ref;
    })
    .then(fileRef => {
        // Actualizar la referencia en el documento específico
        return fileRef.getDownloadURL().then(downloadURL => {
            return collectionRef.where("email", "==", email).get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.id es el ID del documento
                    collectionRef.doc(doc.id).update({photo: downloadURL});
                    getFeedback("Photo", "Photo changed", true);
                    deletePostsUser();
                    changeContent('myProfile');
                });
            });
        });
    })
    .catch(error => {
        getFeedback("Photo", error, false);
    });
}
// Update Photo

// Update description
function updateDescription(text, email) {
    // Actualizar la descripcion en el documento específico
    const collectionRef = firebase.firestore().collection('users');
    return collectionRef.where("email", "==", email).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.id es el ID del documento
            collectionRef.doc(doc.id).update({description: text});
            getFeedback("Description", "Description changed", true);
            deleteElementsPost();
            changeContent('myProfile');
        });
    });
}
// Update description

// Update post
function editPost(title, text, id) {
    // Guardar el post en la colección "posts"
    db.collection("posts").doc(id).update({
      title: title,
      text: text,
      time: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function() {
        getFeedback("Edit Post", "Post edited", true);
        deleteElementsPost();
        getPosts('all');
    })
    .catch(function(error) {
        getFeedback("Edit Post", error, false);
    });
}
// Update post

// Update form
function updateForm(option, id) {
    docForm.get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const form = doc.data();
            let emails = [];
            getEmailActualUser().then(email => {
                if (option == 'si') {
                    emails = form.yes;
                    emails.push(email);
                    db.collection("forms").doc(id).update({
                        yes: emails,
                    })
                    .then(function() {
                        getFeedback("Vote", `Voted ${option}`, true);
                        changeContent('home');
                    })
                    .catch(function(error) {
                        getFeedback("Vote", error, false);
                    });
                } else {
                    emails = form.no;
                    emails.push(email);
                    db.collection("forms").doc(id).update({
                        no: emails,
                    })
                    .then(function() {
                        getFeedback("Vote", `Voted ${option}`, true);
                        changeContent('home');
                    })
                    .catch(function(error) {
                        getFeedback("Vote", error, false);
                    });
                }
            });
        });
    });
}
// Update form