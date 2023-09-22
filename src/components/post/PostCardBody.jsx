import { NavLink } from "react-router-dom";
import { Time } from "../atoms/Time";

function PostCardBody({ post, children }) {
  return (
    <>
      <NavLink
        to={`/post/${post?.id}`}
        className="flex flex-col gap-3 hover:text-zinc-400"
      >
        <h3 className="text-xl font-semibold leading-6 ">{post?.title}</h3>
        <p className=" line-clamp-3 leading-6 ">{post?.description}</p>
      </NavLink>

      <div className="flex justify-between items-center text-zinc-300 w-full">
        <Time time={post?.createdAt} />
        <div className="flex items-center gap-3 pr-3 ">{children}</div>
      </div>
    </>
  );
}

export default PostCardBody;
