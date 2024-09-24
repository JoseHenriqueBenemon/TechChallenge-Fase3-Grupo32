import { useState, useEffect } from 'react';
import { createPost, updatePost } from '../services/PostService';
import { handleErrorResponse } from '../utils/errorHandler';

import { 
  Container,
  Heading,
  Form,
  Input,
  Select,
  TextArea,
  ButtonGroup,
  Button
} from '../styles/PostForm.styled';

const PostForm = ({ selectedPost, refreshPosts, clearSelection }) => {
  const initialState = {
    title: '',
    description: '',
    category_subject: 'Math',
    status: 'Active', 
    limit_date: '',
    };

  const [post, setPost] = useState(initialState);

  useEffect(() => {
    if (selectedPost) {
      setPost({
        ...selectedPost,
        limit_date: selectedPost.limit_date
          ? new Date(selectedPost.limit_date.split("/")[2], selectedPost.limit_date.split("/")[1], selectedPost.limit_date.split("/")[0]).toISOString().substr(0, 10)
          : '',
      });
    } else {
      setPost(initialState);
    }
  }, [selectedPost]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = { ...post };

    // Remove the id from user, kepping throw a validation error
    delete postData.id
    delete postData.user

    if (post.id) {
      updatePost(post.id, postData)
        .then(() => {
          refreshPosts();
          clearSelection();
        })
        .catch((error) => {
          handleErrorResponse(error);
        });
    } else {
      createPost(postData)
        .then(() => {
          refreshPosts();
          setPost(initialState);
        })
        .catch((error) => {
          handleErrorResponse(error);
        });
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
          name="description"
          value={post.description}
          onChange={handleChange}
          placeholder="Description"
          required
        ></TextArea>
        <Select
          name="category_subject"
          value={post.category_subject}
          onChange={handleChange}
          required
        >
          <option value="Math">Math</option>
          <option value="Biology">Biology</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="History">History</option>
          <option value="Geography">Geography</option>
          <option value="Portuguese">Portuguese</option>
          <option value="English">English</option>
          <option value="Literature">Literature</option>
          <option value="Physical Education">Physical Education</option>
          <option value="Arts">Arts</option>
          <option value="Sociology">Sociology</option>
          <option value="Philosophy">Philosophy</option>
        </Select>
        <Select
          name="status"
          value={post.status}
          onChange={handleChange}
          required
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </Select>
        <Input
          name="limit_date"
          value={post.limit_date}
          onChange={handleChange}
          placeholder="Limit Date"
          required
          type="date"
        />
        
        <ButtonGroup>
          <Button type="submit">{post.id ? 'Update' : 'Create'}</Button>
          {post.id && (
            <Button type="button" cancel="true" onClick={clearSelection}>
              Cancel
            </Button>
          )}
        </ButtonGroup>
      </Form>
    </Container>
  );
};


export default PostForm;