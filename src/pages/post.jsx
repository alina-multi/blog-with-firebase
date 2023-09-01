import Layout from "../components/Layout";
import { useEffect, useState, useContext, useRef } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [isMyPost, setIsMyPost] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [isMy, setIsMy] = useState(false);
  const [isNewComment, setIsNewComment] = useState(false);



  let { postId } = useParams();

  useEffect(() => {
    console.log("post", isNewComment);
   
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
        <main className="pt-28 space-y-9">
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

          <div className=" space-y-3">
           
              {currentUser &&  <div className="mx-16 pb-6"><CommentForm postId={post?.id} setIsNewComment={setIsNewComment}/> </div>}
           
            <p className="font-semibold text-lg mx-16 leading-4 ">
              {" "}
              Comments
            </p>
            <div  className="mx-16 space-y-6 border-x border-t  p-6 border-zinc-700 "> {post?.id && <Comments postId={post?.id}  isNewComment={isNewComment} setIsNewComment={setIsNewComment}/>}</div> 
          </div>
        </main>
      </Layout>
    )
  );
}
