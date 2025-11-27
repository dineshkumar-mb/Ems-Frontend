// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
    // Auth endpoints
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`, // Public registration
    GET_EMPLOYEES: `${API_BASE_URL}/api/auth/employees`,
    CREATE_USER: `${API_BASE_URL}/api/auth/users`, // Admin creates users
    DELETE_EMPLOYEE: (id) => `${API_BASE_URL}/api/auth/employees/${id}`,

    // Task endpoints
    CREATE_TASK: `${API_BASE_URL}/api/tasks/create`,
    GET_TASKS: (userId) => `${API_BASE_URL}/api/tasks/${userId}`,
    UPDATE_TASK: (userId, taskId) => `${API_BASE_URL}/api/tasks/${userId}/${taskId}`,
    DELETE_TASK: (userId, taskId) => `${API_BASE_URL}/api/tasks/${userId}/${taskId}`,
};

export default API_BASE_URL;
