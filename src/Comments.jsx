import React, { useEffect, useState } from 'react';
import { onSnapshot, query, where, orderBy } from "firebase/firestore";
import { commentsRef } from './firebase';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from './firebase';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const q = query(
      commentsRef,
      where('postId', '==', postId),
      orderBy('createdAt', 'desc')
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

  const deleteComment = async (id) => {
    const commentDoc = doc(db, 'comments', id);
    await deleteDoc(commentDoc);
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.username}: {comment.text}</p>
          <button onClick={() => deleteComment(comment.id)}>Delete Comment</button>
        </div>
      ))}
    </div>
  );
}

export default Comments;
