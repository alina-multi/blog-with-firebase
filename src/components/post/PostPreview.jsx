import { useEffect, useState, useContext } from "react";
import { UserInline } from "../user/UserInline";
import { AuthContext } from "../../store/AuthContext";
import { BookmarkButton } from "../atoms/BoormarkButton";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { fetchUser } from "../../helpers/fetchUser";
import PostCardBody from "./PostCardBody";

import toast from "react-hot-toast";

import { HashLink as Link } from "react-router-hash-link";

function Post({ post }) {
  const { currentUser } = useContext(AuthContext);
  const [author, setAuthor] = useState(null);
  const [isMyPost, setIsMyPost] = useState(false);

  useEffect(() => {
    fetchUser(post.authorID).then((user) => setAuthor(user));
    setIsMyPost(post?.authorID === currentUser?.uid);
  }, [post, currentUser?.uid]);

  const notLoggined = () => {
    toast("SIGN IN to comment");
  };
  return (
    <>
      <div className="w-full space-y-6 py-6 px-9 0">
        <div className="w-full flex flex-col gap-3 ">
          <div className="flex justify-between  ">
            <UserInline user={author} />
          </div>
          <PostCardBody post={post}>
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
          </PostCardBody>
        </div>
      </div>
    </>
  );
}

export default Post;
