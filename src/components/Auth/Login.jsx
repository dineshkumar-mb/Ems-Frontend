import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = ({ handleLogin, switchToRegister }) => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }


    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <h2 className='text-2xl font-bold text-emerald-600 mb-6 text-center'>Welcome Back</h2>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'
                    />
                    <div className='relative w-full mt-3'>
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                            className='w-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600'
                        >
                            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                        </button>
                    </div>
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
                    <p className='mt-4 text-gray-400'>
                        Don't have an account?{' '}
                        <span
                            onClick={switchToRegister}
                            className='text-emerald-600 cursor-pointer hover:underline'
                        >
                            Register here
                        </span>
                    </p>
                </form>
                <div className='mt-6 p-4 rounded bg-gray-800 bg-opacity-50 text-center w-full'>
                    <p className='text-sm text-gray-300 mb-2'>Admin Credentials:</p>
                    <div className='text-xs text-gray-400 space-y-1 font-mono'>
                        <p>Email: realadmin@example.com</p>
                        <p>Password: 123devpassword</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login