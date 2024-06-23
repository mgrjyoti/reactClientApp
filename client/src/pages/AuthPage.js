import React, { useState } from 'react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const AuthPage = ({ setToken }) => {
    return (
        <div>
            <h1>Auth Page</h1>
            <Login setToken={setToken} />
            <Register />
        </div>
    );
};

export default AuthPage;