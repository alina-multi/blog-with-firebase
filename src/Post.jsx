import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { postsRef } from "./firebase";
import { getAuth } from "firebase/auth";

function Post({ post }) {
  const auth = getAuth();
  const user = auth.currentUser;
  let isMyPost = false;
  if (user) {
    isMyPost = user.uid === post.ownerId;
  }

  const deletePost = async (id) => {
    const response = await deleteDoc(doc(postsRef, id));
    response && console.log("Post deleted");
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.ownerId}</p>

      {isMyPost && (
        <button
          onClick={() => deletePost(post.id)}
          className="bg-gray-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default Post;
