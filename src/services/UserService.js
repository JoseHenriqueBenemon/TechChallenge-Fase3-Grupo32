import axios from 'axios';
import { handleErrorResponse } from '../utils/errorHandler';

const API_URL = 'http://localhost:3000/api/users';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

const ManualAuthHeaders = (token) => {
  return {
    headers: {Authorization: `Bearer ${token}`}
  }
}

export const signIn = async (credentials) => {
  const response = await axios.post(`${API_URL}/signin`, credentials);
  const { token } = response.data;
  
  try {
    await axios.get(API_URL, ManualAuthHeaders(token));

    return {data: { ...response.data,  role: "Teacher" } };
  } catch (error) {
    if (error.status === 403) {
      return {data: { ...response.data,  role: "Student" } }
    } else {
      handleErrorResponse(error)
    }
  }
  

};

export const getUsers = () => axios.get(API_URL, getAuthHeaders());
export const createUser = (user) => axios.post(API_URL, user, getAuthHeaders());
export const updateUser = (id, user) =>
  axios.put(`${API_URL}/${id}`, user, getAuthHeaders());
export const deleteUser = (id) =>
  axios.delete(`${API_URL}/${id}`, getAuthHeaders());