// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGeu87_WPqQkG9bf-QQKcG5Uwe9b9zRho",
  authDomain: "netflix-gpt-bb570.firebaseapp.com",
  projectId: "netflix-gpt-bb570",
  storageBucket: "netflix-gpt-bb570.appspot.com",
  messagingSenderId: "22712581342",
  appId: "1:22712581342:web:b564977543be63504f564f",
  measurementId: "G-NDK8P03LVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



 export const auth = getAuth();