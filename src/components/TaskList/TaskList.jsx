import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    const [filter, setFilter] = React.useState('all')

    const filteredTasks = data.tasks.filter(task => {
        if (filter === 'all') return true
        if (filter === 'active') return task.active
        if (filter === 'newTask') return task.newTask
        if (filter === 'completed') return task.completed
        if (filter === 'failed') return task.failed
        return true
    })

    return (
        <div className='flex flex-col items-center justify-start gap-3 sm:gap-5 w-full py-1 mt-6 sm:mt-8 md:mt-10'>
            <div className='flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-4 justify-center'>
                <button onClick={() => setFilter('all')} className={`px-3 py-1.5 sm:py-1 rounded text-xs sm:text-sm ${filter === 'all' ? 'bg-emerald-500' : 'bg-gray-700'}`}>All</button>
                <button onClick={() => setFilter('active')} className={`px-3 py-1.5 sm:py-1 rounded text-xs sm:text-sm ${filter === 'active' ? 'bg-yellow-500' : 'bg-gray-700'}`}>Active</button>
                <button onClick={() => setFilter('newTask')} className={`px-3 py-1.5 sm:py-1 rounded text-xs sm:text-sm ${filter === 'newTask' ? 'bg-blue-500' : 'bg-gray-700'}`}>New</button>
                <button onClick={() => setFilter('completed')} className={`px-3 py-1.5 sm:py-1 rounded text-xs sm:text-sm ${filter === 'completed' ? 'bg-green-500' : 'bg-gray-700'}`}>Completed</button>
                <button onClick={() => setFilter('failed')} className={`px-3 py-1.5 sm:py-1 rounded text-xs sm:text-sm ${filter === 'failed' ? 'bg-red-500' : 'bg-gray-700'}`}>Failed</button>
            </div>
            <div id='tasklist' className='h-[350px] overflow-x-auto flex items-start justify-start gap-4 sm:gap-6 flex-nowrap w-full pb-8 pt-2 px-2'>
                {filteredTasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} userId={data._id} />
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} userId={data._id} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} userId={data._id} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} userId={data._id} />
                    }
                })}
            </div>
        </div>
    )
}

export default TaskList