// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe7Lg6oUexJtki_YLpEmz0XNVHMiRYSKE",
  authDomain: "realtor-clone-react-fd512.firebaseapp.com",
  projectId: "realtor-clone-react-fd512",
  storageBucket: "realtor-clone-react-fd512.appspot.com",
  messagingSenderId: "233209176599",
  appId: "1:233209176599:web:51cee1715377bf70187252",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
