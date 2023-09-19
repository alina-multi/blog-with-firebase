import { useState, useContext } from "react";
import Cropper from "../../components/Cropper";
import { updateProfileData, upload} from "../../utils/handleProfile";
import { AuthContext } from "../../store/AuthContext";
import Layout from "../../components/Layout";

export default function EditProfile() {
  const { currentUser, dispatch } = useContext(AuthContext);
  const [preview, setPreview] = useState(currentUser.photoURL);
  const [photoURL, setPhotoURL] = useState(null);
  const [username, setUsername] = useState(currentUser.displayName);


  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = currentUser.photoURL;
   if (photoURL) {
     url = await upload(photoURL, currentUser)
   }
   
    updateProfileData({ displayName: username, photoURL:url}, dispatch);
  };

  return (
    <Layout>
      <form className="w-3/4 mx-auto mt-20 pt-12" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <h2 className="text-base font-semibold leading-7 text-zinc-100">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-zinc-400">
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
              className="block text-sm font-medium leading-6 text-zinc-100"
            >
              Username
            </label>
            <div className="mt-2">
              <div className="flex rounded-sm bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
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
                  className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-zinc-100 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-zinc-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-sm bg-sky-500 px-3 py-2 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Save
          </button>
        </div>
      </form>
    </Layout>
  );
}
