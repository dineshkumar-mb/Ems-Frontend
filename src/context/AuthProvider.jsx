import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { API_ENDPOINTS } from '../config/api'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.GET_EMPLOYEES);
                if (response.data.success) {
                    setUserData(response.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch employees", error);
            }
        }
        fetchEmployees();
    }, [])

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider