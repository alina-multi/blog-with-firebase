import { useState, useEffect } from "react";
import { useAuth, upload } from "../firebase";
import Cropper from "../components/Cropper";
import { updateProfile } from "firebase/auth";


export default function EditProfile() {
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  const [photoURL, setPhotoURL] = useState(null);
  const [username, setUsername] = useState("");
  // const [firstName, setFirstName] = useState(currentUser?.firstName);
  // const [lastName, setLastName] = useState(currentUser?.lastName);

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.displayName);
      setPreview(currentUser.photoURL);
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (photoURL) {
      upload(photoURL, currentUser, setLoading);
    }
    await updateProfile (currentUser, { displayName: username });
    
  };

  return (
    <>
      <form className="w-1/2 mx-auto mt-12" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <h2 className="text-base font-semibold leading-7 text-white">
            EditProfile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <Cropper
            preview={preview}
            setPreview={setPreview}
            setPhotoURL={setPhotoURL}
          />

          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-white"
            >
              Username
            </label>
            <div className="mt-2">
              <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                <span className="flex select-none items-center pl-3  sm:text-sm">
                  @
                </span>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {/* <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-white"
          >
            First name
          </label>
          <div className="mt-2">
            <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium leading-6 text-white"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div> */}
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Save
          </button>
        </div>
      </form>

      <div className="profile">
        <p>Username: {currentUser?.displayName}</p>
        {/* <h1>EditProfile</h1>
        <p>Username: {currentUser?.displayName}</p>
        <p>Email: {currentUser?.email}</p>
        <p>Avatar: 
          <img src={currentUser?.photoURL} alt={currentUser?.displayName} />
        </p> */}
      </div>
    </>
  );
}
