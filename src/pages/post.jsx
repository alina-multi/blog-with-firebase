import Layout from "../components/Layout";
import { useEffect, useState, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { fetchUser } from "../utils/auth";
import { AuthContext } from "../store/AuthContext";
import { UserInline } from "../components/user/UserInline";
import { Time } from "../components/atoms/Time";
import Comments from "../components/comment/Comments";

export default function PostPage() {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMyPost, setIsMyPost] = useState(false);
  const { currentUser } = useContext(AuthContext);

  let { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const post = docSnap.data();
        setPost({ id: docSnap.id, ...post });
        fetchUser(post?.authorID).then((user) => setAuthor(user));
        setIsMyPost(post?.authorID === currentUser?.uid);
        setIsLoading(false);
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();
  }, [postId, currentUser?.uid, post?.authorID]);
  return (
    !isLoading && (
      <Layout>
        <main className="pt-28 pb-6 space-y-9">
          <div className="space-y-9 px-16 ">
            <h1 className="text-3xl text-center">{post?.title}</h1>
            <p className=" text-lg  whitespace-break-spaces">
              {post?.description}
            </p>
          </div>

          <div className="flex justify-between items-center border-y py-3 border-zinc-700 px-16">
            <UserInline user={author} />
            <Time time={post?.createdAt} />
          </div>

          <Comments postId={postId} />
        </main>
      </Layout>
    )
  );
}
