import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { findError } from "./authErrorCodes";
import { auth, usersRef } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

import { getDoc } from "firebase/firestore";

export const fetchUser = async (uid) => {
  const docSnap = await getDoc(doc(usersRef, uid));
  let user = {};

  if (docSnap.exists()) {
    user = docSnap.data();
  } else {
    console.log("No such document!");
  }

  return user;
};

const creatUsersCollection = (user, username) => {
  const payload = {
    uid: user.uid,
    displayName: username,
    email: user.email,
    photoURL: user.photoURL,
    createdAt: user.metadata.creationTime,
    firstName: "",
    lastName: "",
    posts: [],
  };

  setDoc(doc(usersRef, user.uid), payload);

  return payload;
};

export const login = async (email, password, setError, dispatch) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      fetchUser(userCredential.user.uid).then((data) => {
        dispatch({ type: "LOGIN", payload: data });
      });
    })
    .catch((error) => {
      const message = findError(error);
      setError(message);
    });
};

export const register = async (
  email,
  password,
  username,
  setError,
  dispatch
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const payload = creatUsersCollection(userCredential.user, username);
      dispatch({ type: "LOGIN", payload });
    })
    .catch((error) => {
      const message = findError(error);
      setError(message);
    });
};

export const logout = async (dispatch) => {
  signOut(auth)
    .then(() => {
      dispatch({ type: "LOGOUT" });
    })
    .catch((error) => {
      console.log(error);
    });
};
