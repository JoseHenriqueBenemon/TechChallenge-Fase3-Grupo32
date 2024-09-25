import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosts, deletePost } from '../services/PostService';
import { handleErrorResponse } from '../utils/errorHandler';

import {
  Container,
  Heading,
  PostItem,
  Title,
  Content,
  ButtonGroup,
  Button,
  Input,
} from '../styles/PostList.styled';

const PostList = ({ selectPost }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  useEffect(() => {
    refreshPosts();
  }, []);

  const refreshPosts = () => {
    getPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => {
        handleErrorResponse(error);
      });
  };

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => refreshPosts())
      .catch((error) => {
        handleErrorResponse(error);
      });
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Heading>Posts</Heading>
      <Input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredPosts.map((post) => (
        <PostItem key={post.id}>
          <Title>{post.title}</Title>
          <Content>{post.description}</Content>
          <Content>{post.user.name}</Content>
          <ButtonGroup>
            {role !== 'Student' && (
              <>
                <Button onClick={() => selectPost(post)}>Edit</Button>
                <Button delete="true" onClick={() => handleDelete(post.id)}>
                  Delete
                </Button>
              </>
            )}
            {role === 'Student' && (
              <Button onClick={() => navigate(`/posts/${post.id}`)}>
                Visualizar
              </Button>
            )}
          </ButtonGroup>
        </PostItem>
      ))}
    </Container>
  );
};

export default PostList;