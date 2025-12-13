import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Hero3D from './Hero3D';

const Register = ({ handleRegister, switchToLogin }) => {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("Passwords don't match!")
            return
        }

        handleRegister(firstName, email, password)
    }

    return (
        <div className='flex h-screen w-screen overflow-hidden bg-[#1c1c1c] text-white'>
            {/* Left Side - Hero Section */}
            <div className='hidden lg:flex flex-col w-1/2 bg-gradient-to-br from-emerald-800 to-emerald-900 items-center justify-center relative overflow-hidden'>
                <div className='relative w-full h-[50%] max-h-[500px] flex items-end justify-center pb-10'>
                    <Hero3D />
                </div>
                <div className='z-20 text-center px-10 pb-20'>
                    <h1 className='text-5xl font-bold mb-6 drop-shadow-lg tracking-wide'>Join EMS</h1>
                    <p className='text-xl text-emerald-100 max-w-md mx-auto drop-shadow-md leading-relaxed opacity-90'>
                        Create your account and start managing your tasks efficiently.
                    </p>
                </div>
            </div>

            {/* Right Side - Register Form */}
            <div className='w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#1c1c1c]'>
                <div className='w-full max-w-md space-y-8'>
                    <div className='text-center lg:text-left'>
                        <h2 className='text-3xl font-bold text-emerald-500'>Create Account</h2>
                        <p className='text-gray-400 mt-2'>Please fill in your details to register.</p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            submitHandler(e)
                        }}
                        className='flex flex-col gap-5'
                    >
                        <div className='space-y-2'>
                            <label className='text-sm text-gray-300'>Full Name</label>
                            <input
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                                required
                                className='w-full bg-[#2c2c2c] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all'
                                type="text"
                                placeholder='John Doe'
                            />
                        </div>

                        <div className='space-y-2'>
                            <label className='text-sm text-gray-300'>Email Address</label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                required
                                className='w-full bg-[#2c2c2c] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all'
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
                                    className='w-full bg-[#2c2c2c] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='••••••••'
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors'
                                >
                                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label className='text-sm text-gray-300'>Confirm Password</label>
                            <div className='relative w-full'>
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value)
                                    }}
                                    required
                                    className='w-full bg-[#2c2c2c] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder='••••••••'
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors'
                                >
                                    {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-600/20'>
                            Register
                        </button>

                        <p className='text-center text-gray-400 text-sm'>
                            Already have an account?{' '}
                            <span
                                onClick={switchToLogin}
                                className='text-emerald-500 font-medium cursor-pointer hover:text-emerald-400 transition-colors'
                            >
                                Login here
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
