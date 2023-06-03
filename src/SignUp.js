import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";
import React, { useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');  // add this line
    const auth = getAuth();
  
    const signUp = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: username }); // add this line
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
      <h1>Sign Up Component</h1>
      <form onSubmit={signUp}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      </div>
    );
  }
  
  export default SignUp;
  