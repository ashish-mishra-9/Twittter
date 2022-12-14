// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB75w_4p0xe4vqaAH5cyQSG4FPJcwBtcDg",
  authDomain: "twitter-6d9b9.firebaseapp.com",
  projectId: "twitter-6d9b9",
  storageBucket: "twitter-6d9b9.appspot.com",
  messagingSenderId: "989657352299",
  appId: "1:989657352299:web:39d910b7dbeebcca8e492e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
