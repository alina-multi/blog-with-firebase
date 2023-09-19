import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/AuthContext";
import {postsRef} from "../firebase";
import { onSnapshot, query, where, orderBy } from "firebase/firestore"
import MyPost from "../components/post/MyPost";

export default function UserProfile() {
  const { currentUser } = useContext(AuthContext);



  return (
    <Layout>
      <main className="mt-20">
        <div className=" flex items-center space-x-3  border-b border-zinc-700 px-6 py-9 shadow-sm focus-within:ring-2 ">
          <div className="flex-shrink-0">
            <img
              className="h-24 w-24 rounded-full"
              src={currentUser.photoURL}
              alt=""
            />
          </div>
          <div>
            <p className="text-2xl font-bold ">{currentUser.displayName}</p>
            <p className="truncate text-sm text-zinc-400"> {currentUser.email}</p>
            <p className="truncate text- font-semibold "> Published posts:<span class="ml-2"> {currentUser.posts.length}</span> </p>
          </div>
        </div>


        <div className="mt-9">
            <h1 className="text-xl font-bold text-center">Posts by <span className="text-xl font-medium text-sky-600">  {currentUser.displayName}</span></h1>
            <ul className="mt-5">
                {currentUser.posts.map((postId) => (
                    <li key={postId}>
                 <MyPost  postId={postId} />
                    </li>
                ))}
            </ul>
        </div>

      </main>
    </Layout>
  );
}


