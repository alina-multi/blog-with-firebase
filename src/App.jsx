import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import SideNav from "./components/SideNav";
import SignUp from "./pages/auth/register";
import LogIn from "./pages/auth/logIn";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/atoms/Loading";
import { useContext } from "react";
import { AuthContext } from "./store/AuthContext";
// import Contact from "./pages/contact";

const Home = lazy(() => import("./pages/home"));
const Posts = lazy(() => import("./pages/posts"));
const About = lazy(() => import("./pages/about"));
const EditProfile = lazy(() => import("./pages/editProfile"));
const Profile = lazy(() => import("./pages/profile"));
const AddPost = lazy(() => import("./pages/addPost"));
const Post = lazy(() => import("./pages/post"));
const Contact = lazy(() => import("./pages/contact"));
const HeaderTop = lazy(() => import("./components/HeaderTop"));

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex gap-6 ">
      <SideNav />
      <HeaderTop />
      <Suspense fallback={<Loading/>}>
        <Routes>
        <Route index path="/" exact element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="post/:postId" element={<Post />} />

          <Route
            path="/signup"
            element={currentUser ? <Navigate replace to={`/`} /> : <SignUp />}
          />

          <Route
            path="/login"
            element={
              currentUser ? <Navigate replace to={`/editprofile`} /> : <LogIn />
            }
          />
          <Route
            path="/editprofile"
            element={
              <PrivateRoute component={<EditProfile />} redirectTo="/login" />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute component={<Profile />} redirectTo="/login" />
            }
          />
          <Route
            path="/addpost"
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
