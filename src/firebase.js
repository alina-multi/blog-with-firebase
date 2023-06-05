// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";





// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKUaZI1MzzETrYa6uQoEAFzbhpFOKcR8k",
  authDomain: "blog-c9a2d.firebaseapp.com",
  projectId: "blog-c9a2d",
  storageBucket: "blog-c9a2d.appspot.com",
  messagingSenderId: "775287889939",
  appId: "1:775287889939:web:c5919b3a8272fd5d23dfe6",
  measurementId: "G-2HJRKMHXRF"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const postsRef = collection(db, 'posts');
export const commentsRef = collection(db, 'comments');
