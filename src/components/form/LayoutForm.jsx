function LayoutForm({ title, children }) {
  return (
    <div className="flex  flex-1 flex-col justify-center px-6 pt-24 lg:px-9">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-zinc-100">
          {title}
        </h2>
      </div>
      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
    </div>
  );
}

export default LayoutForm;
