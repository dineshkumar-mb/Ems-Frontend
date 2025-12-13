import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#1c1c1c] rounded-xl shadow-lg shadow-red-500/10 border border-red-500/20'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='bg-red-600 text-[10px] uppercase font-bold px-3 py-1 rounded text-white'>{data.category}</h3>
                <h4 className='text-xs text-gray-400'>{data.taskDate}</h4>
            </div>
            <h2 className='text-xl font-bold text-white mb-2 leading-tight'>{data.taskTitle}</h2>
            <p className='text-sm text-gray-400 h-[45%] overflow-hidden'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button className='w-full bg-red-600 cursor-not-allowed opacity-80 text-white rounded-lg font-medium py-2 px-3 text-xs shadow-lg shadow-red-600/20'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask