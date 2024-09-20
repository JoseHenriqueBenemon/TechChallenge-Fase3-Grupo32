import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

// Function to get the token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

// Authentication function (signIn)
export const signIn = (credentials) => axios.post(`${API_URL}/signin`, credentials);

// CRUD operations for users

// Get all users
export const getUsers = () => axios.get(API_URL, getAuthHeaders());

// Create a new user
export const createUser = (user) => axios.post(API_URL, user, getAuthHeaders());

// Update a user
export const updateUser = (id, user) =>
  axios.put(`${API_URL}/${id}`, user, getAuthHeaders());

// Delete a user
export const deleteUser = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeaders());