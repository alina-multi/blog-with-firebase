import Post from "./PostPreview";

function Posts({ posts }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex flex-col items-start justify-between border-b bg-zinc-900 border-zinc-800"
          >
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
