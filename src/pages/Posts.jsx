import React, { useState, useEffect, useContext } from "react";
import Posts from "../components/post/PostsList";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { postsRef } from "../firebase";
import Loading from "../components/atoms/Loading";
import Layout from "../components/Layout";


const tags = [
  { id: 1, name: "hooks" },
  { id: 2, name: "react" },
  { id: 3, name: "firebase" },
  { id: 4, name: "javascript" },
];

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      
      <div className="fixed h-20 top-0 right-0 z-30 flex flex-wrap items-center w-3/4 gap-6 px-6">
        {tags.map((tag) => (
          <button

            key={tag.id}
            className=" cursor-pointer hover:text-zinc-100 hover:border-zinc-100  font-bold py-2 text-sm px-4 rounded-sm border overflow-hidden border-zinc-400 leading-3 bg-zinc-800 text-zinc-400"
          >
            {tag.name}
          </button>
        ))}
      </div>
      <main className="mt-20">
      <Posts posts={posts} />
      </main>
      
    </Layout>
  
  );
}
