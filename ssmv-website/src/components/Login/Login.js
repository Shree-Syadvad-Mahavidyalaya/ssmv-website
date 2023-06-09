/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import MyContext from "../events/MyContext";
import './Login.css'


const Login = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [isAdmin, setIsAdmin]=useContext(MyContext)

    const handleClick=()=>{
        axios.post("https://test-moid.vercel.app/ssmv/login", {"name": name, "password": pass}, { withCredentials: true })
        .then((res) => {
          document.cookie = `token=${res.data.token}`;
          console.log(res.data.user.role);
          setIsAdmin(res.data.user.role === 'admin')
          navigate("/ssmv");
        });
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}type="email" placeholder="username" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={handleClick}>Log In</button>
            </form>
        </div>
    )
}

export default Login;