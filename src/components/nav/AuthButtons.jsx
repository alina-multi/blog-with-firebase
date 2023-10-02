import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { NavLink, useLocation } from "react-router-dom";
import UserPopover from "./UserPopover";
import { classNames } from "../../helpers/classNames";

export default function AuthButtons() {
  const { currentUser } = useContext(AuthContext);

  const buttons = [
    { name: "Sign In", path: "login" },
    { name: "   Sign Up", path: "signup" },
  ];

  const location = useLocation();

  const { pathname } = location;
  const path = pathname.split("/")[1];
  return (
    <div className="flex items-center gap-6 ">
      {!currentUser && (
        <>
          {buttons.map((button) => (
            <NavLink
              key={button.name}
              to={`/${button.path}`}
              className={classNames(
                path === button.path
                  ? "border-zinc-600 text-zinc-300"
                  : " border-sky-600  bg-sky-600 shadow-2xl hover:border-sky-500 hover:bg-sky-500",
                " border font-semibold leading-6 text-zinc-100 rounded-sm  px-4 py-1"
              )}
            >
             {button.name}
            </NavLink>
          ))}
        </>
      )}

      {currentUser && (
        <div className="flex items-center gap-6">
          <div>
            <UserPopover />
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
