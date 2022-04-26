import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <>
         <NavLink to='/login' className='btn btn-outline-light'>
            <i className='fa fa-sign-in me-1'></i>Login</NavLink>
    </>
  )
}
