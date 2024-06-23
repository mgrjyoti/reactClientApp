
import React,{useState} from 'react';
import authService from '../../services/authService';
const { text } = require("express");

const Login = ({setToken}) => {
    const [username, setUsername]=useState('');
    const [password,setPassword ]=useState('');

    const handleLogin =async()=> {
        const token =await authService.login(username,password);
        setToken(token);
    };

    return(
        <div>
            <h2>Login</h2>
            <input type='text' placeholder='Username' onChaange= {(e)=> setUsername(e.target.value)} />
            <input type='password' placeholder='Password' onChaange= {(e)=> setPassword(e.target.value)}/>
            <button  onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;