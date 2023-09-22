import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { NavLink } from "react-router-dom";
import PopoverMenu from "./UserPopover";

export default function AuthButtons() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex items-center gap-6 ">
      {!currentUser && (
        <>
          {" "}
          <NavLink
            to="/login"
            className=" font-semibold leading-6 text-zinc-100 rounded-sm  px-4 py-1 border border-sky-600  bg-sky-600 shadow-md hover:border-sky-500 hover:bg-sky-500"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="font-semibold leading-6 text-zinc-100   rounded-sm  px-4 py-1 border border-sky-600  bg-sky-600 shadow-md hover:border-sky-500 hover:bg-sky-500"
          >
            Sign Up
          </NavLink>
        </>
      )}

      {currentUser && (
        <div className="flex items-center gap-6">
          <div>
            <PopoverMenu />
          </div>
          <NavLink
            to={`/addpost`}
            className="flex items-center gap-1 border-sky-400 border bg-sky-500 hover:bg-sky-600 text-zinc-100 px-4 leading-4  rounded-sm py-1.5  font-medium "
          >
            <span>Add Post</span>
          </NavLink>
        </div>
      )}
    </div>
  );
}
