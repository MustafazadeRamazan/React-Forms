import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login() {
    const {setUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location) 

    const LoginHandle = () => {
        setUser({name: "kamil", id: 1});
        navigate(location?.state?.return_url || '/');
    };
    
    return (
        <div>
            Login
            <br/>
            <button onClick={LoginHandle}>Login</button>
        </div>
    )
}
