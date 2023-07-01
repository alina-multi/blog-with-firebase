import { Fragment } from "react";
import { Popover, Transition  } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon,  } from '@heroicons/react/20/solid'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



export default function PopoverMenu () {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
       navigate(`/login`);
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <Popover className="relative">
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 ">
          Account
          <ChevronDownIcon className="h-5 w-5 flex-none " aria-hidden="true" />
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
          <Popover.Panel className="absolute -left-6 top-full z-10 mt-3 w-36 rounded-xl bg-indigo-500 p-2 shadow-lg ring-1 ring-gray-900/5">
            {/* {account.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))} */}

           <NavLink
             to={`/profile/${user.uid}`}
             className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6  hover:bg-indigo-400"
            >
              My Profile
            </NavLink>

              <NavLink
             to={`/editprofile/${user.uid}`}
             className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6  hover:bg-indigo-400"
            >
              Edit Profile
            </NavLink>

            <button
                onClick={handleSignOut}
                className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 hover:bg-indigo-400"
              >
                Logout<span aria-hidden="true">&rarr;</span>
              </button>
          

          </Popover.Panel>
        </Transition>
      </Popover>
    )

}


