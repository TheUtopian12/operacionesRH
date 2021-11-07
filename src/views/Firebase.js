import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDIehBTLsnQjgL_oPG0YkjpxkpzMlmPbDg",
    authDomain: "pruebarh-4996f.firebaseapp.com",
    databaseURL: "https://crud-firebase-4996f.firebaseio.com",
    projectId: "pruebarh-4996f",
    storageBucket: "pruebarh-4996f.appspot.com",
    messagingSenderId: "534071002931",
    appId: "1:534071002931:web:11e27ac72818fbcef2a046"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings(settings);

export default firebase;
  