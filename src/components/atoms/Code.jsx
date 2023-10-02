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
                    PostList.jsx
                  </div>
                  <div className="border-r border-zinc-600/10 px-4 py-2">
                    App.jsx
                  </div>
                </div>
              </div>
              <div className="px-6 pb-14 pt-6">
                <pre className="text-[0.8125rem] leading-6 text-zinc-300">
                  <div className="mb-6">
                    import {<span className="text-[#7dd3fc]">useState</span>}{" "}
                    from <span className="text-emerald-300">'react'</span>;
                    <br />
                    import {
                      <span className="text-[#7dd3fc]">Post</span>
                    } from <span className="text-emerald-300">'./Post'</span>
                    ;
                    <br />
                  </div>
                  <span className="text-sky-400 ">
                    <span className="text-purple-500">export default</span> function{" "}
                    <span className="text-yellow-200">Example () {"{"}</span>
                  </span>
                  <br /> <span className="text-sky-400 ">const</span>{" "}
                  <span className="text-purple-500">[</span>
                  <span className="text-[#7dd3fc]">posts</span>,{" "}
                  <span className="text-yellow-200">setPosts</span>
                  <span className="text-purple-500">]</span> =
                  <span className="text-yellow-200"> useState</span>
                  <span className="text-purple-500"> (</span>
                  <span className="text-[#7dd3fc]">null</span>
                  <span className="text-purple-500">)</span>;
                  <br />
                  <br /> <span className="text-purple-500">return</span>{" "}
                  <span className="text-purple-500">(</span>
                  <br /> &lt;<span className="text-sky-400">ul</span>&gt; <br />
                  {"   "} <span className="text-sky-500"> {"{"}</span>
                  <span>posts.</span>
                  <span className="text-yellow-200">map(</span>
                  <span className="text-purple-500">(</span>
                  <span>post</span>
                  <span className="text-purple-500">)</span>
                  <span className="text-sky-400">{"=>"}</span>
                  <span className="text-purple-500">(</span>
                  <br />
                  {"       "} &lt;<span className="text-sky-400">li</span>{" "}
                  <span className="text-emerald-300">key</span>=
                  <span className="text-sky-400">{"{"}</span>
                  <span className="text-emerald-300">post.id</span>
                  <span className="text-sky-400">{"}"}</span> &gt;
                  <br />
                  {"         "} &lt;
                  <span className="text-emerald-500">Post</span> {""}
                  <span className="text-sky-300">post</span>=
                  <span className="text-sky-500">{"{"}</span>
                  <span className="text-sky-300">post</span>
                  <span className="text-sky-500">{"}"} </span>
                  /&gt;
                  <br />
                  {"       "} &lt;/<span className="text-sky-400">li</span>&gt;
                  <br />
                  {"    "} <span className="text-purple-500">)</span>
                  <span className="text-yellow-200">)</span>
                  <span className="text-sky-500">{"}"} </span>
                  <br /> &lt;/<span className="text-sky-400">ul</span>&gt;{" "}
                  <br />
                  <span className="text-yellow-400">{"}"} </span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
