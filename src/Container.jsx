import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import Header from "./Header";
import Home from "./pages/Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import Profile from "./pages/Profile";

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

        <Route
          path="/signup"
          element={user ? <Navigate replace to="/profile" /> : <SignUp />}
        />
        <Route
          path="/logout"
          element={user ? <SignOut /> : <Navigate replace to="/profile" />}
        />

        <Route
          path="/login"
          element={user ? <Navigate replace to="/profile" /> : <LogIn />}
        />

        <Route
          path={`profile`}
          element={
            user ? (
              <Profile currentUser={currentUser} />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}
