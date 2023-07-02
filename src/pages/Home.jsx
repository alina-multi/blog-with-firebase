import React, { useState, useEffect } from 'react';
import Posts from '../components/Post/Posts';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { postsRef } from '../firebase';


export default function Home() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const posts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(posts);
        });
    
        return () => unsubscribe();
      }, []);

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
        });
    
        return () => unsubscribe();
      }, []);
    

  return (
    <div>
      <Posts posts={posts} user={user}/>
    </div>
  );
}

