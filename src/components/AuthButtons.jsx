import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { NavLink } from "react-router-dom";
import PopoverMenu from "../components/Popover";
import {
    Bars3Icon,
    XMarkIcon,
    PlusCircleIcon,
  } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";


export default function AuthButtons() {
    const { currentUser } =  useContext(AuthContext);
    return (
        <div className="flex items-center gap-6">
        {!currentUser &&  
            <>  <NavLink
                 to="/login"
                 className=" font-semibold leading-6 text-white"
               >
                 Login
               </NavLink>
               <NavLink
                 to="/signup"
                 className="font-semibold leading-6 text-white"
               >
                 Sign Up<span aria-hidden="true">&rarr;</span>
               </NavLink>
               </>
            }
   
           {currentUser &&  <div className="flex items-center gap-6">
               <NavLink
                 to={`/addpost`}
                 className="flex items-center gap-1 border-sky-300 border bg-sky-300 text-zinc-900 px-4 leading-4  rounded-full py-1.5  font-medium"
               >
                 <span >
                   Add Post
                   </span>
                   {/* <PlusCircleIcon className="h-6 w-6 text-sky-400 " /> */}
             
               </NavLink>

           <div>
            <PopoverMenu />
           </div>

               
               </div>}  
               </div>
    );
}