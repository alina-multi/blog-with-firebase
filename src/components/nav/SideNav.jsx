import { NavLink } from "react-router-dom";
import NavigationList from "./NavigationList";

export default function SideNav() {
  return (
    <header className="hidden lg:flex w-1/4 h-screen border-r border-zinc-700 p-6 fixed top-0 left-0  flex-col items-center ">
      <NavLink to="/" className="mx-auto">
        <span className="sr-only">React Blog</span>
        <img
          src={require("../../images/react.png")}
          alt="hero"
          className="w-44 mx-auto"
        />
      </NavLink>
      <nav className="flex flex-col items-center  mt-9 " aria-label="Global">
        <div className="hidden lg:flex  flex-col  gap-8">
          <NavigationList />
        </div>
      </nav>
    </header>
  );
}
