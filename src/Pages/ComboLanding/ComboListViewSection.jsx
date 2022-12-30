import React from 'react'
import { AttractionLandingLinks } from '../../data'
import { SlCalender } from 'react-icons/sl'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { GoThumbsup } from 'react-icons/go'

function ComboListViewSection() {
  return (
    <div className='bg-light lg:bg-light'>
    <div className=' py-2 lg:py-0 mx-4 space-y-10'>
        {/* {loading ? (
            "loading...." 
        ) : (
            excursions?.map((item) => ( */}
         {AttractionLandingLinks?.map((item) => (
            <div className='lg:grid lg:grid-cols-12 gap-10 text-text bg-soft items-center my-5 lg:my-0 rounded-xl lg:rounded-lg group'>
                <div className='col-span-5 z-10 p-3'>
                    <img src={item.img} alt={item.name} className='bg-no-repeat cover rounded-xl h-56 md:h-96 lg:h-72 w-full   group-hover:shadow-sm transition-all duration-800' />
                </div>
                <div className='col-span-7 px-4 lg:px-0 space-y-4 my-3'>
                    <p className='font-light text-dark text-lg'>{item.place} </p>
                    <h2 className='font-medium text-main text-2xl'>{item.name} </h2>
                    <div className='text-text flex space-x-1 items-center'>
                        <span className='text-lg'><GoThumbsup /></span>
                        <span className=''>80% liked it from {item.reviews} reviews </span>
                    </div>
                    <span className='text-sm'>Posted on Travellers choice</span>
                    <div className=' flex items-center space-x-1 text-green-600'>
                        <span className=''><SlCalender /> </span>
                        <span className='text-sm'>Free cancellation available</span>
                    </div>
                    <div className='text-lg text-main flex space-x-1 justify-end items-center pb-3 lg:pr-5'>
                        <span className=''>from</span>
                        <span className=' font-medium flex items-center'> AED 175 <AiOutlineRight /> </span>
                    </div>
                </div>
            </div>
         ))}
         {/* ))
         )} */}
        <div className='bg-light py-3 flex space-x-2 justify-center items-center'>
            <span className='h-14 w-14 rounded-full bg-soft flex items-center justify-center'><AiOutlineLeft /> </span>
            <span className='h-14 w-14 rounded-full bg-main text-light flex items-center justify-center'>1</span>
            <span className='h-14 w-14 rounded-full bg-soft flex items-center justify-center'>2</span>
            <span className='h-14 w-14 rounded-full bg-soft flex items-center justify-center'>....</span>
            <span className='h-14 w-14 rounded-full bg-soft flex items-center justify-center'>10</span>
            <span className='h-14 w-14 rounded-full bg-soft flex items-center justify-center'><AiOutlineRight /> </span>
        </div>
    </div>
</div>
  )
}

export default ComboListViewSection