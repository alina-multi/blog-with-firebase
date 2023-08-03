import React, { useState, useContext} from 'react';
import { AuthContext } from '../../store/AuthContext';
import { addDoc } from "firebase/firestore";
import { commentsRef } from '../../firebase';
import { serverTimestamp } from "firebase/firestore";
import Input from '../atoms/Input';


function CommentForm({ postId }) {
  const [text, setText] = useState('');
  const {currentUser} = useContext(AuthContext);
 


  const addComment = async (e) => {
    e.preventDefault();
    try {
      await addDoc(commentsRef, {
        postId,
        text,
        username: currentUser.displayName,
        createdAt: serverTimestamp(),
        photo: currentUser.photoURL,
        
      });
      setText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
    <a href="/" className="flex items-center gap-x-4">
    <img
      src={currentUser.photoURL}
      alt=""
      className="h-10 w-10 rounded-full bg-gray-400"
    />
    </a>
    <form onSubmit={addComment} className="flex w-full justify-between items-baseline gap-6">
      <Input type="text" 
      id="comment"
      name="comment"
      value={text} 
      setValue={setText}
      placeholder="Add a comment..." required />

      <button type="submit" className='border-1 px-6 py-1 ring-2 ring-indigo-600 rounded-md bg-indigo-600'>Post</button>
    </form>
</div>
  );
}

export default CommentForm;
