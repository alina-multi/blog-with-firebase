import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useContext, useEffect, useState,useRef } from "react";
import { AuthContext } from "../../store/AuthContext";
import { fetchUser } from "../../utils/auth";


export default function Commment({ comment, isNewComment, setIsNewComment }) {
  const { currentUser } = useContext(AuthContext);
  const [author, setAuthor] = useState(null);
  const [isMy, setIsMy] = useState(false);


  // const newComment = useRef(null);




  useEffect(() => {
    fetchUser(comment.authorID).then((user) => setAuthor(user));
    setIsMy(comment?.authorID === currentUser?.uid);
console.log("inComment", isNewComment);
  }, [comment, currentUser?.uid]);

  const deleteComment = async (id) => {
    const commentDoc = doc(db, "comments", id);
    await deleteDoc(commentDoc);
  };
  return (
    <div className="flex  gap-3 ">
      <img
        src={author?.photoURL}
        alt=""
        className="h-10 w-10 rounded-full bg-zinc-400"
      />
      <div class="flex flex-col gap-2 ">
<div className="flex items-center gap-3 ">  
      <p class="leading-4 font-semibold ">{author?.displayName}</p>
      {isMy && (
        <button className="text-sm border-l border-zinc-700 pl-3 text-zinc-400 hover:text-red-500" onClick={() => deleteComment(comment.id)}>Delete </button>
      )}
      </div>
        <p className=" rounded-md bg-zinc-800 border border-zinc-700 max-w-max p-3">
          {comment.text}
        </p>
      </div>

    
    </div>
  );
}
