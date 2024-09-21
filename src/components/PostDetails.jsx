import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/PostService';
import { handleErrorResponse } from '../utils/errorHandler';

import {
  Container,
  Heading,
  HeadingContainer,
  Content,
  DetailItem,
} from '../styles/PostDetails.styled';
import BackButton from './BackButton';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id)
      .then((response) => setPost(response.data))
      .catch((error) => {
        handleErrorResponse(error);
      });
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <HeadingContainer>
        <Heading>{post.title}</Heading>
        <BackButton />
      </HeadingContainer>
      <Content>{post.description}</Content>
      <DetailItem>Categoria: {post.category_subject}</DetailItem>
      <DetailItem>Estado do Post: {(post.status === "Active" ? "Ativo" : "Desativo")}</DetailItem>
      <DetailItem>
        Data de vencimento: {post.limit_date}
      </DetailItem>
    </Container>
  );
};

export default PostDetails;