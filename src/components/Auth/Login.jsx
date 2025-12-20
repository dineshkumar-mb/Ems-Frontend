import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Hero3D from './Hero3D';

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
        <div className='flex h-screen w-screen overflow-hidden bg-[#1c1c1c] text-white'>
            {/* Left Side - Hero Section */}
            <div className='hidden lg:flex flex-col w-1/2 bg-gradient-to-br from-emerald-800 to-emerald-900 items-center justify-center relative overflow-hidden'>
                <div className='relative w-full h-[50%] max-h-[500px] flex items-end justify-center pb-10'>
                    <Hero3D />
                </div>
                <div className='z-20 text-center px-10 pb-20'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg tracking-wide'>EMS System</h1>
                    <p className='text-lg md:text-xl text-emerald-100 max-w-md mx-auto drop-shadow-md leading-relaxed opacity-90'>
                        Streamline your workflow with our advanced Employee Management System.
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className='w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 bg-[#1c1c1c] overflow-y-auto'>
                <div className='w-full max-w-md space-y-6 sm:space-y-8 my-8'>
                    {/* Mobile Hero View (Visible only on lg and down) */}
                    <div className='lg:hidden w-full flex flex-col items-center justify-center mb-8'>
                        <div className='w-40 h-40 sm:w-48 sm:h-48 mb-4'>
                            <Hero3D />
                        </div>
                        <h1 className='text-3xl font-bold text-center text-white drop-shadow-lg'>EMS System</h1>
                    </div>

                    <div className='text-center lg:text-left'>
                        <h2 className='text-2xl sm:text-3xl font-bold text-emerald-500'>Welcome Back</h2>
                        <p className='text-gray-400 mt-2 text-sm sm:text-base'>Please enter your details to sign in.</p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            submitHandler(e)
                        }}
                        className='flex flex-col gap-4 sm:gap-5'
                    >
                        <div className='space-y-2'>
                            <label className='text-sm text-gray-300'>Email Address</label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                required
                                className='w-full bg-[#2c2c2c] border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm sm:text-base'
                                type="email"
                                placeholder='hello@example.com'
                            />
                        </div>

                        <div className='space-y-2'>
                            <label className='text-sm text-gray-300'>Password</label>
                            <div className='relative w-full'>
                                <input
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    required
                                    className='w-full bg-[#2c2c2c] border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm sm:text-base'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='••••••••'
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors'
                                >
                                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-600/20 text-sm sm:text-base'>
                            Log in
                        </button>

                        <p className='text-center text-gray-400 text-xs sm:text-sm'>
                            Don't have an account?{' '}
                            <span
                                onClick={switchToRegister}
                                className='text-emerald-500 font-medium cursor-pointer hover:text-emerald-400 transition-colors'
                            >
                                Register here
                            </span>
                        </p>
                    </form>

                    <div className='mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800/50'>
                        <div className='bg-emerald-900/10 border border-emerald-900/20 rounded-lg p-3 sm:p-4'>
                            <p className='text-xs font-semibold text-emerald-500 mb-2 uppercase tracking-wider'>Admin Access</p>
                            <div className='flex flex-col gap-1 text-xs text-gray-400 font-mono'>
                                <div className='flex justify-between'>
                                    <span>Email:</span>
                                    <span className='text-gray-300 select-all'>realadmin@example.com</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Password:</span>
                                    <span className='text-gray-300 select-all'>123devpassword</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login