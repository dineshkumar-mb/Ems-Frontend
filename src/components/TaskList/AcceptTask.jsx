import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_ENDPOINTS } from '../../config/api'

const AcceptTask = ({ data, userId }) => {

    const updateStatus = async (status) => {
        try {
            const response = await axios.put(API_ENDPOINTS.UPDATE_TASK(userId, data._id), {
                status: status
            });
            if (response.data.success) {
                toast.success(`Task marked as ${status}`);

                // Update localStorage with fresh user data
                const loggedInUser = localStorage.getItem('loggedInUser');
                if (loggedInUser) {
                    const userData = JSON.parse(loggedInUser);
                    userData.data = response.data.data;
                    localStorage.setItem('loggedInUser', JSON.stringify(userData));
                }

                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        } catch (error) {
            console.error("Error updating task:", error);
            toast.error(error.response?.data?.message || "Failed to update task");
        }
    }

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 '>
                <button onClick={() => updateStatus('completed')} className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button onClick={() => updateStatus('failed')} className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask