import React from 'react'
import { CiDark } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <nav className='h-full w-full p-4 flex items-center justify-center'>
        <div className='text-center w-full'>
          <p className='text-2xl font-semibold'>My<span className='text-red-600'>Portfolio</span></p>
        </div>
        <div className='text-center w-full'>
          <p><CiDark /></p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar