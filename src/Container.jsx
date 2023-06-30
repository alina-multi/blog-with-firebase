import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import Header from "./Header";
import Home from "./pages/Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PostForm from "./PostForm";

export default function Container() {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [auth]);



  return (
    <div className="mx-auto container  ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
 
 <Route path="/signup" element={ user ? <Navigate replace to={`/`}/> : <SignUp />}/>


        <Route
          path="/login"
          element={user ? <Navigate replace to={`/profile/${currentUser?.uid}`}/> : <LogIn />}
        />

        <Route
          path={`/profile/${currentUser?.uid}`}
          element={
            user ? (
              <Profile currentUser={currentUser} />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />

<Route
          path={`/addpost/${currentUser?.uid}`}
          element={
            user ? (
              <PostForm currentUser={currentUser} />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
