import React from 'react'
import { Link } from 'react-router-dom'
import { SlInfo } from 'react-icons/sl'

function InfoSection() {
  return (
    <div className='mx-5 my-7 lg:max-w-screen-xl lg:mx-auto'>
        <div className=' rounded-2xl border border-text text-text py-2 lg:py-6 flex items-center px-2 space-x-2'>
            <div className='bg-red-200 text-red-600 rounded-xl text-2xl flex items-center justify-center p-2 '><SlInfo /> </div>
            <div className='text-sm'>Check local guidelines before planning your visit. 
            <Link to='/' className='text-blue underline'>{' '} Read more</Link>
            </div>
        </div>
    </div>
  )
}

export default InfoSection