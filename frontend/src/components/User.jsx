import React from 'react'

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('Form Submitted')
}

const User = () => {
  return (
    <div className='w-screen'>
      {/* Inner Container */}
      <div>
        <div className='border-2 p-5 m-10'>
          {/* Full Name */}
          <div className='flex flex-col-reverse mt-10 mb-10'>
            <label htmlFor="full-name" className='text-2xl text-gold font-bold'>FULL NAME</label>
            <input type="text" name="" id="" className='border-b text-2xl' />
          </div>

          {/* Email */}
          <div className='flex flex-col-reverse mt-10 mb-10'>
            <label htmlFor="email" className='text-2xl text-gold font-bold'>EMAIL</label>
            <input type="text" name="" id="" className='border-b text-2xl' />
          </div>

          {/* Password */}
          <div className='flex flex-col-reverse mt-10 mb-10'>
            <label htmlFor="password" className='text-2xl text-gold font-bold'>PASSWORD</label>
            <input type="password" name="" id="" className='border-b text-2xl'/>
          </div>

          {/* Button */}
          <div>
            {/* Render custom home page on successful login */}
            <button className='border-2 rounded-lg p-2 w-full bg-gold font-bold' onClick={handleSubmit}>LOGIN</button>
          </div>

          {/* Sign Up option */}
          <div className='mt-5'>
            <p className='text-center hover:text-gold cursor-pointer'>Can't Login? Sign up here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User