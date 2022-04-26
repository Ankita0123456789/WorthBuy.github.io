import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register() {
  return (
    <>
        <NavLink to='/register' className='btn btn-outline-light ms-2'>
        <i className='fa fa-user-plus me-1'></i>Register</NavLink>
    </>
  )
}
