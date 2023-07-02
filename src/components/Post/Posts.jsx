import React from "react";
import Post from "./Post";



function Posts({ posts }) {
  

  return (
        
        <div className="mx-auto max-w-2xl">
         

          <ul className="mt-6 divide-y-4 divide-gray-900">
      {posts.map((post) => (
        <li key={post.id} className="flex flex-col items-start justify-between bg-white/5 p-6 ">
      
          <Post post={post} />
        
           
        </li>
      ))}  </ul>

        </div>
 
  
  
  )
}

export default Posts;
