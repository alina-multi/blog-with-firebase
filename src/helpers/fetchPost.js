import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function fetchPost(postId) {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const post = docSnap.data();
        return { ...post, id: docSnap.id }
     
      } else {

        return null;
      }
    }