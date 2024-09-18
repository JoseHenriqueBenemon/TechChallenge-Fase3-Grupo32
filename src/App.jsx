import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const refreshPosts = () => setRefresh(!refresh);

  const clearSelection = () => setSelectedPost(null);

  return (
    <div>
      <h1>My Blog</h1>
      <PostForm
        selectedPost={selectedPost}
        refreshPosts={refreshPosts}
        clearSelection={clearSelection}
      />
      <PostList selectPost={setSelectedPost} key={refresh} />
    </div>
  );
};

export default App;