import * as firebase from './Firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_XZgNGvHI_m3qlMqguNHBg8cXbMv-geQ",
  authDomain: "clothing-store-d95ba.firebaseapp.com",
  projectId: "clothing-store-d95ba",
  storageBucket: "clothing-store-d95ba.firebasestorage.app",
  messagingSenderId: "940283005634",
  appId: "1:940283005634:web:d9d9d10128eaba0fb5095b",
  measurementId: "G-VY6JW2TG5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;