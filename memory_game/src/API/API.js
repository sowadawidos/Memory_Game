import firebase from "firebase"

export const app = firebase.initializeApp({
    apiKey: "AIzaSyC8wgMOTtf1rLl_45EnhyjNkLP4ZVsu6gY",
    authDomain: "memorycard-game-d38a6.firebaseapp.com",
    projectId: "memorycard-game-d38a6",
    storageBucket: "memorycard-game-d38a6.appspot.com",
    messagingSenderId: "24165533630",
    appId: "1:24165533630:web:4b9cdc3ff28b19f46d5bef"
})

export const db = app.firestore()
export default app
