import { deleteDoc, doc } from "firebase/firestore";
import { updateProfileData } from "./handleProfile";
import { postsRef } from "../firebase";
import { toast } from "react-hot-toast";

export const deletePost = async (id, posts, dispatch) => {
  const response = await deleteDoc(doc(postsRef, id));
  const newPosts = posts.filter((postId) => postId !== id);

  updateProfileData({ posts: [...newPosts] }, dispatch);
  response && toast.success("Post deleted");
};
