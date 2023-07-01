// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { getStorage } from "firebase/storage";


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


const auth = getAuth();
const storage = getStorage();


export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.jpg');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
}
