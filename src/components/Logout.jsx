import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    navigate('/');
    window.dispatchEvent(new Event('storage'));
  }, [navigate]);

  return null;
}