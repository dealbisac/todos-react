import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBWH5o2EXfkeTUdP-XoMuIDVjyI3AvgPLo",
    authDomain: "todo-app-003.firebaseapp.com",
    databaseURL: "https://todo-app-003.firebaseio.com",
    projectId: "todo-app-003",
    storageBucket: "todo-app-003.appspot.com",
    messagingSenderId: "168998344030",
    appId: "1:168998344030:web:ca6e2cfb705c3aa3afebcf",
    measurementId: "G-0G8TLQL636"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
