import React, { useState, useContext, useRef} from 'react';
import { AuthContext } from '../../store/AuthContext';
import { addDoc } from "firebase/firestore";
import { commentsRef } from '../../firebase';
import { serverTimestamp } from "firebase/firestore";
import Input from '../atoms/Input';


function CommentForm({ postId, setIsNewComment }) {
  const [text, setText] = useState('');
  const {currentUser} = useContext(AuthContext);
 



  const addComment = async (e) => {
    e.preventDefault();
    try {
      await addDoc(commentsRef, {
        postId,
        text,
        authorID: currentUser.uid,
        createdAt: serverTimestamp(),
        photo: currentUser.photoURL,
        
      });
      setText('');
      setIsNewComment(true);
      console.log("Comment added");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center gap-3">
    <a href={`/${currentUser?.uid}`} className="h-16 w-16 rounded-full bg-zinc-400 overflow-hidden shrink-0">
    <img
      src={currentUser?.photoURL}
      alt=""
      className="h-16 w-16 rounded-full "
    />
    </a>
    <form onSubmit={addComment} className="flex w-full justify-between items-center gap-6">

    <textarea
          placeholder="Add a comment..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="comment"
          name="comment"
          required
          className="block w-full rounded-sm border-0 bg-white/5 py-1.5 text-zinc-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
        />
      <button type="submit" className='border-1 px-6 py-1 ring-2 ring-sky-600 rounded-sm bg-sky-600'>Post</button>
    </form>
</div>
  );
}

export default CommentForm;
