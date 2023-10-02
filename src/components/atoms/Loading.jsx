import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-3/4 ml-auto h-screen">
      <Circles
        height="140"
        width="140"
        color="#0ea5e9"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
