import React, { useState } from "react";
import Input from "../../components/atoms/Input";
import {login} from '../../utils/auth'

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(null);

  const submit =  (e) => {
    e.preventDefault();
    login(email, password, setIsError)
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
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
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
