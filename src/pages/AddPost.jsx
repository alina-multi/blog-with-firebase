import React, { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import {
  AtSymbolIcon,
  CodeBracketIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { postsRef } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import Layout from "../components/Layout";
import { updateProfileData } from "../utils/handleProfile";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { currentUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

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
      <main class="py-36 h-screen">
        <form action="POST" onSubmit={handleSubmit} className="mx-auto w-3/4 ">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="text-lg w-full mb-6 block rounded-sm border-0 py-1.5 bg-zinc-800  shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 "
          />
          <Tab.Group>
            {({ selectedIndex }) => (
              <>
                <Tab.List className="flex items-center">
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
                    Write
                  </Tab>
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
                    Preview
                  </Tab>

                  {/* These buttons are here simply as examples and don't actually do anything. */}
                  {selectedIndex === 0 ? (
                    <div className="ml-auto flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-500"
                        >
                          <span className="sr-only">Insert link</span>
                          <LinkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-500"
                        >
                          <span className="sr-only">Insert code</span>
                          <CodeBracketIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-500"
                        >
                          <span className="sr-only">Mention someone</span>
                          <AtSymbolIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  ) : null}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                    <label htmlFor="post" className="sr-only">
                      Comment
                    </label>
                    <div>
                      <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={16}
                        name="post"
                        id="post"
                        required
                        className="block w-full text-lg rounded-sm border-0 py-1.5 bg-zinc-800  shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm lg:text-base sm:leading-6"
                        placeholder="Add your post..."
                      />
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
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
          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center rounded-sm bg-sky-600 px-3 py-1 font-semibold text-zinc-100 shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Publish
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
}

export default PostForm;
