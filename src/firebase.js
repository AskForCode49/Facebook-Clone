import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC9jinydTSjqlht1kixyADS41Fs8tkvuwI",
    authDomain: "facebook-bysavio.firebaseapp.com",
    databaseURL: "https://facebook-bysavio.firebaseio.com",
    projectId: "facebook-bysavio",
    storageBucket: "facebook-bysavio.appspot.com",
    messagingSenderId: "954178709829",
    appId: "1:954178709829:web:e52b45a5cb4b6e79e6362c",
    measurementId: "G-J7LYZFE858"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db



