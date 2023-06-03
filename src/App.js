import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { onSnapshot, query, orderBy, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import PostForm from './PostForm';
import Posts from './Posts';
import SignUp from './SignUp';
import SignOut from './SignOut';
import { postsRef } from './firebase';
import SignIn from './SignIn';

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const auth = getAuth();

  const addPost = (title, content) => {
    addDoc(postsRef, {
      title,
      content,
      createdAt: serverTimestamp(),
    });
  };

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
    <div className="App">
      <h1>My Blog</h1>
      {user ? (
        <>
          <SignOut />
          <PostForm addPost={addPost} />
          <Posts posts={posts} user={user} />
        </>
      ) : (
       <div>
 <SignUp/>
        <SignIn/>
      </div>
      )}
    </div>
  );
}

export default App;
