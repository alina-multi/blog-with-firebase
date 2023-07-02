import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { useAuth, postsRef } from "../../firebase";

function Post({ post }) {
  const currentUser = useAuth();
  let isMyPost = false;

  if (currentUser) {
    isMyPost = currentUser.uid === post.author.id;
  }

  const deletePost = async (id) => {
    const response = await deleteDoc(doc(postsRef, id));
    response && console.log("Post deleted");
  };

  return (
    <article className="w-full flex flex-col gap-3 ">
    <div className="flex justify-between  ">  
    <a href="/" className="flex items-center gap-x-4">
        <img
          src={post.author.imageUrl}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-400"
        />

        <p className="font-semibold text-sm leading-6 text-gray-300">{post.author.name}</p>
      </a>

      {isMyPost && (
        <button
          onClick={() => deletePost(post.id)}
          className=" hover:bg-gray-800 text-red-600 text-xs font-bold py-2 px-4 rounded-full"
        >
          Delete
        </button>
      )}
    </div>
      {/* <img
        src={
          post.author.imageUrl
            ? post.author.imageUrl
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }
        alt=""
        className="h-10 w-10 rounded-full bg-gray-50"
      />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.author.name}</p>
      <p>{post.id}</p>
      <p>{post.href}</p>
      <p></p> */}

    
      <div className="flex flex-col gap-3  " >
        <h3 className="text-xl font-semibold leading-6 ">
       
            {post.title}
        
        </h3>
        <p className=" line-clamp-3 leading-6 text-gray-300">
          {post.description}
        </p>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-400">
      <time >
          {post.createdAt.toDate().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <button className="bg-white/10 rounded-full px-3 py-1 font-semibold border border-gray-700 ">Comment post</button>
     
      </div>

    
    </article>
  );
}

export default Post;
