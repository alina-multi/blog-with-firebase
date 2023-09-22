import { deleteDoc, doc } from "firebase/firestore";
import { postsRef } from "../../firebase";
import { updateProfileData } from "../../helpers/handleProfile";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

function DeletePostButton({ postId }) {
  const { currentUser, dispatch } = useContext(AuthContext);
  
  async function deletePost(e) {
    e.preventDefault();
    const response = await deleteDoc(doc(postsRef, postId));
    const newPosts = currentUser.posts.filter((id) => id !== postId);
    updateProfileData({ posts: [...newPosts] }, dispatch);
    response && toast.success("Post deleted");
  }

  return (
    <button
      onClick={deletePost}
      className="z-20 hover:text-red-500 text-zinc-400 text-sm font-bold  "
    >
      Delete
    </button>
  );
}

export default DeletePostButton;
