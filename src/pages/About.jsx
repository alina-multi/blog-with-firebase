import Layout from "../components/Layout";

export default function About() {
  return (

    <Layout>
    
      <div className="flex items-center flex-col mx-auto gap-6 justify-center mt-20 p-9">
        {/* <img
          src={require("../images/photo.jpg")}
          alt="hero"
          className="w-40 h-40 object-cover rounded-full "
        />
        <div className="w-1/2">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100 ">
          About Me
        </h1>
        I am a web developer and a student at the University of Toronto. I am
          currently in my third year of studies. I am passionate about web
          development and I am always looking to learn new things. I am
          currently looking for a summer internship for 2022. My skills include:
          HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Firebase,
          Git, and Python. You van find me on{" "}
          <a href="https://www.linkedin.com/in/alexander-ivanov-1b1b3a1b0/">
            LinkedIn
          </a>{" "}
          and <a href="/">GitHub</a>.
        </div> */}
     

     
  
        <div className="mx-auto max-w-2xl text-center  p-6 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-100 ">This web app was created using</h2>
          <div className="flex gap-12 items-center justify-between">
        <img
            src={require("../images/react.png")}
            alt="hero"
            className="w-40 h-40 "
            />

            <div className="flex flex-col justify-center">
            <img
              className="h-28 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
              alt=""
            />
            <p className="text-[38px] font-semibold text-blue-500">Tailwind</p>
            </div>

    <div className="flex flex-col justify-center ">
    <img
          src={require("../images/firebase.png")}
          alt="hero"
          className="w-28 "
        />
          <p className="text-[38px] font-semibold text-zinc-100">Firebase</p>
          </div>
  
      </div>
        </div>

<div className="mx-auto max-w-2xl text-center  p-6 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-100 ">My other pet projects </h2>
        </div>



        </div>
 
    
      
    </Layout>
 );
     
}
