import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddProducts, Home, Login, Signup } from '../pages'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddProducts />} />
            <Route path='/update' element={<Home />} />
            <Route path='/profile' element={<Home />} />
            <Route path='/logout' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default Router
