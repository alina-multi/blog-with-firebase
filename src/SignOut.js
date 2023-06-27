import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

function SignOut() {



  const auth = getAuth();
  console.log(auth.currentUser);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    auth.currentUser && <button onClick={handleSignOut}>Sign Out</button>
  );
}

export default SignOut;
