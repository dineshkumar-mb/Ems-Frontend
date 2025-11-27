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
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button onClick={handleAcceptTask} className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask