import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoutes = ({children,userz,path='/login'}) => {
  if(!userz)
    return <Navigate to={path} />

    return children?children:<Outlet />
}

export default ProtectRoutes