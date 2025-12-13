import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'
import GreetingDecoration from './GreetingDecoration';

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  const getGreetingData = () => {
    const hours = new Date().getHours();
    if (hours < 12) return { text: "Good Morning", time: "morning" };
    if (hours < 17) return { text: "Good Afternoon", time: "afternoon" };
    if (hours < 21) return { text: "Good Evening", time: "evening" };
    return { text: "Good Night", time: "night" };
  }

  const { text: greeting, time: timeOfDay } = getGreetingData();

  return (
    <div className='flex items-center justify-between bg-[#1c1c1c] pb-6 border-b border-gray-800 relative overflow-hidden'>
      {/* Visual Decoration */}
      <GreetingDecoration timeOfDay={timeOfDay} />

      <div className='z-10'>
        <h1 className='text-gray-400 text-lg font-medium animate-fadeInUp flex items-center gap-2'>
          {greeting},
        </h1>
        <span className='text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-fadeInUp delay-100 inline-block'>
          {props.data ? props.data.firstName : 'Admin'} 👋
        </span>
      </div>
      <button
        onClick={logOutUser}
        className='z-10 bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-lg shadow-red-500/20'
      >
        Log Out
      </button>

      {/* 
        Tailwind Custom Animation Styles (Inline for immediate effect) 
        Ideally, these should be in tailwind.config.js, but standard CSS classes work too.
      */}
      <style>{`
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes rise {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
         @keyframes set {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fly {
             0% { transform: translateX(0) translateY(0); opacity: 0; }
             10% { opacity: 1; }
             90% { opacity: 1; }
             100% { transform: translateX(-100px) translateY(-20px); opacity: 0; }
        }
        .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-100 {
            animation-delay: 0.1s;
        }
      `}</style>
    </div>
  )
}

export default Header