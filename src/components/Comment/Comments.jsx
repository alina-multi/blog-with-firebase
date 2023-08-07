import React, { useEffect, useState } from 'react';
import { onSnapshot, query, where, orderBy } from "firebase/firestore";
import { commentsRef } from '../../firebase';
import Comment from './Comment';


function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  

  useEffect(() => {
    const q = query(
      commentsRef,
      where('postId', '==', postId),
      // orderBy('createdAt', 'desc')
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

  // const deleteComment = async (id) => {
  //   const commentDoc = doc(db, 'comments', id);
  //   await deleteDoc(commentDoc);
  // };

  return (
<>
      {comments.map((comment) => (
        <ul key={comment.id} >
         <Comment comment={comment} />
        </ul>
      ))}
</>
  );
}

export default Comments;
