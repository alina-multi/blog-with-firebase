import React, { useState, useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { addDoc } from "firebase/firestore";
import { commentsRef } from "../../firebase";
import { serverTimestamp } from "firebase/firestore";
import TextArea from "../form/TextArea"

function CommentForm({ postId, setNewComment }) {
  const [text, setText] = useState("");
  const { currentUser } = useContext(AuthContext);




  const addComment = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(commentsRef, {
        postId,
        text,
        authorID: currentUser.uid,
        createdAt: serverTimestamp(),
        photo: currentUser.photoURL,
      });
      setNewComment(docRef.id);
      setText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center gap-3 ">
      <a
        href={`/${currentUser?.uid}`}
        className="h-16 w-16 rounded-full bg-zinc-400 overflow-hidden shrink-0"
      >
        <img
          src={currentUser?.photoURL}
          alt=""
          className="h-16 w-16 rounded-full "
        />
      </a>
      <form
        onSubmit={addComment}
        className="flex w-full  items-center gap-6"
      >
        <TextArea
        value={text}
        setValue={setText}
        rows="2"
        placeholder="Add a comment..."
        id="comment"
        name="comment"
        required={true}
        label={false}
        />
  
        <button
          type="submit"
          className="flex-none border-1 px-6 py-1 ring-2 ring-sky-600 rounded-sm bg-sky-600"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
