import { useState, useRef, useEffect } from "react";
import CropperModal from "./CropperModal";
import { useAuth } from "../firebase";

export default function Cropper({ preview, setPreview, setPhotoURL}) {
  
  const [src, setSrc] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const inputRef = useRef();
  const currentUser = useAuth();

  useEffect(() => {
   

    if (currentUser?.photoURL) {
      setPreview(currentUser.photoURL);
    }
  }, [currentUser]);


  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    setSrc(URL.createObjectURL(file));
    setModalOpen(true);
  };

  const handleInputClick = (e) => {
    inputRef.current.click();
  };

  return (
    <>
      <CropperModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        src={src}
        setPreview={setPreview}
        setPhotoURL={setPhotoURL}
      />
      <div className="flex gap-3 items-center">
        <div className="border  rounded-full ">
          <img
            src={
              preview ||
              " https://www.signivis.com/img/custom/avatars/member-avatar-01.png"
            }
            alt=""
            className="w-32 rounded-full object-cover"
          />
        </div>
        <button
          type="button"
          onClick={handleInputClick}
          className="rounded-lg bg-indigo-500 text-white px-4 py-2"
        >
          Select Image
        </button>

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImgChange}
          className="hidden"
        />
      </div>
    </>
  );
}
