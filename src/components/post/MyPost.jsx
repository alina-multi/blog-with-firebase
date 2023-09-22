import { useState, useEffect, useContext } from "react";
import fetchPost from "../../helpers/fetchPost";
import { AuthContext } from "../../store/AuthContext";
import { useParams } from "react-router-dom";
import PostCardBody from "./PostCardBody";

import EditPostButton from "./EditPostButton";
import DeletePostButton from "./DeletePostButton";

export default function MyPost({ postId }) {
  const [post, setPost] = useState(null);
  const [isMy, setIsMy] = useState(false);
  const { currentUser } = useContext(AuthContext);

  let { profileId } = useParams();

  useEffect(() => {
    if (currentUser && profileId === currentUser.uid) {
      setIsMy(true);
    }

    fetchPost(postId).then((post) => {
      setPost(post);
    });
  }, [currentUser, postId, profileId]);

  return (
    post && (
      <div className="space-y-3 border-b border-zinc-700 px-9 py-6 shadow-sm ">
        <PostCardBody post={post}>
          {isMy && (
            <>
              <EditPostButton postId={postId} />{" "}
              <DeletePostButton postId={postId} />
            </>
          )}
        </PostCardBody>
      </div>
    )
  );
}
