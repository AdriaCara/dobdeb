// JavaScript code to handle post submission
const contentForm = document.getElementById('post-form');
const contentInput = document.getElementById('post-input');
const documentContent = document.getElementById('postContent');
const navbar = document.getElementById('navbar');
const docPost = firebase.firestore().collection('posts').orderBy("time", "desc");
const docUser = firebase.firestore().collection('users').orderBy("name", "asc");
const docUserR = firebase.firestore().collection('users').orderBy("time", "desc");
const docAlert = firebase.firestore().collection('alerts').orderBy("time", "desc");
const docForm = firebase.firestore().collection('forms').orderBy("time", "desc");
let emails;

getAllEmailUsers()
.then(result => {;
    emails = result;
})
.catch(error => {
    console.log("Error getting emails: ", error);
});

// Create functions

// Create user
function createUser(nickname, nameUser, email) {
    db.collection("users").add({
    name: nameUser,
    nickname: nickname,
    rol: 3,
    email: email,
    photo: 'https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/gallery%2Fdefoult.png?alt=media&token=5d0239e7-74f5-4931-9d03-1579b50ced56',
    description: "Hey there, I'm using dobdeb!",
    time: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
// Create user

// Create Post
function savePost(title, text, nickname) {
    // Guardar el post en la colección "posts"
    db.collection("posts").add({
      title: title,
      text: text,
      nickname: nickname,
      time: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
      console.log("Post guardado con ID: ", docRef.id);
      deleteElementsPost();
      getPosts('all');
    })
    .catch(function(error) {
      console.error("Error al guardar el post: ", error);
    });
}
// Create Post

// Create alert
function createAlert(message, rol) {
    
    db.collection("alerts").add({
        rol: parseInt(rol),
        emails: emails,
        message: message,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
// Create alert

// Create functions


// Get functions


// Get posts
function getPosts(nickname) {
    docPost.get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const post = doc.data();
            const postDiv = document.createElement('form');
            postDiv.classList.add('card');
            postDiv.classList.add('border-success');
            postDiv.classList.add('m-5');
            postDiv.classList.add('bg-dark');
            postDiv.classList.add('text-light');
            postDiv.style.Width = '30rem';

            const postTitle = document.createElement('div');
            postTitle.textContent = `${post.title}`;
            postTitle.classList.add('card-header');
            postTitle.classList.add('bg-transparent');
            postTitle.classList.add('border-success');
            postTitle.classList.add('fs-2');

            const postDivBody = document.createElement('div');
            postDivBody.classList.add('card-body');
            postDivBody.classList.add('text-success');

            const postText = document.createElement('p');
            postText.textContent = `${post.text}`;
            postText.classList.add('card-text');

            const postNickname = document.createElement('p');
            postNickname.textContent = `- ${post.nickname}`;
            postNickname.classList.add('text-start');
            postNickname.classList.add('fw-bold');
            postNickname.classList.add('m-2');
            getRolWithEmail(post.nickname).then(rol => {
                if (rol==2) {
                    const postVeryfied = document.createElement('p');
                    postVeryfied.textContent = '👾';
                    postNickname.appendChild(postVeryfied);
                    postNickname.style.fontFamily = 'papyrus';
                }
            });

            const postButtonEdit = document.createElement('button');
            postButtonEdit.textContent = "Edit";
            postButtonEdit.classList.add('btn');
            postButtonEdit.classList.add('btn-success');
            postButtonEdit.classList.add('col-6');
            postButtonEdit.classList.add('mx-auto');
            postButtonEdit.type = 'submit';
            postButtonEdit.setAttribute('data-bs-toggle', 'modal');
            postButtonEdit.setAttribute('data-bs-target', '#editPostModal');
            postButtonEdit.classList.add('marginBot');
            
            const postButtonDelte = document.createElement('button');
            postButtonDelte.textContent = "Delete";
            postButtonDelte.classList.add('btn');
            postButtonDelte.classList.add('btn-danger');
            postButtonDelte.classList.add('col-6');
            postButtonDelte.classList.add('mx-auto');
            postButtonDelte.classList.add('marginBot');
            postButtonDelte.type = 'submit';
            postButtonEdit.setAttribute('idPost', `${doc.id}`);
            postButtonEdit.id = "editPostButtonFunction";
            getRolActualUser().then(rol => {
                if (rol==0) {
                    postButtonEdit.onclick = (event) => {
                        event.preventDefault();
                        document.getElementById("titleEditPost").setAttribute("placeholder", post.title);
                        document.getElementById("textEditPost").setAttribute("placeholder", post.text);
                        document.getElementById("editPostNickname").textContent = post.nickname;
                    }
                    postButtonDelte.onclick = (event) => {
                        event.preventDefault();
                        deletePostsUser(`${doc.id}`);
                    }
                } else {
                    getNicknameActualUser().then(nickname => {
                        if (nickname==post.nickname) {
                            postButtonEdit.onclick = (event) => {
                                event.preventDefault();
                                document.getElementById("titleEditPost").setAttribute("placeholder", post.title);
                                document.getElementById("textEditPost").setAttribute("placeholder", post.text);
                                document.getElementById("editPostNickname").textContent = post.nickname;
                            }
                            postButtonDelte.onclick = (event) => {
                                event.preventDefault();
                                deletePostsUser(`${doc.id}`);
                            }
                        }
                    });
                }
            });

            const postTime = document.createElement('div');
            const postDate = post.time.toDate();
            const postDateFormat = postDate.getDate() + '/' + (postDate.getMonth() + 1) + '/' + postDate.getFullYear() + ' ' + postDate.getHours() + ':' + postDate.getMinutes() + ':' + postDate.getSeconds();
            postTime.textContent = postDateFormat;
            postTime.classList.add('card-footer');
            postTime.classList.add('bg-transparent');
            postTime.classList.add('text-succes');
            postTime.classList.add('text-muted');

            postDiv.appendChild(postDivBody);
            postDiv.appendChild(postTitle);
            postDiv.appendChild(postText);
            postDiv.appendChild(postNickname);
            getNicknameActualUser().then(nickname => {
                getRolActualUser().then(rol => {
                    if (rol==0) {
                        postDiv.appendChild(postButtonEdit);
                        postDiv.appendChild(postButtonDelte);
                    } else {
                        if (nickname==post.nickname) {
                            postDiv.appendChild(postButtonEdit);
                            postDiv.appendChild(postButtonDelte);
                        }
                    }
                });
            });
            postDiv.appendChild(postTime);

            if (post.nickname==nickname || nickname=='all') {
                documentContent.appendChild(postDiv);
            }
        });
    })
    .catch(error => {
        console.log('Error getting documents', error);
    });
}
// Get posts

// Get gallery
function getGallery() {
    docUser.get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const user = doc.data();

            const galleryCard = document.createElement('div');
            galleryCard.classList.add('card');
            galleryCard.classList.add('border-primary');
            galleryCard.classList.add('m-5');
            galleryCard.classList.add('bg-dark');
            galleryCard.classList.add('text-light');

            const galleryImage = document.createElement('img');
            if (user.hasOwnProperty("photo")) {
                var path = user.photo;
                galleryImage.src = path;
                galleryImage.classList.add('imgGallery');
                galleryImage.classList.add("card-img-top");
                galleryImage.style.maxWidth = '10rem'
            }

            const galleryCardBody = document.createElement('div');
            galleryCardBody.classList.add('card-body');

            const galleryTitle = document.createElement('h5');
            galleryTitle.textContent = user.name;
            galleryTitle.classList.add('card-title');
            galleryTitle.classList.add('bg-transparent');
            galleryTitle.classList.add('border-danger');
            galleryTitle.classList.add('fs-2');
            galleryTitle.style.fontFamily = 'papyrus';

            const galleryText = document.createElement('p');
            galleryText.textContent = `${user.description}`;
            galleryText.classList.add('card-text');

            const galleryFooter = document.createElement('div');

            const galleryTime = document.createElement('small');
            const postDate = user.time.toDate();
            const postDateFormat = postDate.getDate() + '/' + (postDate.getMonth() + 1) + '/' + postDate.getFullYear() + ' ' + postDate.getHours() + ':' + postDate.getMinutes() + ':' + postDate.getSeconds();
            galleryTime.textContent = `Here since: ${postDateFormat}`;
            galleryTime.classList.add('card-footer');
            galleryTime.classList.add('bg-transparent');
            galleryTime.classList.add('text-muted');

            const galleryProfileButton = document.createElement('button');
            galleryProfileButton.textContent = "Profile";
            galleryProfileButton.classList.add('btn');
            galleryProfileButton.classList.add('btn-primary');
            galleryProfileButton.classList.add('col-6');
            galleryProfileButton.classList.add('mx-auto');
            galleryProfileButton.type = 'submit';
            galleryProfileButton.onclick = (event) => {
                event.preventDefault();
                changeContent('anotherProfile');
                getProfile(user.email);
            }

            galleryCardBody.appendChild(galleryTitle);
            galleryCardBody.appendChild(galleryText);

            galleryFooter.appendChild(galleryTime);
            galleryFooter.appendChild(galleryProfileButton);

            galleryCard.appendChild(galleryImage);
            galleryCard.appendChild(galleryCardBody);
            galleryCard.appendChild(galleryFooter);

            if (user.rol == 2) {
                documentContent.appendChild(galleryCard);
            }
        });
    })
    .catch(error => {
        console.log('Error getting documents', error);
    });
}
// Get gallery

// Get Alerts
function showAlerts() {
    const documentAlert = document.getElementById('alertContent');
    let times=0;
    docAlert.get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const alert = doc.data();

            const alertLi = document.createElement('li');
            alertLi.classList.add('dropdown-item');
            alertLi.classList.add('border');
            alertLi.classList.add('border-warning');
            alertLi.classList.add('mt-1');
            alertLi.onclick = (event) => {
                event.preventDefault();
                getEmailActualUser().then(email => {
                    if (alert.emails.includes(email)) {
                        const emails = alert.emails.filter(e => e !== email);
                        disableAlert(emails, doc.id);
                    }
                });
            }

            const alertText = document.createElement('p');
            alertText.textContent = alert.message;

            const alertTime = document.createElement('small');
            const alertDate = alert.time.toDate();
            const alertFormat = alertDate.getDate() + '/' + (alertDate.getMonth() + 1) + '/' + alertDate.getFullYear() + ' ' + alertDate.getHours() + ':' + alertDate.getMinutes() + ':' + alertDate.getSeconds();
            alertTime.textContent = alertFormat;
            alertTime.classList.add('text-muted');

            alertLi.appendChild(alertText);
            alertLi.appendChild(alertTime);

            getRolActualUser().then(rol => {
                if (rol<=alert.rol) {
                    getEmailActualUser().then(email => {
                        if (alert.emails.includes(email)) {
                            if (times==0) {
                                deleteElementsAlert();
                            }
                                documentAlert.appendChild(alertLi);
                            document.getElementById('imageAlert').src = "https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/alerts%2FalertRed.png?alt=media&token=4723f289-b020-4759-87c7-58e54c5bd774";
                            alertColor = false;
                            times++;
                        }
                    });
                }
            });
        });
    })
    .catch(error => {
        console.log('Error getting documents', error);
    });
    if (documentAlert.firstChild==null) {
        deleteElementsAlert();
        document.getElementById('imageAlert').src = "https://firebasestorage.googleapis.com/v0/b/dobdeb-411d9.appspot.com/o/alerts%2Falert.png?alt=media&token=b4c52418-2052-49f4-96dc-07e4b907fc4a";
        alertColor = true;
        const alertLi = document.createElement('li');
        alertLi.classList.add('dropdown-item');
        alertLi.classList.add('d-flex');
        alertLi.classList.add('justify-content-center');

        const alertText = document.createElement('p');
        alertText.textContent = 'EMPTY';
        alertText.classList.add('mt-3');
        alertText.classList.add('text-muted');

        alertLi.appendChild(alertText);
        documentAlert.appendChild(alertLi);

    }
}
// Get alerts

// Get myProfile
function getProfile(email) {
    docUser.get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const user = doc.data();
            const galleryDiv = document.createElement('div');
            galleryDiv.classList.add('card');
            galleryDiv.classList.add('border-danger');
            galleryDiv.classList.add('m-5');
            galleryDiv.classList.add('bg-dark');
            galleryDiv.classList.add('text-light');
            galleryDiv.style.Width = '30rem';

            const galleryTitle = document.createElement('div');
            galleryTitle.textContent = user.name;
            galleryTitle.classList.add('card-header');
            galleryTitle.classList.add('bg-transparent');
            galleryTitle.classList.add('border-danger');
            galleryTitle.classList.add('fs-2');
            if (user.rol==2) {
                const galleryVeryfied = document.createElement('p');
                galleryVeryfied.textContent = '👾';
                galleryTitle.appendChild(galleryVeryfied);
                galleryTitle.style.fontFamily = 'papyrus';
            }

            const galleryImage = document.createElement('img');
            if (user.hasOwnProperty("photo")) {
                var path = user.photo;
                galleryImage.src = path;
                galleryImage.classList.add("imgGallery");
                galleryDiv.appendChild(galleryImage);
            }

            const galleryText = document.createElement('p');
            galleryText.textContent = `${user.description}`;
            galleryText.classList.add('card-text');

            const galleryTime = document.createElement('div');
            const postDate = user.time.toDate();
            const postDateFormat = postDate.getDate() + '/' + (postDate.getMonth() + 1) + '/' + postDate.getFullYear() + ' ' + postDate.getHours() + ':' + postDate.getMinutes() + ':' + postDate.getSeconds();
            galleryTime.textContent = `Here since: ${postDateFormat}`;
            galleryTime.classList.add('card-footer');
            galleryTime.classList.add('bg-transparent');
            galleryTime.classList.add('text-danger');
            galleryTime.classList.add('text-muted');

            galleryDiv.appendChild(galleryTitle);
            galleryDiv.appendChild(galleryText);
            galleryDiv.appendChild(galleryTime);

            if (user.email==email) {
                documentContent.appendChild(galleryDiv);
                getEmailActualUser().then(emailActual => {
                    if (email==emailActual) {
                        getNicknameActualUser().then(nickname => {
                            titleDocument.textContent = nickname;
                            getPosts(nickname);
                        });
                    } else {
                        titleDocument.textContent = user.nickname;
                        getPosts(user.nickname);
                    }
                });
            }
        });
    })
    .catch(error => {
        console.log('Error getting documents', error);
    });
}
// Get myProfile

// Get home
function getHome(actualUserConnected) {
    getHomeMostPoster('poster', actualUserConnected);
    getHomeMostPoster('new', actualUserConnected);
    getHomeForm(actualUserConnected);
}
// Get home

// Get home most poster
function getHomeMostPoster(filter, actualUserConnected) {
    let count = 0;
    docUserR.get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const user = doc.data();
            getNicknameMostPoster()
            .then(nicknames => {
                const nickname = getNicknameMostRepeated(nicknames);
                count++;
                if ((user.nickname==nickname && filter=='poster' ) || (count==1 && filter=='new')) {
                    const user = doc.data();

                    const homeCard = document.createElement('div');
                    homeCard.classList.add('card');
                    homeCard.classList.add('border-primary');
                    homeCard.classList.add('m-5');
                    homeCard.classList.add('bg-dark');
                    homeCard.classList.add('text-light');
                    homeCard.style.maxWidth = '30rem';
                    homeCard.style.maxHeight = '30rem';
        
                    const homeImage = document.createElement('img');
                    if (user.hasOwnProperty("photo")) {
                        var path = user.photo;
                        homeImage.src = path;
                        homeImage.classList.add('imgGallery');
                        homeImage.classList.add("card-img-top");
                        homeImage.style.maxWidth = '10rem'
                    }
        
                    const homeCardBody = document.createElement('div');
                    homeCardBody.classList.add('card-body');
        
                    const homeTitle = document.createElement('h5');
                    homeTitle.textContent = user.name;
                    homeTitle.classList.add('card-title');
                    homeTitle.classList.add('bg-transparent');
                    homeTitle.classList.add('border-danger');
                    homeTitle.classList.add('fs-2');
                    if (user.rol==2) {
                        // const homeVeryfied = document.createElement('p');
                        // homeVeryfied.textContent = '👾';
                        // homeTitle.appendChild(homeVeryfied);
                        homeTitle.style.fontFamily = 'papyrus';
                    }
        
                    const homeText = document.createElement('p');
                    homeText.textContent = `${user.description}`;
                    homeText.classList.add('card-text');
        
                    const homeFooter = document.createElement('div');
        
                    const homeTime = document.createElement('small');
                    const homeDate = user.time.toDate();
                    const postDateFormat = homeDate.getDate() + '/' + (homeDate.getMonth() + 1) + '/' + homeDate.getFullYear() + ' ' + homeDate.getHours() + ':' + homeDate.getMinutes() + ':' + homeDate.getSeconds();
                    homeTime.textContent = `Here since: ${postDateFormat}`;
                    homeTime.classList.add('card-footer');
                    homeTime.classList.add('bg-transparent');
                    homeTime.classList.add('text-muted');
        
                    homeCardBody.appendChild(homeTitle);
                    homeCardBody.appendChild(homeText);
        
                    homeFooter.appendChild(homeTime);
                    if (actualUserConnected) {
                        const homeProfileButton = document.createElement('button');
                        homeProfileButton.textContent = "Profile";
                        homeProfileButton.classList.add('btn');
                        homeProfileButton.classList.add('btn-primary');
                        homeProfileButton.classList.add('col-6');
                        homeProfileButton.classList.add('mx-auto');
                        homeProfileButton.type = 'submit';
                        homeProfileButton.onclick = (event) => {
                            event.preventDefault();
                            changeContent('anotherProfile');
                            getProfile(user.email);
                        }

                        homeFooter.appendChild(homeProfileButton);
                    } 
        
                    homeCard.appendChild(homeImage);
                    homeCard.appendChild(homeCardBody);
                    homeCard.appendChild(homeFooter);
        
                    documentContent.appendChild(homeCard);
                }
            })
            .catch(error => {
                console.log('Error getting documents', error);
            });
        });
    })
    .catch(error => {
        console.log('Error getting documents', error);
    });
}
// Get home most poster

// Get nickname more poster 
function getNicknameMostPoster() {
    return new Promise((resolve, reject) => {
        let nicknames = [];
        docPost.get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                const post = doc.data();
                nicknames.push(post.nickname);
            });
            resolve(nicknames);
        })
        .catch(error => {
            reject(error);
        });
    });
}

// Get nickname most repeated
function getNicknameMostRepeated(nicknames) {
    let nameCounts = {};
    let mostFrequentName = "";
    let maxCount = 0;

    // Create an object with the count of each name
    nicknames.forEach(function(name) {
        if (nameCounts[name]) {
          nameCounts[name]++;
        } else {
          nameCounts[name] = 1;
        }
    });
  
    // Iterate through the object to find the most frequent name
    for (let name in nameCounts) {
        if (nameCounts[name] > maxCount) {
            mostFrequentName = name;
            maxCount = nameCounts[name];
        }
    }
  
    return mostFrequentName;
}
// Get nickname most repeated

// Get nickname actual user
function getNicknameActualUser(){
    const email = firebase.auth().currentUser.email;
    // Actualizar la descripcion en el documento específico
    const collectionRef = firebase.firestore().collection('users');
    return collectionRef.where("email", "==", email).get().then(function(querySnapshot) {
        return querySnapshot.docs[0].data().nickname;
    });
}
// Get nickname actual user

// Get rol actual user
function getRolActualUser(){
    const email = firebase.auth().currentUser.email;
    // Actualizar la descripcion en el documento específico
    const collectionRef = firebase.firestore().collection('users');
    return collectionRef.where("email", "==", email).get().then(function(querySnapshot) {
        return querySnapshot.docs[0].data().rol;
    });
}
// Get rol actual user

// Get rol
function getRolWithEmail(nickname){
    // Actualizar la descripcion en el documento específico
    const collectionRef = firebase.firestore().collection('users');
    return collectionRef.where("nickname", "==", nickname).get().then(function(querySnapshot) {
        return querySnapshot.docs[0].data().rol;
    });
}
// Get rol

// Get email actual user
function getEmailActualUser(){
    const email = firebase.auth().currentUser.email;
    // Actualizar la descripcion en el documento específico
    const collectionRef = firebase.firestore().collection('users');
    return collectionRef.where("email", "==", email).get().then(function(querySnapshot) {
        return querySnapshot.docs[0].data().email;
    });
}
// Get email actual user

// Get all emails
async function getAllEmailUsers() {
    let emails = [];
    try {
        const snapshot = await docUser.get();
        snapshot.docs.forEach(doc => {
            const user = doc.data();
            const email = user.email;
            emails.push(email);
        });
        return emails;
    } catch (error) {
        console.log('Error getting documents', error);
    }
}

// Get all emails

// Get Form
function getHomeForm(actualUserConnected) {
    docForm.get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            const form = doc.data();

            const formDiv = document.createElement('div');
            formDiv.style.paddingLeft = '10rem';
            formDiv.style.paddingRight = '10rem';

            const formForm = document.createElement('form');
            formForm.id = 'form';

            const formFormDiv = document.createElement('div');

            const formH3 = document.createElement('h3');
            formH3.textContent = form.title;

            const formH4 = document.createElement('h4');
            formH4.textContent = form.description;

            const formDivDiv = document.createElement('div');
            formDivDiv.setAttribute('style', 'text-align: left;');

            const formProgress = document.createElement('progress');
            formProgress.max = '100';
            const percent = (form.yes.length * 100)/(form.no.length + form.yes.length);
            formProgress.value = `${percent}`;

            const formDivDivDiv = document.createElement('div');
            formDivDivDiv.id = 'form-button';

            formDivDiv.appendChild(formProgress);
            formFormDiv.appendChild(formH3);
            formFormDiv.appendChild(formH4);
            formFormDiv.appendChild(formDivDiv);
            formForm.appendChild(formFormDiv);
            if (actualUserConnected) {
                getEmailActualUser().then(email => {
                    if (!form.yes.includes(email) && !form.no.includes(email)) {
                        const formButtonNo = document.createElement('div');

                        formButtonNo.textContent = form.optionOne;
                        formButtonNo.classList.add('buttonStyle');
                        formButtonNo.setAttribute('type', 'button');
                        formButtonNo.setAttribute('style', '--clr:#b92727');
                        formButtonNo.setAttribute('onclick', `updateForm('no', '${doc.id}');`);
            
                        const formButtonSi = document.createElement('div');
                        formButtonSi.textContent = form.optionTwo;
                        formButtonSi.classList.add('buttonStyle');
                        formButtonSi.setAttribute('type', 'button');
                        formButtonSi.setAttribute('style', '--clr:#b1f45f');
                        formButtonSi.setAttribute('onclick', `updateForm('si', '${doc.id}');`);

                        formDivDivDiv.appendChild(formButtonSi);
                        formDivDivDiv.appendChild(formButtonNo);
                        formForm.appendChild(formDivDivDiv);
                    }

                    getRolActualUser().then(rol => {
                        if (rol==0) {
        
                            const stadisticsDivH3No = document.createElement('h3');
                            stadisticsDivH3No.textContent = `${form.optionOne}: ${form.no.length}`;
        
                            const stadisticsDivH3Yes = document.createElement('h3');
                            stadisticsDivH3Yes.textContent = `${form.optionTwo}: ${form.yes.length}`;
        
                            getAllEmailUsers().then(users => { 
                                const percentTotal = ((form.no.length + form.yes.length) * 100)/users.length;;
                                const stadisticsDivH3Percent = document.createElement('h3');
                                stadisticsDivH3Percent.textContent = `Percent of total votes: ${percentTotal}%`;
        
                                formForm.appendChild(stadisticsDivH3No);
                                formForm.appendChild(stadisticsDivH3Yes);
                                formForm.appendChild(stadisticsDivH3Percent);
                            });
                        }
                    });
                });
            }
            formDiv.appendChild(formForm);
            documentContent.appendChild(formDiv);
        });
    });
    
}
// Get Form

// Get functions


// Edit functions

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
                    deletePostsUser();
                    changeContent('myProfile');
                });
            });
        });
    })
    .catch(error => {
    console.error(error);
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
      console.log("Post editado con ID: ", id);
      deleteElementsPost();
      getPosts('all');
    })
    .catch(function(error) {
      console.error("Error al editar el post: ", error);
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
                        console.log("Post editado con ID: ", id);
                        changeContent('home');
                    })
                    .catch(function(error) {
                        console.error("Error al editar el post: ", error);
                    });
                } else {
                    emails = form.no;
                    emails.push(email);
                    db.collection("forms").doc(id).update({
                        no: emails,
                    })
                    .then(function() {
                        console.log("Post editado con ID: ", id);
                        changeContent('home');
                    })
                    .catch(function(error) {
                        console.error("Error al editar el post: ", error);
                    });
                }
            });
        });
    });
}
// Update form

// Edit functions


// Delete functions

// Delete posts
function deleteElementsPost(){
    while (documentContent.firstChild) {
       documentContent.firstChild.remove()
   }
}
// Delete posts

// Delete navbar
function deleteElementsNavbar(){
    while (navbar.firstChild) {
       navbar.firstChild.remove()
   }
}
// Delete navbar

// Delete posts
function deleteElementsPost(){
    while (documentContent.firstChild) {
       documentContent.firstChild.remove();
   }
}
// Delete posts

// Delete alerts
function deleteElementsAlert(){
    const documentAlert = document.getElementById('alertContent');
    while (documentAlert.firstChild) {
        documentAlert.firstChild.remove();
    }
}
// Delete alerts

//Delete post
function deletePostsUser(id) {
    const postId = id; // ID del documento a eliminar
    const postsRef = firebase.firestore().collection("posts");
    const postDocRef = postsRef.doc(postId);
    
    postDocRef.delete().then(() => {
        console.log("Document successfully deleted!");
        deleteElementsPost();
        getPosts('all');
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });   
}
//Delete post


// Disabled alert
function disableAlert(emails, id) {
    db.collection("alerts").doc(id).update({
        emails: emails
      })
      .then(function() {
        console.log("Post editado con ID: ", id);
        deleteElementsAlert();
        showAlerts();
      })
      .catch(function(error) {
        console.error("Error al editar el post: ", error);
      });
}
// Disabled alert

// Delete functions