
import Code from '../components/atoms/HeroCode'
import HeaderTop from '../components/HeaderTop'
import AuthButtons from '../components/AuthButtons'
import Container from '../components/Layout'

export default function Home() {
  return (
    <>
    <Container>
    <HeaderTop>
  <div className=" flex w-full justify-end">
     <AuthButtons/>
  </div>
     
      </HeaderTop>


        <div className="flex  gap-6 items-center  bg-zinc-200 h-screen text-black">
        <div className="w-1/2   px-12 ">

              
            
                <h1 className=" text-4xl font-bold tracking-tight  ">
               "Unleash your Reactivity" 
              


                {/* rocket icon */}

                  
                </h1>
                <p className="mt-6 text-lg leading-8 ">
                 Read posts from the community and share your own ideas. To get started, you’ll need to <a href="/" className="text-sky-500 font-bold">sign in</a> to your account.
                 Or <a href="/" className="text-sky-500 font-bold">sign up</a> if you don’t have an account yet.
                 You can also <a href="/" className="text-sky-500 font-bold">view posts</a> without signing in.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                    <a href="/" className="inline-flex space-x-6">
                    <span className="rounded-full bg-sky-600/10 px-3 py-1 text-sm font-semibold leading-6 text-sky-600 ring-1 ring-inset ring-sky-600/10">
                      What's new
                    </span>
                   
                  </a>
                  <a href="/" className="text-sm font-semibold leading-6 ">
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

            
     
            <div class=" bg-zinc-800  w-1/2 rounded-l-3xl my-12">
            <Code />
            </div>
            </div>
            </Container>

        </>
    // <div className="w-3/4 ml-auto">
    //   <div className="relative isolate overflow-hidden bg-sky-900">
    //     <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
    //       <div className="px-6 lg:px-0 lg:pt-4">
    //         <div className="mx-auto max-w-2xl">
    //           <div className="max-w-lg">
            
    //             <div className="mt-24 sm:mt-32 lg:mt-16">
    //               <a href="/" className="inline-flex space-x-6">
    //                 <span className="rounded-full bg-sky-600/10 px-3 py-1 text-sm font-semibold leading-6 text-sky-600 ring-1 ring-inset ring-sky-600/10">
    //                   What's new
    //                 </span>
                   
    //               </a>
    //             </div>
    //             <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    //               Supercharge your web applications
    //             </h1>
    //             <p className="mt-6 text-lg leading-8 text-gray-600">
    //               Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
    //               amet fugiat veniam occaecat fugiat aliqua.
    //             </p>
    //             <div className="mt-10 flex items-center gap-x-6">
    //               <a
    //                 href="/"
    //                 className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    //               >
    //                 Documentation
    //               </a>
    //               <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
    //                 View on GitHub <span aria-hidden="true">→</span>
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
    //         <div
    //           className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-sky-600/10 ring-1 ring-sky-50 md:-mr-20 lg:-mr-36"
    //           aria-hidden="true"
    //         />
    //         <div className="shadow-lg md:rounded-3xl">
    //           <div className="bg-sky-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
    //             <div
    //               className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
    //               aria-hidden="true"
    //             />
    //             <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
    //               <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
    //                 <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
    //                   <div className="flex bg-gray-800/40 ring-1 ring-white/5">
    //                     <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
    //                       <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
    //                         NotificationSetting.jsx
    //                       </div>
    //                       <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
    //                     </div>
    //                   </div>
               
    //                   <Code /> 

                                               
                 
    //                 </div>
    //               </div>
    //               <div
    //                 className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
    //                 aria-hidden="true"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    //   </div>
    // </div>
  )
}
