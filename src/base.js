import * as firebase from 'firebase/app'
import "firebase/auth"
import firebaseConfig from './FirebaseConfig'

  // Initialize Firebase
const app=firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default app;
