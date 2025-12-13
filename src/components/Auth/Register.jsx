import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';

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
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <h2 className='text-2xl font-bold text-emerald-600 mb-6 text-center'>Create Account</h2>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
                        type="text"
                        placeholder='Enter your name'
                    />
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
                        type="email"
                        placeholder='Enter your email'
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
                            placeholder='Create password'
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600'
                        >
                            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                        </button>
                    </div>
                    <div className='relative w-full mt-3'>
                        <input
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }}
                            required
                            className='w-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder='Confirm password'
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600'
                        >
                            {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                        </button>
                    </div>
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
                        Register
                    </button>
                    <p className='mt-4 text-gray-400'>
                        Already have an account?{' '}
                        <span
                            onClick={switchToLogin}
                            className='text-emerald-600 cursor-pointer hover:underline'
                        >
                            Login here
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register
