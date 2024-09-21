import axios from 'axios';
import { handleErrorResponse } from '../utils/errorHandler';

const API_URL = 'http://localhost:3000/api/posts';
const ADMIN_API_URL = 'http://localhost:3000/api/posts/admin';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const getPosts = async () => {
  const role = localStorage.getItem("role");

  try {
    console.log(role);
    if (role === "Teacher") {
      const response = await axios.get(ADMIN_API_URL, getAuthHeaders());
      return response;
    } else {
      const response = await axios.get(API_URL, getAuthHeaders());
      return response;
    }    
  } catch (error) {
    handleErrorResponse(error);
  }
};

export const createPost = (post) => axios.post(API_URL, post, getAuthHeaders());
export const updatePost = (id, post) =>
  axios.put(`${API_URL}/${id}`, post, getAuthHeaders());
export const deletePost = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeaders());
export const getPostById = (id) =>
  axios.get(`${API_URL}/${id}`, getAuthHeaders());
