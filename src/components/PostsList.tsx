// src/components/PostsList.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchPosts, selectAllPosts, selectPostsStatus, selectPostsError } from '../features/posts/postsSlice';

const PostsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const postStatus = useAppSelector(selectPostsStatus);
  const error = useAppSelector(selectPostsError);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === 'loading') {
    content = <div className="loading">Loading...</div>;
  } else if (postStatus === 'succeeded') {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p className="user">by User {post.userId}</p>
          </li>
        ))}
      </ul>
    );
  } else if (postStatus === 'failed') {
    content = <div className="error">{error}</div>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
