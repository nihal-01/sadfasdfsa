import React from 'react'
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { RiLockPasswordLine } from 'react-icons/ri'

function LoginMobileCard({ viewloginMobile, setViewloginMobile }) {
    return (
        <div className={`fixed ${viewloginMobile ? "bottom-0" : "-bottom-full "} bg-light rounded-t-3xl h-[85vh] w-full z-30 transition-all duration-500`}>
            <div className='py-10 p-7 space-y-5'>
                <div className=' flex justify-between items-center'>
                    <div className=''>
                        <h2 className='text-3xl text-darktext font-bold'>Welcome Back!!</h2>
                    </div>
                    <div className=' text-3xl' onClick={() => setViewloginMobile(!viewloginMobile)}><AiOutlineClose /></div>
                </div>

                <div className='space-y-5 py-4'>
                    <button className='flex items-center border border-main space-x-2 bg-trans w-full  justify-center py-4 rounded-xl hover:bg-light hover:text-main text-maintrans duration-200'>
                        <span className='text-3xl'><FcGoogle /></span>
                        <span className=''>Continue with google</span>
                    </button>
                    <button className='flex items-center border border-main space-x-2 bg-trans w-full  justify-center py-4 rounded-xl hover:bg-light hover:text-main text-maintrans duration-200'>
                        <span className=' text-3xl text-blue'><BsFacebook /> </span>
                        <span className=''>Continue with facebook</span>
                    </button>
                </div>
                <div className='space-y-2 border-t py-4'>
                    <label className='text-text '> Email</label>
                    <input type='email' placeholder='Enter Your Email' className='w-full placeholder:text-maintrans border border-main bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans ' />
                </div>
                <div className='space-y-2'>
                    <label className='text-text '> Password</label>
                    <input type='password' placeholder='Give a password' className='w-full placeholder:text-maintrans border border-main bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans' />
                </div>
                <div className='text-text'>
                    <span className='text-xs'>By Signing In you agree to our</span>
                    <span className='text-xs text-main hover:text-orange-500 cursor-pointer underline'>{' '} Terms and Conditions</span>
                </div>
                <div className=' flex justify-center'>
                    <div className='space-y-3'>
                        <div className=' flex justify-center'>
                            <button type='submit' className='py-2 rounded-xl px-5 bg-main hover:bg-light hover:text-main text-light duration-300 flex items-center space-x-2'>
                                <span className=''>Sign In</span>
                                <span className=''><AiOutlineRight /> </span>
                            </button>
                        </div>
                        <span className='text-sm flex space-x-1 items-center hover:text-main cursor-pointer  text-maintrans'>
                            <span className=''><RiLockPasswordLine /> </span>
                            <span className=''>Forgot password</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginMobileCard