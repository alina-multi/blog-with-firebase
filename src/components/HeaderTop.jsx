import AuthButtons from "./AuthButtons"

export default function HeaderTop ( ){
    return (
        <>
        <div className="z-30 bg-blur flex items-center h-20 px-6 bg-zinc-900 fixed w-3/4 top-0 right-0  border-b  border-zinc-700">
       
      </div>
           <div className="fixed top-0 right-0 z-50 h-20 px-6 flex  justify-end">
           <AuthButtons />
         </div>
         </>
    )
}