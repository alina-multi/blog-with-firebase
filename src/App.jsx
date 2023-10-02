import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import SideNav from "./components/nav/SideNav";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/atoms/Loading";
import { useContext } from "react";
import { AuthContext } from "./store/AuthContext";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const Posts = lazy(() => import("./pages/Posts"));
const About = lazy(() => import("./pages/About"));
const EditProfile = lazy(() => import("./pages/private/EditProfile"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const AddPost = lazy(() => import("./pages/private/AddPost"));
const Post = lazy(() => import("./pages/Post"));
const Contact = lazy(() => import("./pages/Contact"));
const HeaderTop = lazy(() => import("./components/nav/HeaderTop"));
const Users = lazy(() => import("./pages/Users"));


function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex lg:gap-6 ">
      <Toaster />
      <SideNav />
      <HeaderTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index path="/" exact element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/authors" element={<Users />} />
          <Route path="/profile/:profileId" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/signup"
            element={
              currentUser ? <Navigate replace to={`/posts`} /> : <SignUp />
            }
          />

          <Route
            path="/login"
            element={
              currentUser ? <Navigate replace to={`/posts`} /> : <LogIn />
            }
          />
          <Route
            path="/editprofile"
            element={
              <PrivateRoute component={<EditProfile />} redirectTo="/login" />
            }
          />
          <Route
            path="/addpost"
            element={
              <PrivateRoute component={<AddPost />} redirectTo="/login" />
            }
          />
          <Route
            path="/editpost/:postId"
            element={
              <PrivateRoute component={<AddPost />} redirectTo="/login" />
            }
          />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
