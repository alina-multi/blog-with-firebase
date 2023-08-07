import Post from "./Post";
import { useState } from "react";



function Posts({ posts }) {
  const [activePost, setActivePost] = useState(null);


  return (<>

         

          <ul >
      {posts.map((post) => (
        <li key={post.id} className="flex flex-col items-start justify-between bg-zinc-200  border-b  border-zinc-800">
      
          <Post post={post}  activePost={activePost} setActivePost={setActivePost} />
        
           
        </li>
      ))}  </ul>

</>
 
  
  
  )
}

export default Posts;
