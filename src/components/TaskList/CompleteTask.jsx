import React from 'react'

const CompleteTask = ({ data }) => {

    return (
        <div className='flex-shrink-0 flex flex-col justify-between h-[300px] w-[280px] sm:w-[320px] p-5 bg-[#1c1c1c] rounded-xl shadow-lg shadow-green-500/10 border border-green-500/20'>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='bg-green-600 text-[10px] uppercase font-bold px-3 py-1 rounded text-white'>{data.category}</h3>
                    <h4 className='text-xs text-gray-400'>{data.taskDate}</h4>
                </div>
                <h2 className='text-lg font-bold text-white mb-2 leading-tight line-clamp-1'>{data.taskTitle}</h2>
                <p className='text-sm text-gray-400 line-clamp-4 leading-relaxed'>
                    {data.taskDescription}
                </p>
            </div>
            <div className='mt-4'>
                <button className='w-full bg-green-600 cursor-not-allowed opacity-80 text-white rounded-lg font-medium py-2.5 text-xs shadow-lg shadow-green-600/20'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask