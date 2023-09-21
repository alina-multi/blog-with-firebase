import React, { useContext, useState } from "react";
import Input from "../../components/form/Input";
import { login } from "../../utils/auth";
import { AuthContext } from "../../store/AuthContext";
import Layout from "../../components/Layout";
import Form from "../../components/form/Form";
import Shadow from "../../components/atoms/Shadow";
import LayoutForm from "../../components/LayoutForm";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(null);
  const { dispatch } = useContext(AuthContext);

  const submit = (e) => {
    e.preventDefault();
    login(email, password, setIsError, dispatch);
  };

  const options = [
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

  return (
    <Layout>
      <Shadow />
      <LayoutForm title="Sign in to your account">
        <Form isError={isError} submit={submit} buttonName={"SIGN IN"}>
          {options.map((option) => (
            <Input props={option} key={option.id} />
          ))}
        </Form>
      </LayoutForm>
    </Layout>
  );
}

export default SignIn;
