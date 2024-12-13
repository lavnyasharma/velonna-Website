import axios from 'axios';

// Configurations
const BASE_URL = "https://api.velonna.co/";
const TIMEOUT = 90000;
let shouldRefreshToken = false; // Flag to enable/disable token refreshing

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// Helper function to get token from localStorage
const getAccessToken = () => {
  try {
    const token = localStorage.getItem('accessToken');
    return token || null;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
};

// Helper function to store tokens in localStorage
const storeTokens = (accessToken, refreshToken) => {
  try {
    if (accessToken) localStorage.setItem('accessToken', accessToken);
    if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
  } catch (error) {
    console.error('Error storing tokens:', error);
  }
};

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token available');

    const response = await axios.post(`${BASE_URL}/refresh-token/`, { refresh_token: refreshToken });
    const { access_token: newAccessToken } = response.data || {};

    if (newAccessToken) {
      await storeTokens(newAccessToken, refreshToken);
      return newAccessToken;
    } else {
      throw new Error('Failed to refresh access token');
    }
  } catch (error) {
    console.error('Error refreshing token:', error);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    throw error;
  }
};

// Axios request interceptor for adding Authorization and Content-Type headers
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['Content-Type'] = 'application/json'; // Ensure Content-Type is application/json
    return config;
  },
  (error) => Promise.reject(error)
);

// Axios response interceptor to handle 401 errors and token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;

    if (response?.status === 401 && shouldRefreshToken) {
      shouldRefreshToken = false;
      try {
        const newAccessToken = await refreshAccessToken();
        config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(config);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        throw refreshError;
      } finally {
        shouldRefreshToken = true;
      }
    }

    return Promise.reject(error);
  }
);

// API Functions
export const getUserInfo = async (username) => {
  try {
    const response = await axiosInstance.get(`/user/${username}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};

export const fetchProductList = async (page = 1, limit = 10) => {
  try {
    const response = await axiosInstance.get(`/product-lists/`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product list:', error);
    throw error;
  }
};

export const addToCart = async (productId, quantity) => {
  try {
    const data = { product: productId, quantity: String(quantity) };
    const response = await axiosInstance.post('/cart/', data);
    return response;
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
};

export const getCart = async () => {
  try {
    const response = await axiosInstance.get('/cart/details/');
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

export const deleteFromCart = async (cartItemId) => {
  try {
    const response = await axiosInstance.delete(`cart-item/${cartItemId}/`);
    console.log(response)
    console.log(response.status)
    if (!response || response.status === 204) {
      console.log(response)
      console.log(response.status)
      console.log('Item successfully deleted');
      return {}; // Return an empty object or handle it in the caller
    }
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server responded with error:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    throw error;
  }
};

// Utility function to toggle token refresh behavior
export const toggleTokenRefresh = (status) => {
  shouldRefreshToken = status;
};

export { axiosInstance, storeTokens };
