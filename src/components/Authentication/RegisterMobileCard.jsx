import React from 'react'
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

function RegisterMobileCard({ viewRegisterMobile,setViewRegisterMobile }) {
  return (
    <div className={`fixed ${viewRegisterMobile ? "bottom-0" : "-bottom-full "} bg-light rounded-t-3xl h-[85vh] w-full z-30 transition-all duration-500`}>
      <div className='p-7 py-10 space-y-5'>
        <div className=' flex justify-between items-center'>
        <div className=''>
          <h2 className='text-3xl text-darktext font-bold'>Greetings..</h2>
        </div>
        <div className=' text-3xl' onClick={() => setViewRegisterMobile(!viewRegisterMobile)}><AiOutlineClose /></div>
        </div>
        <div className='space-y-2'>
          <label className='text-text '> Name</label>
          <input type='text' placeholder='Tell us Your Name' className='w-full placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans' />
        </div>
        <div className='space-y-2'>
          <label className='text-text '> Email</label>
          <input type='email' placeholder='Enter Your Email' className='w-full placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans ' />
        </div>
        <div className='space-y-2'>
          <label className='text-text '> PhoneNumber</label>
          <input type='number' placeholder='Enter Your Phone Number' className='w-full placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans' />
        </div>
        <div className='space-y-2'>
          <label className='text-text '> Password</label>
          <input type='password' placeholder='Give a password' className='w-full placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans' />
        </div>
        <div className='space-y-2'>
          <label className='text-text '>Confirm Password</label>
          <input type='password' placeholder='Retype password' className='w-full placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans' />
        </div>
        <div className='text-text'>
          <span className='text-xs'>By register you agree to our</span>
          <span className='text-xs text-blue hover:text-sky-500 cursor-pointer underline'>{' '} Terms and Conditions</span>
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='py-2 rounded-xl px-10 bg-blue hover:bg-light hover:text-blue text-light duration-300 flex items-center space-x-2 cursor-pointer'>
            <span className=''>Register</span>
            <span className=''><AiOutlineRight /> </span>
          </button>

        </div>
        <div className='flex items-center justify-between pt-2'>
          <button className='flex items-center border border-lightblue space-x-2 bg-trans w-full mx-3 justify-center py-2 rounded-xl hover:bg-light hover:text-blue text-bluetrans duration-200'>
            <span className=''><FcGoogle /></span>
            <span className=''>Google</span>
          </button>
          <button className='flex items-center border border-lightblue space-x-2 bg-trans w-full mx-3 justify-center py-2 rounded-xl hover:bg-light hover:text-blue text-bluetrans duration-200'>
            <span className='text-blue'><BsFacebook /> </span>
            <span className=''>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterMobileCard