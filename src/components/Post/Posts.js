import React from "react";
import Post from "../../Post";
import Comments from "../../Comments";
import CommentForm from "../../CommentForm";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';

function Posts({ posts, user }) {
  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  }


  return (<div className=" py-24 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
         <div className="text-center"> <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Random Posts
          </h2>
          </div>

          <ul className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
      {posts.map((post) => (
        <li key={post.id}>
            <Post post={post} />
            
          {/* <Comments postId={post.id} />
          {user && <CommentForm postId={post.id} user={user} />}
          {user && <button onClick={() => deletePost(post.id)}>Delete Post</button>}  */}
        </li>
      ))}  </ul>
        </div>
      </div>
      </div>
  
  )
}

export default Posts;
