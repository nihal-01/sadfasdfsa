import React from 'react'
import { RiShareForward2Fill } from 'react-icons/ri'
import { IoLocationOutline } from 'react-icons/io5'

function MapSection() {
  return (
    <>
        <div className='space-y-2 cursor-pointer'>
            <div className=' font-medium text-lg text-lightblue'>
                Burj Khalifa
            </div>
            <div className=' font-medium text-xs'>
                Starting point
            </div>
            <div className='flex space-x-4'>
                <div className='text-green-600 text-3xl'><IoLocationOutline /> </div>
                <div className=''>
                    <div className='flex space-x-2 text-text'>
                        <span className=''>Burj Khalifa </span>
                        <span className=''><RiShareForward2Fill /> </span>
                    </div>
                    <p className='text-xs text-text'>1 Sheikh Mohammed bin Rashid</p>
                    <p className='text-xs text-text'>Blvd - Downtown Dubai - Dubai -United Arab Emirates</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default MapSection