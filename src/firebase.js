// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdnLGxgO_ORgIVZ9QOIcDwO5wTqJcrC1k",
  authDomain: "e-commerse-caba6.firebaseapp.com",
  projectId: "e-commerse-caba6",
  storageBucket: "e-commerse-caba6.appspot.com",
  messagingSenderId: "955743465655",
  appId: "1:955743465655:web:ad27d98e1387b5622d1d32",
  measurementId: "G-SZF5NVMJ77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
