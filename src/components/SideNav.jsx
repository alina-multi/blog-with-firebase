import { NavLink } from "react-router-dom";
import { CommandLineIcon, GlobeAsiaAustraliaIcon, HomeIcon, EnvelopeIcon, AcademicCapIcon } from '@heroicons/react/20/solid';




const navigation = [
  { name: "HOME", href: "/", icon: HomeIcon },
  { name: "ALL POSTS", href: "/posts", icon: GlobeAsiaAustraliaIcon },
  { name: "AUTHORS", href: "/authors", icon: AcademicCapIcon },
  { name: "ABOUT", href: "/about", icon: CommandLineIcon },
  {name: "CONTACT", href: "/contact", icon: EnvelopeIcon },
 
];

export default function SideNav() {
  return (
    <header className="w-1/4 h-screen border-r border-zinc-700 p-6 fixed top-0 left-0 flex flex-col items-center ">
      <NavLink to="/" className="mx-auto">
        <span className="sr-only">React Blog</span>
        <img
          src={require("../images/react.png")}
          alt="hero"
          className="w-3/5 mx-auto"
        />
      </NavLink>
      <nav
        className="flex flex-col items-center  mt-16 "
        aria-label="Global"
      >
        <div className="hidden lg:flex  flex-col  gap-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className=" font-semibold leading-6 text-zinc-100 text-lg"
            >
             <span className="flex gap-3">
                <item.icon className="h-6 w-6 text-zinc-100" />
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


