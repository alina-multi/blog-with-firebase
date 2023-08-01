import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { findError } from "./authErrorCodes";
import {auth} from '../firebase';
import {
    createUserWithEmailAndPassword,
    updateProfile
  } from "firebase/auth";

export const login = async (email, password, setError) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const message = findError(error);
    setError(message);
  }
};

export const register = async (email, password, username, setError ) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await updateProfile(user, { displayName: username });
      } catch (error) {
         const message = findError(error)
         setError(message);
          
        
      }
    };

    export const logout = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error(error);
      }
    };


