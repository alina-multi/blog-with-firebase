import { useState, useEffect, useContext } from "react";
import fetchPost from "../../helpers/fetchPost";
import { Time } from "../atoms/Time";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";
import { useParams } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { updateProfileData } from "../../utils/handleProfile";
import { postsRef } from "../../firebase";


export default function MyPost({ postId }) {
  const [post, setPost] = useState([]);
    const [isMy, setIsMy] = useState(false)
  const { currentUser, dispatch } = useContext(AuthContext);

//  const isMy = currentUser.posts.some()
let {profileId} = useParams()


  useEffect(() =>  {


if ( currentUser && profileId === currentUser.uid) {
  setIsMy(true)
}

    
   fetchPost(postId).then((post) => {
        setPost(post);
        });

  }, [postId]);




  const deletePost = async (id) => {
    const response = await deleteDoc(doc(postsRef, id));
    const posts = currentUser.posts.filter((postId) => postId !== id);

    updateProfileData({ posts: [...posts] }, dispatch);
    response && alert("Post deleted");
  };

  return (
    <div className="flex gap-3 flex-col space-x-3  border-b border-zinc-700 px-6 py-9 shadow-sm focus-within:ring-2 ">
      {/* <div>
        <p className="text-2xl font-bold ">{post?.title}</p>
        <p className="truncate text-sm text-zinc-400"> {post?.description}</p>
        <p className="truncate text-lg font-semibold mt-3">
          {" "}
          Published posts: <Time time={post?.createdAt} />
        </p>
      </div> */}

        <NavLink
            to={`/post/${post.id}`}
            className="flex flex-col gap-3 hover:text-zinc-400 px-3"
          >
            <h3 className="text-xl font-semibold leading-6 ">{post.title}</h3>
            <p className=" line-clamp-6 leading-6 ">{post.description}</p>
          </NavLink>

       <div className="flex justify-between items-center text-zinc-300">
           <Time time={post?.createdAt} />
            <div className="flex gap-3 items-center  pr-6">
                {isMy && (
                  <>
                    <NavLink
                      to={`/editpost/${post.id}`}
                      onClick={() => deletePost(post.id)}
                      className="z-20 hover:text-sky-400 text-zinc-400 text-sm font-bold  "
                    >
                      Edit Post
                    </NavLink>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="z-20 hover:text-red-500 text-zinc-400 text-sm font-bold  "
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
       </div>
         
          
         
    </div>
  );
}


