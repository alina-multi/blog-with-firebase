import React, { useState } from 'react';
import { addDoc } from "firebase/firestore";
import { commentsRef } from '../../firebase';
import { serverTimestamp } from "firebase/firestore";

function CommentForm({ postId, user }) {
  const [text, setText] = useState('');

  const addComment = async (e) => {
    e.preventDefault();
    try {
      await addDoc(commentsRef, {
        postId,
        text,
        username: user.displayName,
        createdAt: serverTimestamp(),
      });
      setText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={addComment}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        required
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default CommentForm;
