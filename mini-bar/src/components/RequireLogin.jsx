import React from 'react'
import { Navigate } from 'react-router-dom'

export default function RequireLogin({user, children}) {
    return (
        user ? children : <Navigate to="/welcome" replace></Navigate>
    )
}
