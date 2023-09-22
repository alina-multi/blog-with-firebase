import { auth } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { usersRef } from "../firebase";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export async function updateProfileData(payload, dispatch) {
  const user = auth.currentUser;

  await updateProfile(user, payload);
  const userDoc = doc(usersRef, user.uid);

  const res = setDoc(userDoc, payload, { merge: true });
  res &&
    dispatch({
      type: "UPDATE_PROFILE",
      payload,
    });

  return res;
}

export async function upload(file, currentUser) {
  const fileRef = ref(storage, "avatar/" + currentUser.uid + ".jpg");
  await uploadBytes(fileRef, file);
  let url = await getDownloadURL(fileRef);

  return url;
}
