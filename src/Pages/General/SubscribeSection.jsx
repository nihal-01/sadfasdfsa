import React from 'react'
import  { GiIsland } from 'react-icons/gi'

function SubscribeSection() {
  return (
    <div className='bg-lightblue'>
        <div className='lg:max-w-screen-xl lg:mx-auto'>
            <div className='md:flex space-x-10 py-20 lg:px-20 space-y-3'>
                <div className='text-6xl flex justify-center items-center text-semisoft'>
                    <GiIsland />
                </div>
                <div className='text-light'>
                    <div className='text-3xl'>Get Updates & More</div>
                    <div className='text-lg font-light'>Thoughtful thoughts to your inbox</div>
                </div>
                <div className='lg:pl-36 md:flex block'>
                    <div className=''>
                    <input type='email' placeholder='your email ' className='py-4 px-3 lg:w-[20em] lg:rounded-l-xl rounded-md' />

                    </div>
                    <div className=''>

                    <button className='text-light font-medium bg-darktext px-3 py-2 rounded-md md:py-4  mt-2 md:mt-0 lg:rounded-r-xl'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscribeSection