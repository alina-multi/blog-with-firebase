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
import CommentForm from "../components/comment/CommentForm";

export default function PostPage() {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isMyPost, setIsMyPost] = useState(false);
  const { currentUser } = useContext(AuthContext);

  let { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const post = docSnap.data();
        setPost({ id: docSnap.id, ...post });
        fetchUser(post?.authorID).then((user) => setAuthor(user));
        setIsMyPost(post?.authorID === currentUser?.uid);
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();
  }, [postId, currentUser?.uid, post?.authorID]);
  return (
    <Layout>
      <main className="py-28 px-6 ">
        <div className="px-9">
          <h1 className="text-3xl text-center">{post?.title}</h1>
          <p className=" text-lg py-9 whitespace-break-spaces">
            {post?.description}
          </p>

          <div className="flex justify-between  px-3">
         <UserInline user={author} />
            <Time time={post?.createdAt} />
          </div>
        </div>

        {/* { post?.id && <Comments postId={post?.id} />} */}

        {/* <div className="">
          <CommentForm postId={post?.id} />
        </div> */}
      </main>
    </Layout>
  );
}
