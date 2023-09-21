import { useState, useEffect } from "react";
import fetchPost from "../../helpers/fetchPost";
import { Time } from "../atoms/Time";

export default function MyPost({ postId }) {
  const [post, setPost] = useState([]);


  useEffect(() =>  {
   fetchPost(postId).then((post) => {
console.log(post);
        setPost(post);
        });

  }, [postId]);

  return (
    <div className="flex items-center space-x-3  border-b border-zinc-700 px-6 py-9 shadow-sm focus-within:ring-2 ">
      <div>
        <p className="text-2xl font-bold ">{post?.title}</p>
        <p className="truncate text-sm text-zinc-400"> {post?.description}</p>
        <p className="truncate text-lg font-semibold mt-3">
          {" "}
          Published posts: <Time time={post?.createdAt} />
        </p>
      </div>
    </div>
  );
}


