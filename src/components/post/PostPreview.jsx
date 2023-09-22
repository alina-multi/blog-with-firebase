import { useEffect, useState, useContext } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { postsRef } from "../../firebase";
import { UserInline } from "../user/UserInline";
import { Time } from "../atoms/Time";
import { AuthContext } from "../../store/AuthContext";
import { BookmarkButton } from "../atoms/BoormarkButton";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { fetchUser } from "../../helpers/fetchUser";
import { NavLink } from "react-router-dom";
import { updateProfileData } from "../../utils/handleProfile";
import toast from "react-hot-toast";

import { HashLink as Link } from "react-router-hash-link";

function Post({ post }) {
  const { currentUser, dispatch } = useContext(AuthContext);
  const [author, setAuthor] = useState(null);
  const [isMyPost, setIsMyPost] = useState(false);

  useEffect(() => {
    fetchUser(post.authorID).then((user) => setAuthor(user));
    setIsMyPost(post?.authorID === currentUser?.uid);
  }, [post, currentUser?.uid]);

  const deletePost = async (id) => {
    const response = await deleteDoc(doc(postsRef, id));
    const posts = currentUser.posts.filter((postId) => postId !== id);
    console.log(posts);
    updateProfileData({ posts: [...posts] }, dispatch);
    response && alert("Post deleted");
  };

  const notLoggined = () => {
    toast("SIGN IN to comment");
  };
  return (
    <>
 
      <div className="w-full space-y-6 py-6 px-9 0">
        <div className="w-full flex flex-col gap-3 ">
          <div className="flex justify-between  ">
            <div className="flex gap-3 items-center ">
              <UserInline user={author} />
              <div className="flex gap-3 items-center border-l pl-3">
                {isMyPost && (
                  <>
                    {/* <NavLink
                      to={`/editpost/${post.id}`}
                      onClick={() => deletePost(post.id)}
                      className="z-20 hover:text-sky-400 text-zinc-400 text-sm font-bold  "
                    >
                      Edit Post
                    </NavLink> */}
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

          <NavLink
            to={`/post/${post.id}`}
            className="flex flex-col gap-3 hover:text-zinc-400"
          >
            <h3 className="text-xl font-semibold leading-6 ">{post.title}</h3>
            <p className=" line-clamp-3 leading-6 ">{post.description}</p>
          </NavLink>

          <div className="flex justify-between items-center text-zinc-300">
            <Time time={post?.createdAt} />
            <div className="flex items-center gap-3 pr-3">
              {currentUser ? (
                <Link to={`/post/${post.id}#addComment`}>
                  {" "}
                  <ChatBubbleBottomCenterTextIcon
                    className="h-6 w-6 "
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <button type="button" onClick={notLoggined}>
                  <ChatBubbleBottomCenterTextIcon
                    className="h-6 w-6 "
                    aria-hidden="true"
                  />
                </button>
              )}

              <BookmarkButton isMyPost={isMyPost} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
