// src/components/AddPostForm.tsx
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addNewPost, selectPostsError } from '../features/posts/postsSlice';

const AddPostForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const error = useAppSelector(selectPostsError);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && body) {
      dispatch(addNewPost({ userId: 1, title, body }));
      setTitle('');
      setBody('');
    } else {
      alert('Please fill in both the title and content.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="postTitle">Title:</label>
      <input
        type="text"
        id="postTitle"
        name="postTitle"
        value={title}
        onChange={handleTitleChange}
      />
      <label htmlFor="postContent">Content:</label>
      <textarea
        id="postContent"
        name="postContent"
        value={body}
        onChange={handleBodyChange}
      />
      <button type="submit">Save Post</button>
      {error && <p className="error">Failed to add post: {error}</p>}
    </form>
  );
};

export default AddPostForm;
