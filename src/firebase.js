// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_JfTleXurBPx_K761ht_dMaq8DDEzH60",
  authDomain: "netflix-demo-diyorbek.firebaseapp.com",
  projectId: "netflix-demo-diyorbek",
  storageBucket: "netflix-demo-diyorbek.appspot.com",
  messagingSenderId: "1089282133975",
  appId: "1:1089282133975:web:d67d6e9cff97f93c670592",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
