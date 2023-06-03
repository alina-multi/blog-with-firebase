import React, { useState } from 'react';

function PostForm({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
