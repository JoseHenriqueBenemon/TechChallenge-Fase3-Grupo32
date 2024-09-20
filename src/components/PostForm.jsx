import { useState, useEffect } from 'react';
import { createPost, updatePost } from '../services/PostService';

import { 
  Container,
  Heading,
  Form,
  Input,
  TextArea,
  ButtonGroup,
  Button
} from '../styles/PostForm.styled';

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
    <Container>
      <Heading>{post.id ? 'Edit Post' : 'Create Post'}</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          name="title"
          value={post.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <TextArea
          name="content"
          value={post.content}
          onChange={handleChange}
          placeholder="Content"
          required
        ></TextArea>
        <ButtonGroup>
          <Button type="submit">{post.id ? 'Update' : 'Create'}</Button>
          {post.id && (
            <Button type="button" cancel onClick={clearSelection}>
              Cancel
            </Button>
          )}
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default PostForm;