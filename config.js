import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCN1Zba3gn8ODMoMUiJ98JwpE6hqrYprHQ",
    authDomain: "e-ride-7d6ef.firebaseapp.com",
    projectId: "e-ride-7d6ef",
    storageBucket: "e-ride-7d6ef.appspot.com",
    messagingSenderId: "89321879312",
    appId: "1:89321879312:web:3e8ac463ba714328471795",
    measurementId: "G-7TR0NEGZ8D"
  };

  




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


