import React, { useState, useEffect } from "react";
import { addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { postsRef } from "./firebase";
import Container from "./Container";

function App() {
  const [usersList, setUsersList] = useState(null);

  // const addPost = (title, content) => {
  //   addDoc(postsRef, {
  //     title,
  //     content,
  //     createdAt: serverTimestamp(),
  //   });
  // };

  return (
    <div>
      <Container />
      {/* <Posts posts={posts} user={user} /> */}
    </div>
  );
}

export default App;

// {user ? (
//   <>
//     <SignOut />
//     <PostForm addPost={addPost} />
//     <Posts posts={posts} user={user} />
//   </>
// ) : (
//  <div>
// <SignUp/>
//   <SignIn/>
// </div>
// )}
