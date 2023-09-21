import { Fragment, useContext,  } from "react";
import { Popover, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import { AuthContext } from "../store/AuthContext";
import {PencilSquareIcon, HomeModernIcon, PowerIcon} from '@heroicons/react/20/solid';




export default function PopoverMenu() {
  const navigate = useNavigate();
  const { currentUser,dispatch} = useContext(AuthContext);
  const options = [
    { name: "My Profile", href: `/profile/${currentUser.uid}`, icon: HomeModernIcon },
    { name: "Edit Profile", href: "/editprofile", icon: PencilSquareIcon },
  ];


  const logOut = async () => {
    logout(dispatch);
    navigate("/login");
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-x-6  font-semibold leading-6 text-zinc-100 ring-0">
            <span className="sr-only">Open user menu</span>
            <span > {currentUser?.displayName || "Wizard"}</span>
            <img
            src={currentUser?.photoURL || "https://media.tenor.com/O7iUTKsWo4gAAAAC/space-cat.gif"}
            alt=""
            className="h-12 w-12 rounded-full bg-zinc-400 object-cover"
          />

            
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -right-3 top-full z-10 mt-4 w-44 rounded-sm bg-sky-500  shadow-lg ring-1 ring-zinc-900/5 overflow-hidden">
              {options.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="block  px-6 py-3 text-sm font-semibold leading-6 hover:bg-sky-400 border-b border-zinc-900/30"
                >

                <span className="flex items-center gap-x-1">
                  <item.icon className="h-5 w-5 text-zinc-100"/>
                  {item.name}
                </span>
                </NavLink>
              ))}

              <button
                onClick={logOut}
                className="flex w-full  px-6 py-3 text-sm font-semibold leading-6 hover:bg-sky-400"
              >
                <span className="flex items-center gap-x-1">
                  <PowerIcon className="h-5 w-5 text-zinc-100"/>
                  Log Out
                </span>
                
              </button>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
