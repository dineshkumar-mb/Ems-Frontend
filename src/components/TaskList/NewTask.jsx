import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_ENDPOINTS } from '../../config/api'

const NewTask = ({ data, userId }) => {

    const handleAcceptTask = async () => {
        console.log('Accept Task clicked');
        console.log('User ID:', userId);
        console.log('Task ID:', data._id);
        console.log('Task data:', data);

        if (!userId) {
            toast.error("User ID is missing!");
            console.error("userId is undefined or null");
            return;
        }

        if (!data._id) {
            toast.error("Task ID is missing!");
            console.error("Task _id is undefined or null");
            return;
        }

        try {
            const url = API_ENDPOINTS.UPDATE_TASK(userId, data._id);
            console.log('API URL:', url);

            const response = await axios.put(url, {
                status: 'active'
            });

            console.log('Response:', response.data);

            if (response.data.success) {
                toast.success("Task Accepted!");

                // Update localStorage with fresh user data from API response
                const loggedInUser = localStorage.getItem('loggedInUser');
                if (loggedInUser) {
                    const userData = JSON.parse(loggedInUser);
                    // Update with fresh data from server
                    userData.data = response.data.data;
                    localStorage.setItem('loggedInUser', JSON.stringify(userData));
                    console.log('Updated localStorage with fresh user data');
                }

                // Reload to show updated data
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            } else {
                toast.error(response.data.message || "Failed to accept task");
            }
        } catch (error) {
            console.error("Error accepting task:", error);
            console.error("Error response:", error.response?.data);
            toast.error(error.response?.data?.message || "Failed to accept task");
        }
    }

    return (
        <div className='flex-shrink-0 flex flex-col justify-between h-[300px] w-[280px] sm:w-[320px] p-5 bg-[#1c1c1c] rounded-xl shadow-lg shadow-blue-500/10 border border-blue-500/20'>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='bg-blue-600 text-[10px] uppercase font-bold px-3 py-1 rounded text-white'>{data.category}</h3>
                    <h4 className='text-xs text-gray-400'>{data.taskDate}</h4>
                </div>
                <h2 className='text-lg font-bold text-white mb-2 leading-tight line-clamp-1'>{data.taskTitle}</h2>
                <p className='text-sm text-gray-400 line-clamp-4 leading-relaxed'>
                    {data.taskDescription}
                </p>
            </div>
            <div className='mt-4'>
                <button onClick={handleAcceptTask} className='w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium py-2.5 text-xs transition-colors shadow-lg shadow-blue-600/20'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask