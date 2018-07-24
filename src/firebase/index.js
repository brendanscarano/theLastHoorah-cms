import firebase from "firebase";
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBqTZS1mi79Jtve7HK7vAwCbyG4TiA1a-A",
  authDomain: "the-lash-hoorah.firebaseapp.com",
  projectId: "the-lash-hoorah"
});

export default firebase;
