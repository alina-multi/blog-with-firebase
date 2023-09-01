import { NavLink } from "react-router-dom";

export function UserInline({ user }) {
  return (
     <NavLink
    to={`/profile/${user?.uid}`}
   className="flex items-center gap-x-4 hover:underline">
    <img
      src={user?.photoURL}
      alt=""
      className="h-10 w-10 rounded-full bg-zinc-400"
    />

    <p className="font-semibold text-sm leading-6">
      {user?.displayName}
    </p>
  </NavLink>
  );
}