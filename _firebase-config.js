// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXp-gRzNeqR217KboUKqlVrW8T8GJPJaU",
  authDomain: "development-73311.firebaseapp.com",
  projectId: "development-73311",
  storageBucket: "development-73311.appspot.com",
  messagingSenderId: "423204187986",
  appId: "1:423204187986:web:31b732c07e3e5f357a948b",
  measurementId: "G-3XWVFMYVGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
