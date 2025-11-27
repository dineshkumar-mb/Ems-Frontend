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
        <div className='flex flex-col items-center justify-start gap-5 w-full py-1 mt-10'>
            <div className='flex gap-3 mb-4'>
                <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-emerald-500' : 'bg-gray-700'}`}>All</button>
                <button onClick={() => setFilter('active')} className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-yellow-500' : 'bg-gray-700'}`}>Active</button>
                <button onClick={() => setFilter('newTask')} className={`px-3 py-1 rounded ${filter === 'newTask' ? 'bg-blue-500' : 'bg-gray-700'}`}>New</button>
                <button onClick={() => setFilter('completed')} className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-green-500' : 'bg-gray-700'}`}>Completed</button>
                <button onClick={() => setFilter('failed')} className={`px-3 py-1 rounded ${filter === 'failed' ? 'bg-red-500' : 'bg-gray-700'}`}>Failed</button>
            </div>
            <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full'>
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