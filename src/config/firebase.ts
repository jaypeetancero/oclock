import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiW7_pYniNv8RPK4G0OTIHduI3N6Ute1s",
  authDomain: "oclock-2c926.firebaseapp.com",
  databaseURL: "https://oclock-2c926.firebaseio.com",
  projectId: "oclock-2c926",
  storageBucket: "oclock-2c926.appspot.com",
  messagingSenderId: "727104658963",
  appId: "1:727104658963:web:a7f1a18e3a7db5a31669e6",
  measurementId: "G-4NPL6E99GG",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
