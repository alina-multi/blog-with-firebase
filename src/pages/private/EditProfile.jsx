import { useState, useContext } from "react";
import Cropper from "../../components/Cropper";
import { updateProfileData, upload } from "../../utils/handleProfile";
import { AuthContext } from "../../store/AuthContext";
import Layout from "../../components/Layout";
import Input from "../../components/form/Input";
import Shadow from "../../components/atoms/Shadow";

export default function EditProfile() {
  const { currentUser, dispatch } = useContext(AuthContext);
  const [preview, setPreview] = useState(currentUser.photoURL);
  const [photoURL, setPhotoURL] = useState(null);
  const [username, setUsername] = useState(currentUser.displayName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = currentUser.photoURL;
    if (photoURL) {
      url = await upload(photoURL, currentUser);
    }

    updateProfileData({ displayName: username, photoURL: url }, dispatch);
  };

  return (
    <Layout>
      <Shadow />
      <form className="w-3/4 mx-auto mt-20 pt-12" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-zinc-100">
            Personal Information
          </h2>
          <p className="mt-1 text-center text-sm leading-6 text-zinc-400">
            This information will be displayed publicly so be careful what you
            share.
          </p>
          <div className="flex justify-center">
            <Cropper
              preview={preview}
              setPreview={setPreview}
              setPhotoURL={setPhotoURL}
            />
          </div>

          <Input
            props={{
              label: "Username",
              setValue: setUsername,
              value: username,
              type: "text",
              name: "username",
              id: "username",
            }}
          />
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
