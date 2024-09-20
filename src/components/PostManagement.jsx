// src/components/PostManagement.jsx

import { useState } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

const PostManagement = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [refreshPosts, setRefreshPosts] = useState(false);

  const refreshPostsList = () => setRefreshPosts(!refreshPosts);
  const clearPostSelection = () => setSelectedPost(null);

  return (
    <>
      <PostForm
        selectedPost={selectedPost}
        refreshPosts={refreshPostsList}
        clearSelection={clearPostSelection}
      />
      <PostList selectPost={setSelectedPost} key={refreshPosts} />
    </>
  );
};

export default PostManagement;