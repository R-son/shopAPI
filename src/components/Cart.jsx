import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const [error, setError] = useState('');
    const token = localStorage.getItem('authToken');
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/login');
    };

    console.log(token);
    if (!token) {
        return (
            <div>
                <h1>You are not logged in</h1>
                <button onClick={handleRedirect} className='go-to-login'>Login</button>
            </div>
        )
    }

    return (
        <div>
            {/* Your Cart content goes here */}
        </div>
    )
}
