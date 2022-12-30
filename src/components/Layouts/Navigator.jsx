import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

function Navigator() {
    return (
        <div className='my-5 mx-5 lg:mx-0'>
            <div className='flex text-xs space-x-2'>
                <span className='text-blue-600'>Home</span>
                <span className=''><AiOutlineRight /> </span>
                <span className='text-blue-600'>Dubai</span>
                <span className=''><AiOutlineRight /></span>
                <span className=''>Attractions</span>
            </div>
        </div>
    )
}

export default Navigator