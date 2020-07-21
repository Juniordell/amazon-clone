import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8HSNohuxEYLJTHhLifskHxqTMunVrtRE",
    authDomain: "clone-23392.firebaseapp.com",
    databaseURL: "https://clone-23392.firebaseio.com",
    projectId: "clone-23392",
    storageBucket: "clone-23392.appspot.com",
    messagingSenderId: "358194064094",
    appId: "1:358194064094:web:dd3dd985e1cabebcb1304f",
    measurementId: "G-GP6Q0RN5S5"
})

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }