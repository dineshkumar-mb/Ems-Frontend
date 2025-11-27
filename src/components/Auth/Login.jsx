import React, { useState } from 'react'

const Login = ({ handleLogin, switchToRegister }) => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


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
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
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
            </div>
        </div>
    )
}

export default Login