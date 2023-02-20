// JavaScript code to handle post submission
const contentForm = document.getElementById('post-form');
const contentInput = document.getElementById('post-input');
const documentContent = document.getElementById('postContent');
const navbar = document.getElementById('navbar');
const docPost = firebase.firestore().collection('posts').orderBy("time", "desc");
const docUser = firebase.firestore().collection('users').orderBy("name", "asc");
const docUserTime = firebase.firestore().collection('users').orderBy("time", "desc");
const docAlert = firebase.firestore().collection('alerts').orderBy("time", "desc");
const docForm = firebase.firestore().collection('forms').orderBy("time", "desc");
let emails;