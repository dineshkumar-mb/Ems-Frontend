import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import CreateUser from '../other/CreateUser'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <CreateUser />
            <AllTask />
        </div>
    )
}

export default AdminDashboard