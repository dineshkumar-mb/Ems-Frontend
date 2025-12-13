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
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#1c1c1c] rounded-xl shadow-lg shadow-yellow-500/10 border border-yellow-500/20'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='bg-yellow-600 text-[10px] uppercase font-bold px-3 py-1 rounded text-white'>{data.category}</h3>
                <h4 className='text-xs text-gray-400'>{data.taskDate}</h4>
            </div>
            <h2 className='text-xl font-bold text-white mb-2 leading-tight'>{data.taskTitle}</h2>
            <p className='text-sm text-gray-400 h-[45%] overflow-hidden'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 gap-2'>
                <button onClick={() => updateStatus('completed')} className='flex-1 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium py-2 px-3 text-xs transition-colors'>Mark Completed</button>
                <button onClick={() => updateStatus('failed')} className='flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium py-2 px-3 text-xs transition-colors'>Mark Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask