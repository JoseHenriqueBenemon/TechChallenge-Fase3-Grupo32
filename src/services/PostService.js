import axios from 'axios';

const API_URL = 'http://localhost:3000/post';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

// CRUD operations for posts

export const getPosts = () => axios.get(API_URL, getAuthHeaders());
export const createPost = (post) => axios.post(API_URL, post, getAuthHeaders());
export const updatePost = (id, post) =>
  axios.put(`${API_URL}/${id}`, post, getAuthHeaders());
export const deletePost = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeaders());