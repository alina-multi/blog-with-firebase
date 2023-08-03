import { useEffect, useState, useContext } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import {  postsRef } from "../../firebase";
import CommentForm from "../Comment/CommentForm";
import Comments from "../Comment/Comments";
import { AuthContext } from "../../store/AuthContext";
import {
  ChatBubbleBottomCenterTextIcon,
  BookmarkIcon,
  BookmarkSlashIcon,
} from "@heroicons/react/24/outline";
import  {fetchUser} from '../../utils/auth';



function Post({ post }) {
  const { currentUser } = useContext(AuthContext);
  const [showComments, setShowComments] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [author, setAuthor] = useState(null);
  const [isMyPost, setIsMyPost] = useState(false);



useEffect(() => {

   fetchUser(post.authorID).then((user) => setAuthor(user));
    setIsMyPost(post?.authorID === currentUser?.uid);

}, []);


  const deletePost = async (id) => {
    const response = await deleteDoc(doc(postsRef, id));
    response && console.log("Post deleted");
  };

  const onCommentButton = () => {
    if (!currentUser) {
      alert("You must be logged in to comment");
      return;
    }
    setShowComments((prev) => !prev);
  };

  const onBookmarkButton = () => {
    if (!currentUser) {
      alert("You must be logged in to bookmark");
      return;
    }
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div class="w-full space-y-6">
      <article className="w-full flex flex-col gap-3 ">
        <div className="flex justify-between  ">
          <a href="/" className="flex items-center gap-x-4">
            <img
              src={author?.photoURL}
              alt=""
              className="h-10 w-10 rounded-full bg-gray-400"
            />

            <p className="font-semibold text-sm leading-6 text-gray-300">
              {author?.displayName}
            </p>
          </a>

          {isMyPost && (
            <button
              onClick={() => deletePost(post.id)}
              className=" hover:bg-gray-800 text-red-600 text-xs font-bold py-2 px-4 rounded-full"
            >
              Delete
            </button>
          )}
        </div>


        <div className="flex flex-col gap-3  ">
          <h3 className="text-xl font-semibold leading-6 ">{post.title}</h3>
          <p className=" line-clamp-3 leading-6 text-gray-300">
            {post.description}
          </p>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-400">
          <time>
            {post.createdAt.toDate().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div className="flex items-center gap-3">
            {/* <button
          onClick={onCommentButton}
         className="bg-white/10 rounded-full px-3 py-1 font-semibold border border-gray-700 "></button> */}
            {/* <BookmarkIcon className="h-6 w-6 text-gray-400" aria-hidden="true" /> */}

            <button onClick={onCommentButton}>
              <ChatBubbleBottomCenterTextIcon
                className="h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
            </button>
            <button onClick={onBookmarkButton}>
              {isBookmarked ? (
                <BookmarkSlashIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              ) : (
                <BookmarkIcon
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </article>

      <Comments postId={post.id} showComments={showComments} />

      {showComments && (
        <div className="">
          <CommentForm postId={post.id} />
        </div>
      )}
    </div>
  );
}

export default Post;


        {/* <img
        src={
          post.author.imageUrl
            ? post.author.imageUrl
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }
        alt=""
        className="h-10 w-10 rounded-full bg-gray-50"
      />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.author.name}</p>
      <p>{post.id}</p>
      <p>{post.href}</p>
      <p></p> */}