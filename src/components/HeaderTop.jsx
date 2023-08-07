export default function HeaderTop ( {children}){
    return (
        <div className="flex items-center h-20 px-6 bg-zinc-300 fixed w-3/4 top-0 right-0  border-b  border-zinc-800">
            {children}
      </div>
    )
}