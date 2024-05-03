import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const user = useSelector((state)=>state.login.user)
    console.log(user); 
  return user.email && user.password ? <Outlet /> : <Navigate to="/login"/>
}

export default PrivateRouter