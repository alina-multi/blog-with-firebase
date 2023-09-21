import React, { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import {
  AtSymbolIcon,
  CodeBracketIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { postsRef } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";
import Layout from "../../components/Layout";
import { updateProfileData } from "../../utils/handleProfile";
import { classNames } from "../../helpers/classNames";
import TextArea from "../../components/form/TextArea";
import Input from "../../components/form/Input";
import Shadow from "../../components/atoms/Shadow";
import Form from "../../components/form/Form";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { currentUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const tabList = ["Write", "Preview"];
  const buttons = [
    { name: "Insert link", icon: LinkIcon },
    { name: "Insert code", icon: CodeBracketIcon },
    { name: "Mention someone", icon: AtSymbolIcon },
  ];

  const addPost = async (title, content) => {
    const response = await addDoc(postsRef, {
      title,
      description: content,
      createdAt: serverTimestamp(),
      authorID: currentUser.uid,
    });
    response && alert("Post added");
    response && navigate("/posts");

    updateProfileData({ posts: [...currentUser.posts, response.id] }, dispatch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <Layout>
      <Shadow />
      <div className="pt-12 w-3/4 mx-auto">
        <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-zinc-100">
          Create your article
        </h1>
        <Form buttonName="Publish" buttonWidth={""} submit={handleSubmit}>
          <Input
            props={{
              label: false,
              type: "text",
              value: title,
              setValue: setTitle,
              placeholder: "Title",
              required: true,
              name: "title",
              id: "title",
            }}
          />

          <div className="space-y-3">
            <Tab.Group>
              {({ selectedIndex }) => (
                <>
                  <Tab.List className="flex items-center">
                    {tabList.map((tab) => (
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "bg-zinc-800  hover:bg-zinc-700"
                              : " hover:bg-zinc-700 ",
                            "rounded-sm border border-transparent px-3 py-1.5 text-sm font-medium"
                          )
                        }
                      >
                        {tab}
                      </Tab>
                    ))}

                    {/* These buttons are here simply as examples and don't actually do anything. */}
                    {selectedIndex === 0 ? (
                      <div className="ml-auto flex items-center space-x-5">
                        {buttons.map((button) => (
                          <div className="flex items-center">
                            <button
                              type="button"
                              className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-500"
                            >
                              <span className="sr-only">{button.name}</span>
                              <button.icon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div>
                        <TextArea
                          value={content}
                          setValue={setContent}
                          rows="12"
                          name="post"
                          id="post"
                          required={true}
                          placeholder="Add your post..."
                        />
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="border-b">
                        <div className="mx-px mt-px px-3 pb-12 pt-2 text-sm leading-5 0">
                          Preview content will render here.
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </>
              )}
            </Tab.Group>
          </div>
        </Form>
      </div>
    </Layout>
  );
}

export default PostForm;
