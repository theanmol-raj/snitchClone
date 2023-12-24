// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDUV6t2WqOo_RA_H3QQzsDfyCf-WXQIl8",
  authDomain: "chatgpt-54d8f.firebaseapp.com",
  projectId: "chatgpt-54d8f",
  storageBucket: "chatgpt-54d8f.appspot.com",
  messagingSenderId: "957536160490",
  appId: "1:957536160490:web:880440eab9f396385fe593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const db = getFirestore(app);



export { auth ,provider ,db }
export default app ;