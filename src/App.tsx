import React from 'react';
import PostsList from './components/PostsList';
import AddPostForm from './components/AddPostForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Posts App</h1>
      <AddPostForm />
      <PostsList />
    </div>
  );
};

export default App;
