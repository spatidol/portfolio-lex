import firebase from 'firebase'

// Leave out Storage
//require("firebase/storage");

var config = {
  apiKey: "AIzaSyBaNT8FSnlNLHSJA5Nn4a7tpCBR8oP0QpA",
  authDomain: "lexa-13dc4.firebaseapp.com",
  databaseURL: "https://lexa-13dc4.firebaseio.com",
  projectId: "lexa-13dc4",
  storageBucket: "",
  messagingSenderId: "883104110096"
};
firebase.initializeApp(config);


export default firebase
