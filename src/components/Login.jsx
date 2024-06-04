import React from 'react'
import {useState, useEffect} from 'react';

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
                    username: "mor_2314",
                    password: "83r5^_",
                })
            })
            .then(res=>res.json())
            .then(json=>console.log(json))
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
            {error &&  <small>Wrong Username/Password</small>}
            <button onClick={fetchUser}>Connect</button>
        </div>
    )
}

// username: "mor_2314",
// password: "83r5^_"