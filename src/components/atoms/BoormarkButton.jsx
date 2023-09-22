import { BookmarkIcon, BookmarkSlashIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/AuthContext";
import { toast } from "react-hot-toast";

export function BookmarkButton({ isMyPost }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const onBookmarkButton = () => {
    if (!currentUser) {
      toast("You must be logged in to bookmark");
      return;
    }
    setIsBookmarked((prev) => !prev);
  };
  return (
    <>
      {!isMyPost && (
        <button onClick={onBookmarkButton}>
          {isBookmarked ? (
            <BookmarkSlashIcon
              className="h-6 w-6 text-zinc-500"
              aria-hidden="true"
            />
          ) : (
            <BookmarkIcon
              className=" h-6 w-6 hover:fill-zinc-300"
              aria-hidden="true"
            />
          )}
        </button>
      )}
    </>
  );
}
