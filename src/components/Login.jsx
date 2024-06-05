import React from 'react'
import {useState} from 'react';
import {decodeToken} from 'react-jwt'

export default function Login()
{
    const [userName, setuserName] = useState('');
    const [pwd, setpwd] = useState('');
    const [error, setError] = useState('');

    const fetchUser = async () =>
    {
        setError('');
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    username: "johnd",
                    password: "m38rmF$",
                })
            })
            const data = await response.json();
            if(data.token) {
                localStorage.setItem('authToken', data.token);
                const decoded = decodeToken(data.token);
                if (decoded) {
                    const userId = decoded.sub;
                    localStorage.setItem('userId', userId);
                    // console.log(userId);
                }
            }
            // console.log(localStorage.getItem('authToken'));
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <input 
                type="text" 
                value={userName}
                onChange={(e) => setuserName(e.target.value)} 
                placeholder="Type your username"
            />
            <input 
                type="password" 
                value={pwd}
                onChange={(e) => setpwd(e.target.value)} 
                placeholder="Type your password"
            />
            {/* {error &&  <small>Wrong Username/Password</small>} */}
            <button onClick={fetchUser}>Connect</button>
        </div>
    )
}

// username: "mor_2314",
// password: "83r5^_"