import { useState, useContext } from "react";
import { Dialog } from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

import PopoverMenu from "./Popover";
import { AuthContext } from "../store/AuthContext";


const navigation = [
  { name: "HOME", href: "/" },
  { name: "ALL POSTS", href: "/posts" },
  { name: "ABOUT", href: "/about" },
];

export default function Header() {
  const { currentUser } = useContext(AuthContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-1/4 h-screen border-r border-zinc-700 p-6 fixed top-0 left-0 flex flex-col items-center justify-between" >

        <NavLink
            to="/"
            className="mx-auto"
          >
            <span className="sr-only">React Blog</span>
            <img
            src={require("../images/react.png")}
            alt="hero"
            className="w-3/5 mx-auto"
            />
          </NavLink>
      <nav
        className="flex flex-col items-center justify-between "
        aria-label="Global"
      >
     
       
      
       
        {/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div> */}


        <div className="hidden lg:flex  flex-col items-center gap-6">

        
        
     
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className=" font-semibold leading-6 text-white"
            >
              {item.name}
            </NavLink>
          ))}
       
    
         </div>

     
      </nav>
    

    <div class="h-1/3 flex items-end">
    <div class="">  Footer</div>
    </div>
    </header>
  );
}


    //  <NavLink
    //           to="/login"
    //           className=" font-semibold leading-6 text-white"
    //         >
    //           Login
    //         </NavLink>
    //         <NavLink
    //           to="/signup"
    //           className="font-semibold leading-6 text-white"
    //         >
    //           Sign Up<span aria-hidden="true">&rarr;</span>
    //         </NavLink>
    //         </>
    //     )}

// return (
//   <header className="w-1/4 h-screen border-r border-zinc-700 p-6 fixed top-0 left-0" >
//     <nav
//       className="mx-auto flex flex-col items-center justify-between "
//       aria-label="Global"
//     >
   
     
//         <NavLink
//           to="/"
//           className="text-sm font-semibold leading-6 text-white"
//         >
//           <span className="sr-only">React Blog</span>
//           <img
//           src={require("../images/react.png")}
//           alt="hero"
//           className="w-4/5"
//           />
//         </NavLink>
     
//       {/* <div className="flex lg:hidden">
//         <button
//           type="button"
//           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
//           onClick={() => setMobileMenuOpen(true)}
//         >
//           <span className="sr-only">Open main menu</span>
//           <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//         </button>
//       </div> */}


//       <div className="hidden lg:flex  flex-col">
//         {navigation.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.href}
//             className="text-sm font-semibold leading-6 text-white"
//           >
//             {item.name}
//           </NavLink>
//         ))}
//       </div>
//       {currentUser ? (
//         <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1 lg:gap-x-12">
//           <NavLink
//             to={`/addpost`}
//             className="text-sm font-semibold leading-6 text-white"
//           >
//             <span className="flex gap-1">
//               Add Post
//               <PlusCircleIcon className="h-6 w-6 text-green-600" />
//             </span>
//           </NavLink>
//           <PopoverMenu />
//         </div>
//       ) : (
//         <div className="hidden lg:flex flex-col">
//           <NavLink
//             to="/login"
//             className="text-sm font-semibold leading-6 text-white"
//           >
//             Login
//           </NavLink>
//           <NavLink
//             to="/signup"
//             className="text-sm font-semibold leading-6 text-white"
//           >
//             Sign Up<span aria-hidden="true">&rarr;</span>
//           </NavLink>
//         </div>
//       )}
//     </nav>
//     <Dialog
//       as="div"
//       className="lg:hidden"
//       open={mobileMenuOpen}
//       onClose={setMobileMenuOpen}
//     >
//       <div className="fixed inset-0 z-10" />
//       <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
//         <div className="flex items-center justify-between">
//           <a href="/" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <img
//               className="h-8 w-auto"
//               src="https://tailwindui.com/img/logos/mark.svg?color=sky&shade=500"
//               alt=""
//             />
//           </a>
//           <button
//             type="button"
//             className="-m-2.5 rounded-md p-2.5 text-zinc-400"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             <span className="sr-only">Close menu</span>
//             <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <div className="mt-6 flow-root">
//           <div className="-my-6 divide-y divide-zinc-500/25">
//             <div className="space-y-2 py-6">
//               {navigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//             <div className="py-6">
//               <a
//                 href="/login"
//                 className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-zinc-800"
//               >
//                 Log in
//               </a>
//             </div>
//           </div>
//         </div>
//       </Dialog.Panel>
//     </Dialog>
//   </header>
// );