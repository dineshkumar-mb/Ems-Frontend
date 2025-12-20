import React from 'react'

const TaskListNumbers = ({ data }) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10'>

            <div className='rounded-xl py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-9 bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/20 transform hover:scale-[1.02] transition-all'>
                <h2 className='text-3xl sm:text-4xl font-bold text-white'>{data.taskCounts.newTask}</h2>
                <h3 className='text-base sm:text-lg mt-1 font-medium text-blue-100'>New Task</h3>
            </div>

            <div className='rounded-xl py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-9 bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/20 transform hover:scale-[1.02] transition-all'>
                <h2 className='text-3xl sm:text-4xl font-bold text-white'>{data.taskCounts.completed}</h2>
                <h3 className='text-base sm:text-lg mt-1 font-medium text-green-100'>Completed Task</h3>
            </div>

            <div className='rounded-xl py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-9 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/20 transform hover:scale-[1.02] transition-all'>
                <h2 className='text-3xl sm:text-4xl font-bold text-white'>{data.taskCounts.active}</h2>
                <h3 className='text-base sm:text-lg mt-1 font-medium text-yellow-100'>Accepted Task</h3>
            </div>

            <div className='rounded-xl py-4 sm:py-5 md:py-6 px-6 sm:px-7 md:px-9 bg-gradient-to-br from-red-400 to-red-600 shadow-lg shadow-red-500/20 transform hover:scale-[1.02] transition-all'>
                <h2 className='text-3xl sm:text-4xl font-bold text-white'>{data.taskCounts.failed}</h2>
                <h3 className='text-base sm:text-lg mt-1 font-medium text-red-100'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers