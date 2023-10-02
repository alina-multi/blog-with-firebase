import Layout from "../components/Layout";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { usersRef } from "../firebase";
import { NavLink } from "react-router-dom";
import Loading from "../components/atoms/Loading";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(usersRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(users);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <ul className="divide-y divide-zinc-700">
        {users.map((user) => (
          <li key={user.email}>
            <NavLink
              to={`/profile/${user.uid}`}
              className="flex justify-between gap-x-6 py-5 px-6 lg:pl-9 "
            >
              <div className="flex items-center min-w-0 gap-x-4">
                <img
                  className="h-14 w-14 flex-none rounded-full bg-zinc-800 object-cover"
                  src={
                    user?.photoURL ||
                    "https://media.tenor.com/O7iUTKsWo4gAAAAC/space-cat.gif"
                  }
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className=" font-semibold leading-6 text-white">
                    {user.displayName}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-zinc-400">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex gap-3 items-center text-zinc-100 hover:text-zinc-400 cursor-pointer">
                <p className=" leading-6  font-bold">view profile</p>
                <ChevronRightIcon
                  className="h-6 w-6 flex-none"
                  aria-hidden="true"
                />
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
