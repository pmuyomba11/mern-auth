import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
    <div className='p-5 max-w-lg mx-auto '>
      <h1 className='text-center my-5 font-semibold text-3xl'>Sign Up</h1>
      <form autoComplete="off" className='flex flex-col gap-4 shadow-lg p-10 '>
        <input type="text" name="username" id="username" placeholder='username' className='border p-3 rounded-lg focus:outline-none' />
        <input type="text" name="email" id="email" placeholder='email' className='border p-3 rounded-lg focus:outline-none' />
        <input type="text" name="password" id="password" placeholder='password' className='border p-3 rounded-lg focus:outline-none' />
        <button className='bg-slate-300 p-3 rounded-lg hover:bg-slate-600 hover:text-white'>Sign Up</button>
      </form>
      <div className='flex gap-2 p-4'>
        <p>Already have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in </span>
        </Link>
      </div>
    </div>
  )
}
