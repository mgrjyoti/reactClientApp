import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const handleSetToken = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    return (
        <Router>
            <Routes>
                <Route path="/auth">
                    <AuthPage setToken={handleSetToken} />
                </Route>
                <Route path="/home">
                    {token ? <HomePage token={token} /> : <Link to="/auth" />}
                </Route>
                <Link from="/" to={token ? "/home" : "/auth"} />
            </Routes>
        </Router>
    );
};

export default App;