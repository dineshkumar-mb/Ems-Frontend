import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_ENDPOINTS } from '../../config/api'

const CreateUser = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('employee')

    const submitHandler = async (e) => {
        e.preventDefault()

        if (!firstName || !email || !password) {
            toast.error("Please fill all fields")
            return
        }

        try {
            const response = await axios.post(API_ENDPOINTS.CREATE_USER, {
                firstName,
                email,
                password,
                role
            });

            if (response.data.success) {
                toast.success("User Created Successfully");
                setFirstName('');
                setEmail('');
                setPassword('');
                setRole('employee');

                // Optionally refresh the employee list
                window.location.reload();
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to create user");
        }
    }

    return (
        <div className='p-4 sm:p-5 bg-[#1c1c1c] mt-4 sm:mt-5 rounded'>
            <h2 className='text-lg sm:text-xl font-medium mb-3 sm:mb-4'>Create New User</h2>
            <form onSubmit={submitHandler} className='flex flex-col lg:flex-row flex-wrap w-full items-start justify-between gap-4 lg:gap-0'>
                <div className='w-full lg:w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>First Name</h3>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='text-sm py-1 px-2 w-full lg:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='John'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Email</h3>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='text-sm py-1 px-2 w-full lg:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="email"
                            placeholder='john@example.com'
                        />
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Password</h3>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='text-sm py-1 px-2 w-full lg:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="password"
                            placeholder='••••••••'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Role</h3>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className='text-sm py-1 px-2 w-full lg:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                        >
                            <option value='employee' className='bg-gray-800'>Employee</option>
                            <option value='admin' className='bg-gray-800'>Admin</option>
                        </select>
                    </div>
                </div>

                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
                    Create User
                </button>
            </form>
        </div>
    )
}

export default CreateUser
