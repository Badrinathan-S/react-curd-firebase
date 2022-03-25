

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-d_E8ZvmMfwZV_I077jzP1cuerkeaPKg",
  authDomain: "react-todo-list-298c8.firebaseapp.com",
  projectId: "react-todo-list-298c8",
  storageBucket: "react-todo-list-298c8.appspot.com",
  messagingSenderId: "561297251363",
  appId: "1:561297251363:web:746f2f6a6d961f0cbfe596"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);

export default fireDb.database().ref();