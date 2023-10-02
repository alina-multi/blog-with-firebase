import Layout from "../components/Layout";
import Shadow from "../components/atoms/Shadow";

export default function About() {
  return (
    <Layout>
      <Shadow/>
      <div className="flex items-center flex-col mx-auto gap-6 justify-center  p-9">
        <div className="mx-auto max-w-2xl text-center  lg:py-24 space-y-9 lg:space-y-16 max-h-screen">
          <h2 className="text-3xl text-zinc-100 ">
            This web app was created using
          </h2>
          <div className="flex flex-wrap justify-center  gap-12 items-center lg:justify-between">

          <div className="flex flex-col justify-center">
              <img
                className="h-26 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                alt=""
              />
              <p className="text-[38px]  text-blue-500">Tailwind</p>
            </div>
            <img
              src={require("../images/react.png")}
              alt="hero"
              className="w-36 h-36 "
            />

           

            <div className="flex flex-col justify-center ">
              <img
                src={require("../images/firebase.png")}
                alt="hero"
                className="w-28 "
              />
              <p className="text-[36px]  text-zinc-100">Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
