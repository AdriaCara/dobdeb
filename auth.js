// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6nGbb3aaS-To1F6WsM7uiXe2-NkO2O8w",
  authDomain: "dabdeb-e72a9.firebaseapp.com",
  databaseURL: "https://dabdeb-e72a9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dabdeb-e72a9",
  storageBucket: "dabdeb-e72a9.appspot.com",
  messagingSenderId: "922763214488",
  appId: "1:922763214488:web:074c2fdba3ebb219e21aed",
  measurementId: "G-92DD6N64CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);