import Layout from "../components/Layout";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { usersRef } from "../firebase";
import { NavLink } from "react-router-dom";
import Loading from "../components/atoms/Loading";

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];

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
                  className="h-14 w-14 flex-none rounded-full bg-zinc-800"
                  src={user.photoURL}
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

  // return (


  // );
}
