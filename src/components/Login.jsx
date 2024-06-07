import React, { useState } from 'react';
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchUser = async () => {
        setError('');
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: userName,
                    password: pwd,
                })
            });

            const data = await response.json();
            if (data.token) {
                localStorage.setItem('authToken', data.token);
                const decoded = decodeToken(data.token);
                if (decoded) {
                    const userId = decoded.sub;
                    localStorage.setItem('userId', userId);
                    window.dispatchEvent(new Event('storage'));
                    navigate('/');
                }
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <input 
                    type="text" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} 
                    placeholder="Type your username"
                />
                <input 
                    type="password" 
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)} 
                    placeholder="Type your password"
                />
                <button onClick={fetchUser}>Connect</button>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

// username: "mor_2314",
// password: "83r5^_"