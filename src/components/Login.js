import React from 'react';
import { useNavigate } from 'react-router-dom';
import './default.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/main');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
