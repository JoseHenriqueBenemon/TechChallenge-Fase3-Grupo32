import { useState } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

const PostManagement = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [refreshPosts, setRefreshPosts] = useState(false);
  const role = localStorage.getItem('role');  

  const refreshPostsList = () => setRefreshPosts(!refreshPosts);
  const clearPostSelection = () => setSelectedPost(null);

  return (
    <>
      {role !== 'Student' && (
        <PostForm
          selectedPost={selectedPost}
          refreshPosts={refreshPostsList}
          clearSelection={clearPostSelection}
        />
      )}
      <PostList selectPost={setSelectedPost} key={refreshPosts} />
    </>
  );
};

export default PostManagement;