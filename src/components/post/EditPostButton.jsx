import { NavLink } from "react-router-dom";

function EditPostButton({ postId }) {
  return (
    <NavLink
      to={`/editpost/${postId}`}
      className="z-20 hover:text-sky-400 text-zinc-300 text-sm font-semibold  px-2 py-1 shadow-xl  bg-zinc-800 rounded-sm"
    >
      Edit Post
    </NavLink>
  );
}

export default EditPostButton;
