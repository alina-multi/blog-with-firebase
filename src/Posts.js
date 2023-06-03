import React from "react";
import Post from "./Post";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from './firebase';

function Posts({ posts, user }) {
  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
            <Post post={post} />
          <Comments postId={post.id} />
          {user && <CommentForm postId={post.id} user={user} />}
          {user && <button onClick={() => deletePost(post.id)}>Delete Post</button>} 
        </li>
      ))}
    </ul>
  );
}

export default Posts;
