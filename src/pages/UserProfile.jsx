import Layout from "../components/Layout";
import { useEffect, useState } from "react";

import MyPost from "../components/post/MyPost";
import { fetchUser } from "../helpers/fetchUser";
import { useParams } from "react-router-dom";
import Loading from "../components/atoms/Loading";

export default function UserProfile() {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  let { profileId } = useParams();

  useEffect(() => {
 
    const fetchData = async () => {
      const currentUser = await fetchUser(profileId);
      setUser(currentUser);
      setIsLoading(false);
    };

    fetchData();
  }, [profileId]);

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <main className="mt-20">
        <div className=" flex items-center space-x-3  border-b border-zinc-700 px-6 py-9 shadow-sm focus-within:ring-2 ">
          <div className="flex-shrink-0">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src={
                user?.photoURL ||
                "https://media.tenor.com/O7iUTKsWo4gAAAAC/space-cat.gif"
              }
              alt=""
            />
          </div>
          <div>
            <p className="text-2xl font-bold ">{user?.displayName}</p>
            <p className="truncate text-sm text-zinc-400"> {user?.email}</p>
            <p className="truncate text- font-semibold ">
           
              Published posts:
              <span className="ml-2"> {user?.posts.length}</span>{" "}
            </p>
          </div>
        </div>

        <div className="mt-9">
          <h1 className="text-xl font-bold text-center">
            Posts by
            <span className="text-xl font-medium text-sky-600 ml-2">
              {user?.displayName}
            </span>
          </h1>

          {user?.posts.length > 0 ? (
            <ul className="mt-5">
              {user?.posts.map((postId) => (
                <li  key={postId} >
                  <MyPost postId={postId}/>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 text-center text-xl ">
              There are no posts yet{" "}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
