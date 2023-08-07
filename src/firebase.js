// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "blog-c9a2d.firebaseapp.com",
  projectId: "blog-c9a2d",
  storageBucket: "blog-c9a2d.appspot.com",
  messagingSenderId: "775287889939",
  appId: "1:775287889939:web:c5919b3a8272fd5d23dfe6",
  measurementId: "G-2HJRKMHXRF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const postsRef = collection(db, "posts");
export const commentsRef = collection(db, "comments");
export const usersRef = collection(db, "users");

export const auth = getAuth();
export const storage = getStorage();

