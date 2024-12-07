import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    const showHomeButton = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div>
            {/* NavBar with isLoggedIn state */}
            <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} showHomeButton={showHomeButton} />

            {/* Routes */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="container">
                            <img src="/logo.png" alt="BCL Management Logo" className="logo" />
                            <h1>BCL Management</h1>
                            <p>
                                Welcome to BCL management system. Keep track of all your <strong>clients</strong>, <strong>orders</strong>, and <strong>warehouses</strong> effortlessly.
                            </p>
                            <div className="button-group">
                                <button className="btn" onClick={() => (window.location.href = "/login")}>
                                    Log In
                                </button>
                                <button className="btn btn-primary" onClick={() => (window.location.href = "/signup")}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    }
                />
                <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
