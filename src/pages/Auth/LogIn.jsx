import React, { useContext, useState } from "react";
import Input from "../../components/atoms/Input";
import {login} from '../../utils/auth'
import { AuthContext } from "../../store/AuthContext";
import Layout from "../../components/Layout";


function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(null);

  const {dispatch} = useContext(AuthContext);


  const submit =  (e) => {
    e.preventDefault();
    login(email, password, setIsError, dispatch)
  };

  return (
    <Layout>
 

      <div className="h-screen ">
      <div className="flex flex-1 flex-col justify-center px-6 pt-32 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-100">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 mb-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="text-red-500 py-3">{isError}</div>
          <form
            className="space-y-6"
            action="signup"
            method="POST"
            onSubmit={submit}
          >
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
      </div>
  
      </Layout>
  );
}

export default LogIn;
