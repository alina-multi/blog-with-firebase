import Code from "../components/atoms/Code";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-zinc-800   lg:h-screen lg:w-3/4 w-full lg:ml-auto  ">
        <div className="mx-auto max-w-7xl  lg:grid lg:grid-cols-2 lg:gap-x-8 pt-32 lg:pt-40  lg:px-8 overflow-hidden">
          <div className="max-lg:px-6">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg leading-8 text-zinc-300 text-lg">
                <h1 className="text-4xl  tracking-tight text-zinc-200 sm:text-4xl">
                  Unleash your Reactivity
                </h1>
                <p className="mt-6"> Hello! I'm glad to see you here! </p>
                <p className="mt-3 ">Read posts and share your own ideas.</p>
                <p>
                  {" "}
                  To get started I suggest you{" "}
                  <NavLink to="/signup" className="text-sky-500 font-bold">
                    register
                  </NavLink>{" "}
                  . It's quick - just a couple of moments, you just need to come
                  up with a name, email and password.
                </p>
                <p>
                  You can also view the site without logging in or view the code
                  on GitРub.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <NavLink
                    to="/posts"
                    className="rounded-sm bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Go to Posts
                  </NavLink>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/alina-multi/blog-with-firebase"
                    className="text-sm font-semibold leading-6 text-zinc-300"
                  >
                    View code on GitHub
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-zinc-900 shadow-xl shadow-sky-600/10 ring-1 ring-zinc-700 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />

            <Code />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-zinc-800 sm:h-32 " />
      </div>
    </>
  );
}
