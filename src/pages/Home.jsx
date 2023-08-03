import React, { useState, useEffect } from 'react';
import Posts from '../components/Post/Posts';
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { postsRef, usersRef } from '../firebase';




export default function Home() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const posts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(posts);
        });

        console.log(posts);
    
        return () => unsubscribe();
      }, []);

  

   
    

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}

