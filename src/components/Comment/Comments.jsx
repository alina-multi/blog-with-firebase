import React, { useEffect, useState, useContext } from "react";
import { onSnapshot, query, where, orderBy } from "firebase/firestore";
import { commentsRef } from "../../firebase";
import Comment from "./Comment";
import { AuthContext } from "../../store/AuthContext";
import CommentForm from "./CommentForm";
import NoComments from "./NoComments";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [newComment, setNewComment] = useState(null);

  useEffect(() => {
    const q = query(
      commentsRef,
      where("postId", "==", postId),
      orderBy("createdAt", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const comments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(comments);
    });

    return () => unsubscribe();
  }, [postId]);

  return (
    <div className=" space-y-3 ">
      {currentUser && (
        <div className="mx-16 pb-6">
          <CommentForm postId={postId} setNewComment={setNewComment} />
        </div>
      )}

      <p className="font-semibold text-lg mx-16 leading-4 "> Comments</p>
      <div className="mx-16 space-y-6 border rounded-sm  p-6 border-zinc-800  bg-zinc-800/20">
        {comments.length > 0 ? (
          <ul className="space-y-6">
            {comments.map((comment) => (
              <li key={comment.id}>
                <Comment
                  comment={comment}
                  newComment={newComment}
                  setNewComment={setNewComment}
                />
              </li>
            ))}
          </ul>
        ) : (
          <NoComments />
        )}
      </div>
    </div>
  );
}

export default Comments;
