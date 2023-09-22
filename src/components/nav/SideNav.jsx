import { NavLink, useLocation } from "react-router-dom";
import {
  CommandLineIcon,
  GlobeAsiaAustraliaIcon,
  HomeIcon,
  EnvelopeIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "../../helpers/classNames";

const navigation = [
  { name: "HOME", href: "/", icon: HomeIcon },
  { name: "ALL POSTS", href: "/posts", icon: GlobeAsiaAustraliaIcon },
  { name: "AUTHORS", href: "/authors", icon: AcademicCapIcon },
  { name: "ABOUT", href: "/about", icon: CommandLineIcon },
  { name: "CONTACT", href: "/contact", icon: EnvelopeIcon },
];

export default function SideNav() {
  const location = useLocation();

const { pathname } = location;
const path = pathname.split("/")[1];

console.log(path)
  return (
    <header className="hidden lg:flex w-1/4 h-screen border-r border-zinc-700 p-6 fixed top-0 left-0  flex-col items-center ">
      <NavLink to="/" className="mx-auto">
        <span className="sr-only">React Blog</span>
        <img
          src={require("../../images/react.png")}
          alt="hero"
          className="w-3/5 mx-auto"
        />
      </NavLink>
      <nav className="flex flex-col items-center  mt-9 " aria-label="Global">
        <div className="hidden lg:flex  flex-col  gap-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={classNames(`/${path}` === item.href ? "text-sky-300 ": " text-zinc-100", "font-semibold leading-6  text-lg ")}
           
            >
              <span className="flex gap-3">
             
                <item.icon className={classNames(`/${path}` === item.href ? "text-sky-300 ": " text-zinc-100", "h-6 w-6 ")}/>
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* <div className="h-1/3 flex items-end">
        <div className=""> Footer</div>
      </div> */}
    </header>
  );
}
