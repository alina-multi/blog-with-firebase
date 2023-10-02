import { Disclosure } from "@headlessui/react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavigationList from "./NavigationList";

export default function MobileSideNav() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open, close }) => (
        <>
          <Disclosure.Button className="fixed top-0 left-0 z-50 h-20 px-6 hidden max-lg:flex items-center  justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XMarkIcon
                className="h-10 w-10 text-zinc-100"
                aria-hidden="true"
              />
            ) : (
              <Bars4Icon
                className="h-10 w-10 text-zinc-100"
                aria-hidden="true"
              />
            )}
          </Disclosure.Button>

          <Disclosure.Panel className="fixed top-0 left-0 z-50 bg-zinc-900 max-sm:w-full w-2/3 mt-20 h-screen border-r border-zinc-700 shadow-2xl lg:hidden">
            <div className="flex max-sm:justify-center  pt-12 text-lg  sm:pl-9">
              <div className="flex flex-col gap-9">
                <NavigationList close={close} />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
