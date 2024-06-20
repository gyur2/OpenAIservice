import React from 'react';
import { useNavigate } from 'react-router-dom';
import './default.css';

const Signup = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/');
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
