import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9e1F-rJs6fSrUEm1PCkHi_JYfDbWY6Qg",
  authDomain: "eb-generator.firebaseapp.com",
  projectId: "eb-generator",
  storageBucket: "eb-generator.appspot.com",
  messagingSenderId: "671989415751",
  appId: "1:671989415751:web:cf68feb46885105e12d662",
  measurementId: "G-NWSGDBZRT9"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const googleProvider= new GoogleAuthProvider();