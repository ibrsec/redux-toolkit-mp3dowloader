import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { CssBaseline } from '@mui/material'
import  Login  from '../pages/Login'
import PrivateRouter from './PrivateRouter'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <CssBaseline />
    <Navbar /> 
    <Routes>
        <Route path='/' element={<PrivateRouter/>} >
            <Route path="/home" element={<Home />}/>
        </Route>
        <Route path='/login' element={<Login/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter