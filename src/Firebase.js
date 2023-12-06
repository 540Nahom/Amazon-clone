import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClzFFRrAgcTVxz-WbGP0oOmAvYqm8XQVw",
  authDomain: "clone-a1923.firebaseapp.com",
  projectId: "clone-a1923",
  storageBucket: "clone-a1923.appspot.com",
  messagingSenderId: "104866327943",
  appId: "1:104866327943:web:d2aaca44d486e9d7663722",
  measurementId: "G-MPTBX7P8BG",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db }; // Export both auth and db?/

// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyClzFFRrAgcTVxz-WbGP0oOmAvYqm8XQVw",
//   authDomain: "clone-a1923.firebaseapp.com",
//   projectId: "clone-a1923",
//   storageBucket: "clone-a1923.appspot.com",
//   messagingSenderId: "104866327943",
//   appId: "1:104866327943:web:d2aaca44d486e9d7663722",
//   measurementId: "G-MPTBX7P8BG",
// };
// const firebaseApp = firebase.initalizeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db,auth };
