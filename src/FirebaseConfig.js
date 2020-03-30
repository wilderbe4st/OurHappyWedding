import firebase from 'firebase/app'
// ##Firebase Config
var config = {
    apiKey: "AIzaSyDa7CC4YP3XhltD_H0J-_ejAeUeAJb6yYE",
    authDomain: "our-happy-wedding.firebaseapp.com",
    databaseURL: "https://our-happy-wedding.firebaseio.com",
    projectId: "our-happy-wedding",
    storageBucket: "our-happy-wedding.appspot.com",
    messagingSenderId: "431313660561",
    appId: "1:431313660561:web:5d15635b472321238c6d30",
    measurementId: "G-91S1MLF1HP"
  };
  firebase.initializeApp(config);

export default firebase;

// export {firebaseapp}