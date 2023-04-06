// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbl_akdi9rUGMgfKgGGA1yT5BFWD-0Wv4",
  authDomain: "realtor-clone-with-firebase.firebaseapp.com",
  projectId: "realtor-clone-with-firebase",
  storageBucket: "realtor-clone-with-firebase.appspot.com",
  messagingSenderId: "871797113252",
  appId: "1:871797113252:web:d9127f17917e241da44131",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
