import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateComponent = () => {
    const getData = localStorage.getItem('user')
    return getData ? <Outlet /> : <Navigate to={'/signup'} />
}

export default PrivateComponent
