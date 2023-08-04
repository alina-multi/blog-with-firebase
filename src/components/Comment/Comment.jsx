import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/AuthContext";
import { fetchUser } from "../../utils/auth";

export default function Commment ({comment}) {
    const { currentUser } = useContext(AuthContext);
    const [author, setAuthor] = useState(null);
    const [isMy, setIsMy] = useState(false);

  

    useEffect(() => {

        fetchUser(comment.authorID).then((user) => setAuthor(user));
         setIsMy(comment?.authorID === currentUser?.uid);
     
     }, [ comment, currentUser?.uid]);



    const deleteComment = async (id) => {
        const commentDoc = doc(db, 'comments', id);
        await deleteDoc(commentDoc);
      };
    return (
        <div  className='flex items-center'>
        <img
          src={comment.photo}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-400"
        />
        <p>{comment.username}: {comment.text}</p>
        <button onClick={() => deleteComment(comment.id)}>Delete Comment</button>
      </div>
    );

}