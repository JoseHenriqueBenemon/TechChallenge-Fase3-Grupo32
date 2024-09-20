import { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../services/PostService';

import {
  Container,
  Heading,
  PostItem,
  Title,
  Content,
  ButtonGroup,
  Button
 } from '../styles/PostList.styled';

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
    <Container>
      <Heading>Posts</Heading>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
          <ButtonGroup>
            <Button onClick={() => selectPost(post)}>Edit</Button>
            <Button delete onClick={() => handleDelete(post.id)}>
              Delete
            </Button>
          </ButtonGroup>
        </PostItem>
      ))}
    </Container>
  );
};

export default PostList;