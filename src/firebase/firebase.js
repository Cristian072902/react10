// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";
import { getStorage, ref, uploadBytes} from "firebase/storage";
import { getFirestore, addDoc, collection, getDoc, getDocs, query, where, setDoc, deleteDoc, updateDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-jagHqFC6tHf9aU_JfZu8_dcR4_jIngI",
  authDomain: "proy-react-app10.firebaseapp.com",
  projectId: "proy-react-app10",
  storageBucket: "proy-react-app10.appspot.com",
  messagingSenderId: "979486406929",
  appId: "1:979486406929:web:81cac0480c012bac9634b0",
  measurementId: "G-HV6TDG5V0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);
