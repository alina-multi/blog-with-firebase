import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Header from "./components/Header";
import SignUp from "./pages/Auth/SignUp";
import LogIn from "./pages/Auth/LogIn";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/atoms/Loading";
import { useContext } from "react";
import { AuthContext } from "./store/AuthContext";

const Home = lazy(() => import("./pages/Home"));
const Posts = lazy(() => import("./pages/Posts"));
const About = lazy(() => import("./pages/About"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const Profile = lazy(() => import("./pages/Profile"));
const AddPost = lazy(() => import("./pages/AddPost"));

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex gap-6 ">
      <Header />
      <Suspense fallback={<Loading/>}>
        <Routes>
        <Route index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="about" element={<About />} />
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
