"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { axiosInstance } from '@/axios';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [is_auth, setIs_auth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const login = async (values) => {
    try {
      const res = await axios.post(
        'https://api.velonna.co/login/',
        {
          username: values.username,
          password: values.password,
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          }
        }
      );

      if (res.status === 200) {
        const { access, refresh } = res.data;
        localStorage.setItem("username", values.username);
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
        setIs_auth(true);
        toast.success("Login successful!");
        router.refresh();
      }
    } catch (error) {
      setIs_auth(false);
      setUser(null);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    setIs_auth(false);
    setUser(null);
    router.push();
    toast.success("Logged out successfully.");
  };

  const getUserInfo = async () => {
    try {
    const username = localStorage.getItem('username');
      const response = await axiosInstance.get(`/user/${username}/`);
      console.log(response.data)
            setUser(response.data);
            setIs_auth(true);
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
        const username = localStorage.getItem('username');
          if (username) {
            const userData = await getUserInfo();
          }
        } else {
          setIs_auth(false);
          setUser(null);
        }
      } catch (error) {
        console.error('Error during user data fetch:', error);
        setIs_auth(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();

   
  }, []);

  return (
    <AuthContext.Provider value={{ is_auth, login,user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
