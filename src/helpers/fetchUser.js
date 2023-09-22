import { usersRef } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export const fetchUser = async (uid) => {
  const docSnap = await getDoc(doc(usersRef, uid));
  let user = {};

  if (docSnap.exists()) {
    user = docSnap.data();
  } else {
  }

  return user;
};
