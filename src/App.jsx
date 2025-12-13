import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_ENDPOINTS } from './config/api';

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)
  const [showRegister, setShowRegister] = useState(false)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [])


  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(API_ENDPOINTS.LOGIN, { email, password });
      if (response.data.success) {
        setUser(response.data.data.role);
        setLoggedInUserData(response.data.data);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: response.data.data.role, data: response.data.data }));
        toast.success("Login successful!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    }
  }

  const handleRegister = async (firstName, email, password) => {
    try {
      const response = await axios.post(API_ENDPOINTS.REGISTER, {
        firstName,
        email,
        password
      });

      if (response.data.success) {
        toast.success(response.data.message || "Registration successful! Please login.");
        setShowRegister(false); // Switch back to login view
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  }

  const switchToRegister = () => {
    setShowRegister(true);
  }

  const switchToLogin = () => {
    setShowRegister(false);
  }


  return (
    <>
      {!user ? (
        showRegister ?
          <Register handleRegister={handleRegister} switchToLogin={switchToLogin} />
          :
          <Login handleLogin={handleLogin} switchToRegister={switchToRegister} />
      ) : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      <ToastContainer />
    </>
  )
}

export default App