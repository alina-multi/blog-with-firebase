export default function Layout({ children }) {
  return <div className="lg:w-3/4 lg:ml-auto w-full">
    <main className="mt-20"> {children}</main>
    
  </div>;
}
