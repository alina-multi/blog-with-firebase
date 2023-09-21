import React, { useState } from "react";
import { register } from "../../utils/auth";
import Input from "../../components/form/Input";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import Layout from "../../components/Layout";
import Form from "../../components/form/Form";
import Shadow from "../../components/atoms/Shadow";
import LayoutForm from "../../components/LayoutForm";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isError, setIsError] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const options = [
    {
      id: "username",
      name: "username",
      type: "text",
      label: "Username",
      value: username,
      setValue: setUsername,
      required: true,
      placeholder: "wizard",
    },

    {
      id: "email",
      name: "email",
      type: "email",
      label: "Email address",
      value: email,
      setValue: setEmail,
      required: true,
      placeholder: "example@gmail.com",
    },

    {
      id: "password",
      name: "password",
      type: "password",
      label: "Password",
      value: password,
      setValue: setPassword,
      required: true,
      placeholder: "Minimum 6 characters",
    },
  ];

  const submit = (e) => {
    e.preventDefault();
    register(email, password, username, setIsError, dispatch);
  };

  return (
    <Layout>
      <Shadow />
      <LayoutForm title="Sign up for an account">
        <Form isError={isError} submit={submit} buttonName={"SIGN UP"}>
          {options.map((option) => (
            <Input props={option} key={option.id} />
          ))}
        </Form>
      </LayoutForm>
    </Layout>
  );
}

export default SignUp;
