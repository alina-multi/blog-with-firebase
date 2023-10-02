import AuthButtons from "./AuthButtons";
import MobileSideNav from "./MobileSideNav"


export default function HeaderTop() {
  return (
    <>
      <div className="z-30 bg-blur flex items-center h-20 px-6 bg-zinc-900 fixed w-full lg:w-3/4 top-0 right-0  border-b  border-zinc-700"></div>
         <MobileSideNav  />
      <div className="fixed top-0 right-0 z-50 h-20 px-6 flex  justify-end">
        <AuthButtons />
      </div>
    </>
  );
}
