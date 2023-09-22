import Layout from "../components/Layout";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Shadow from "../components/atoms/Shadow";
import { useState, useRef } from "react";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SERVICE_ID = "service_hixy8q4";
const TEMPLATE_ID = "template_g5sk2pw";
const PUBLIC_KEY = "IbqKMmNAfrG8I0Qa-";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const refForm = useRef();
  const options = [
    {
      id: "user_name",
      name: "user_name",
      type: "text",
      label: "Name",
      value: name,
      setValue: setName,
      required: true,
      placeholder: "wizard",
    },

    {
      id: "user_email",
      name: "user_email",
      type: "email",
      label: "Email address",
      value: email,
      setValue: setEmail,
      required: true,
      placeholder: "example@gmail.com",
    },
  ];

  const submit = (e) => {
    console.log(refForm);
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, refForm.current, PUBLIC_KEY).then(
      (result) => {
        toast.success(`Thanks ${name}! Your message has been sent`, {
          duration: 3000,
          position: "top-center",
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Layout>
      <Shadow />

      <div className=" grid grid-cols-1 lg:grid-cols-2  px-9    lg:pt-32 gap-16">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white pt-6">
            Get in touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
            sed malesuada et magna.
          </p>
          <dl className="mt-12 space-y-6 text-base leading-7 text-zinc-300">
            <div className="flex gap-x-6">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon
                  className="h-7 w-6 text-zinc-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a className="hover:text-white" href="tel:+380957632006">
                  +38 (096) 763-2006
                </a>
              </dd>
            </div>
            <div className="flex gap-x-6">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon
                  className="h-7 w-6 text-zinc-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  className="hover:text-white"
                  href="mailto:akseninkoalina@gmail.com"
                >
                  akseninkoalina@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <Form
          submit={submit}
          buttonName={"Send message"}
          buttonWidth=""
          ref={refForm}
        >
          {options.map((option) => (
            <Input props={option} key={option.id} />
          ))}

          <TextArea
            label="Message"
            value={message}
            setValue={setMessage}
            name="message"
            id="message"
            rows={4}
            required={true}
          />
        </Form>
      </div>
    </Layout>
  );
}
