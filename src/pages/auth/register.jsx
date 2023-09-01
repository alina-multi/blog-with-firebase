import React, { useState } from "react";
import { register } from "../../utils/auth";
import Input from "../../components/atoms/Input";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import Layout from "../../components/Layout";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isError, setIsError] = useState(null);
  const {dispatch} = useContext(AuthContext);
  

  const submit = (e) => {

    e.preventDefault();
    register(email, password, username, setIsError, dispatch);
  };

  return (
    <Layout>
    <main  className="h-screen ">
      <div className="flex  flex-1 flex-col justify-center px-6 py-32 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-100">
            Sign up for an account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {isError && <div className="text-red-500"> {isError}</div>}
          <form
            className="space-y-6"
            method="POST"
            onSubmit={submit}
            autoComplete="off"
          >
            <Input
              text="Username"
              value={username}
              setValue={setUsername}
              id="username"
              name="username"
              required
              type="text"
            />
            <Input
              text="Email address"
              value={email}
              setValue={setEmail}
              id="email"
              name="email"
              required
              type="email"
            />

            <Input
              text="Password"
              value={password}
              setValue={setPassword}
              id="password"
              name="password"
              required
              type="password"
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-sm bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-100 shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
    </Layout>
  );
}

export default SignUp;
