import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AvatarEditor from "react-avatar-editor";

export default function CropperModal({
  src,
  modalOpen,
  setModalOpen,
  setPreview,
  setPhotoURL,
}) {
  const [slideValue, setSlideValue] = useState(10);
  const cancelButtonRef = useRef(null);
  const cropRef = useRef(null);

  const handleSave = async () => {
    if (!cropRef) {
      handleCancel();
      return;
    }

    const dataUrl = cropRef.current.getImage().toDataURL();
    const result = await fetch(dataUrl);
    const blob = await result.blob();
    setPreview(URL.createObjectURL(blob));
    setPhotoURL(blob);
    setModalOpen(false);
    setSlideValue(10);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSlideValue(10);
  };

  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setModalOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-zinc-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <AvatarEditor
                      ref={cropRef}
                      image={src}
                      style={{ width: "100%", height: "100%" }}
                      border={50}
                      borderRadius={150}
                      color={[0, 0, 0, 0.72]}
                      scale={slideValue / 10}
                      rotate={0}
                    />

                    <div>
                      <label
                        htmlFor="zoom"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                      >
                        zoom
                      </label>
                      <input
                        min={10}
                        max={50}
                        value={slideValue}
                        onChange={(e) => setSlideValue(e.target.value)}
                        type="range"
                        className="transparent accent-sky-500 h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                        id="zoom"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-sm bg-sky-600 px-3 py-2 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:col-start-2"
                    onClick={() => handleSave()}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-sm bg-zinc-500 text-white px-3 py-2 text-sm font-semibold hadow-sm ring-1 ring-inset ring-zinc-800 hover:bg-zinc-50 sm:col-start-1 sm:mt-0"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
