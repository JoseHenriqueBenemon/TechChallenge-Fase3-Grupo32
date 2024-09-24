import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const signIn = async (credentials) => {
  const response = await axios.post(`${API_URL}/signin`, credentials);
  
  return response;
};

export const getUsers = () => axios.get(API_URL, getAuthHeaders());
export const createUser = (user) => axios.post(API_URL, user, getAuthHeaders());
export const updateUser = (id, user) =>
  axios.put(`${API_URL}/${id}`, user, getAuthHeaders());
export const deleteUser = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeaders());