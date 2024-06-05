import firebase from "firebase/compat/app";
// auth
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKveHz_t6liewhqtrdX_f_yEMpdxr0QFM",
  authDomain: "clone-a9ab0.firebaseapp.com",
  projectId: "clone-a9ab0",
  storageBucket: "clone-a9ab0.appspot.com",
  messagingSenderId: "280812329550",
  appId: "1:280812329550:web:68d323cb4bb63bfbbf011f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()