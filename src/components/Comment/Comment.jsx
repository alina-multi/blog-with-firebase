import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../store/AuthContext";
import { fetchUser } from "../../utils/auth";

export default function Commment({ comment, newComment, setNewComment }) {
  const { currentUser } = useContext(AuthContext);
  const [author, setAuthor] = useState(null);
  const [isMy, setIsMy] = useState(false);

  const newCommentRef = useRef(null);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    fetchUser(comment.authorID).then((user) => setAuthor(user));
    setIsMy(comment?.authorID === currentUser?.uid);

    if (newComment) {
      newCommentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setTimeout(() => {
        setNewComment(null);
      }, 1000);
    }
  }, [comment, currentUser?.uid, newComment, setNewComment]);

  const deleteComment = async (id) => {
    const commentDoc = doc(db, "comments", id);
    await deleteDoc(commentDoc);
  };
  return (
    <div
      className={classNames(
        "flex gap-3 transition-opacity duration-500 ",
        comment.id === newComment ? "opacity-50" : "opacity-100"
      )}
      ref={newCommentRef}
    >
      <img
        src={author?.photoURL}
        alt=""
        className="h-10 w-10 rounded-full bg-zinc-400"
      />
      <div className="flex flex-col gap-2 ">
        <div className="flex items-center gap-3 ">
          <p className="leading-4 font-semibold ">{author?.displayName}</p>
          {isMy && (
            <button
              className="text-sm border-l border-zinc-700 pl-3 text-zinc-400 hover:text-red-500"
              onClick={() => deleteComment(comment.id)}
            >
              Delete{" "}
            </button>
          )}
        </div>
        <p className=" rounded-md bg-zinc-800 border border-zinc-700 max-w-max p-3">
          {comment.text}
        </p>
      </div>
    </div>
  );
}
