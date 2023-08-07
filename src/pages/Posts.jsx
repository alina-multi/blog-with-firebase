import React, { useState, useEffect, useContext } from "react";
import Posts from "../components/Post/Posts";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { postsRef } from "../firebase";
import { AuthContext } from "../store/AuthContext";
import PopoverMenu from "../components/Popover";
import Loading from "../components/atoms/Loading";
import Layout from "../components/Layout";
import HeaderTop from "../components/HeaderTop";
import AuthButtons from "../components/AuthButtons";
import Main from "../components/Main";

const tags = [
  { id: 1, name: "hooks" },
  { id: 2, name: "react" },
  { id: 3, name: "firebase" },
  { id: 4, name: "javascript" },
];

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const q = query(postsRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(posts);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <HeaderTop>
        <div className="flex items-center justify-between w-full">
        <div className=" flex items-center  gap-6 ">
          {tags.map((tag) => (
            <button
              key={tag.id}
              className="border-zinc-900 border bg-zinc-200 text-zinc-900 px-4 leading-4  rounded-full py-1.5  font-medium"
            >
              {tag.name}
            </button>
          ))}
        </div>
       
          <AuthButtons />
    
        </div>
      </HeaderTop>
      <Main>
        <Posts posts={posts} />
      </Main>
    </Layout>
  );
}
