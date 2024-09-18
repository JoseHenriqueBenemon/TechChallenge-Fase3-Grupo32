import { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../services/PostService';

const PostList = ({ selectPost }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshPosts();
  }, []);

  const refreshPosts = () => {
    getPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  };

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => refreshPosts())
      .catch((error) => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}{' '}
            <button onClick={() => selectPost(post)}>Edit</button>{' '}
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;