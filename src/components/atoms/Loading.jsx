

const Loading = () => {
    return (
    <div className="flex justify-center items-center w-3/4 ml-auto h-screen">
        <div
        className="inline-block mt-12 w-48 h-48 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </div>
    </div>
 
    )
    };

export default Loading;