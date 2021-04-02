import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAalRlEhztGFTMU_w9RL1-3BMiujnC-Wic",
    authDomain: "job-portal-a30cf.firebaseapp.com",
    projectId: "job-portal-a30cf",
    storageBucket: "job-portal-a30cf.appspot.com",
    messagingSenderId: "659142791499",
    appId: "1:659142791499:web:2650fbdc64755e73dd58ce",
    measurementId: "G-RZRJYS0WKB"
  };
const fire = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const Auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
export default fire;