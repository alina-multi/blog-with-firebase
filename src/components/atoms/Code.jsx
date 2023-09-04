

export default function Code() {
  return (
    <div className="shadow-lg md:rounded-3xl ">
            <div className="bg-sky-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.sm))]">
              <div
                className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-zinc-800 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                aria-hidden="true"
              />
    <div className="relative px-6 pt-8 sm:py-12 md:pl-12 md:pr-0">
    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
      <div className="w-screen overflow-hidden  bg-zinc-900">
        <div className="flex bg-zinc-800/40 ring-1 ring-white/5">
          <div className="-mb-px flex text-sm font-medium leading-6 text-zinc-400">
            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-zinc-100">
              NotificationSetting.jsx
            </div>
            <div className="border-r border-zinc-600/10 px-4 py-2">
              App.jsx
            </div>
          </div>
        </div>
        <div className="px-6 pb-14 pt-6">
          <pre className="text-[0.8125rem] leading-6 text-zinc-300">
            <div className="mb-6">
              import{" "}
              {<span className="text-[#7dd3fc]">useState</span>}{" "}
              from <span className="text-emerald-300">'react'</span>;
              <br />
              import{" "}
              {
                <span className="text-[#7dd3fc]">Switch</span>
              } from{" "}
              <span className="text-emerald-300">
                '@headlessui/react'
              </span>;
              <br />
            </div>
            <span className="text-sky-400 ">
              function Example
            </span>
            () {"{"}
            <br />
            {" "} const = [<span className="text-[#7dd3fc]">enabled</span>
            , <span className="text-[#7dd3fc]">setEnabled</span>] =
            useState(<span className="text-[#7dd3fc]">true</span>)
            <br />

            <br />
            {" "} return (<br />
            {" "}    &lt;<span className="text-sky-400">form</span>{" "}
            action="/
            <span className="text-emerald-300">
              notification-settings
            </span>
            " method="<span className="text-emerald-300">post</span>
            "&gt; <br />
            {"   "}   &lt;
            <span className="text-sky-400">Switch</span> <br />
            {"        "}  checked=
            {<span className="text-[#7dd3fc]">enabled</span>} <br />
            onChange=
            {
              <span className="text-[#7dd3fc]">setEnabled</span>
            }{" "}
            <br />
            name="
            <span className="text-emerald-300">notifications</span>
            "&gt;
            <br />
            {<span className="text-zinc-500">{"/* ... */"} </span>}
            <br />
            &lt;/<span className="text-sky-400">Switch</span>&gt;
            <br />
            &lt;<span className="text-sky-400">button</span>
            &gt;Submit&lt;/
            <span className="text-sky-400">button</span>&gt;
            <br /> &lt;/
            <span v="text-sky-400">form</span>&gt; ){"}"}
          </pre>
        </div>
      </div>
    </div>
 
  </div>
    </div>
          </div> 
  );
}


