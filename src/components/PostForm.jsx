import { useState, useEffect } from 'react';
import { createPost, updatePost } from '../services/PostService';

const PostForm = ({ selectedPost, refreshPosts, clearSelection }) => {
  const [post, setPost] = useState({ title: '', content: '' });

  useEffect(() => {
    if (selectedPost) {
      setPost(selectedPost);
    } else {
      setPost({ title: '', content: '' });
    }
  }, [selectedPost]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.id) {
      updatePost(post.id, post)
        .then(() => {
          refreshPosts();
          clearSelection();
        })
        .catch((error) => console.error('Error updating post:', error));
    } else {
      createPost(post)
        .then(() => {
          refreshPosts();
          setPost({ title: '', content: '' });
        })
        .catch((error) => console.error('Error creating post:', error));
    }
  };

  return (
    <div>
      <h2>{post.id ? 'Edit Post' : 'Create Post'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={post.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <br />
        <textarea
          name="content"
          value={post.content}
          onChange={handleChange}
          placeholder="Content"
          required
        ></textarea>
        <br />
        <button type="submit">{post.id ? 'Update' : 'Create'}</button>
        {post.id && <button onClick={clearSelection}>Cancel</button>}
      </form>
    </div>
  );
};

export default PostForm;