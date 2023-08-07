import { Fragment, useContext,  } from "react";
import { Popover, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import { AuthContext } from "../store/AuthContext";

const options = [
  { name: "My Profile", href: "/profile" },
  { name: "Edit Profile", href: "/editprofile" },
];

export default function PopoverMenu() {
  const navigate = useNavigate();
  const { currentUser,dispatch} = useContext(AuthContext);


  const logOut = async () => {
    logout(dispatch);
    navigate("/login");
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-x-1  font-semibold leading-6 text-zinc-900">
            <span className="sr-only">Open user menu</span>
            <span > {currentUser?.firstName || "Wizard"}</span>
            <img
            src={currentUser?.photoURL}
            alt=""
            className="h-10 w-10 rounded-full bg-zinc-400"
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
            <Popover.Panel className="absolute -right-3 top-full z-10 mt-3 w-36 rounded-xl bg-sky-500  shadow-lg ring-1 ring-zinc-900/5 overflow-hidden">
              {options.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="block  px-6 py-3 text-sm font-semibold leading-6 hover:bg-sky-400 border-b border-zinc-900/30"
                >
                  {item.name}
                </NavLink>
              ))}

              <button
                onClick={logOut}
                className="flex w-full  px-6 py-3 text-sm font-semibold leading-6 hover:bg-sky-400"
              >
                Log Out<span aria-hidden="true">&rarr;</span>
              </button>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
