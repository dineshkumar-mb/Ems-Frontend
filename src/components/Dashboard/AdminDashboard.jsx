import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import CreateUser from '../other/CreateUser'

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full p-4 sm:p-6 md:p-7 overflow-x-hidden'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <CreateUser />
            <AllTask />
        </div>
    )
}

export default AdminDashboard