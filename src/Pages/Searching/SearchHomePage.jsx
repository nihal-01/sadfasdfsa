import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GiIsland } from 'react-icons/gi'
import { MdOutlineAttractions } from 'react-icons/md'

function SearchHomePage({ viewCategory, setViewCategory }) {
    const [viewFilter, setViewFilter] = useState(false)
    return (
        <>
            <div className={`${viewFilter ? "fixed" : "hidden"}  z-10 bottom-0 left-0 right-0 top-0 lightglass`} onClick={() => setViewFilter(!viewFilter)}></div>
        <div className='py-10'>
            <div className='lg:max-w-screen-xl lg:mx-auto space-y-7'>
                <div className='mx-5 lg:mx-0'>
                    <input type='search' placeholder='Search here!!!' className='px-3 bg-trans w-full border placeholder:text-text py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-lg text-darktext' />
                </div>
                <div className={`bg-light  p-5 lg:p-0 rounded-t-3xl lg:rounded-none lg:bg-light lg:h-auto lg:w-auto h-[50vh] w-full fixed lg:static ${viewFilter ? "bottom-0" : "-bottom-full"} z-10 transition-all duration-500`}>
                    <div className='flex lg:hidden justify-between text-darktext p-3'>
                        <span className='text-xl font-semibold'>Filters</span>
                        <span className='text-3xl' onClick={() => setViewFilter(!viewFilter)}><AiOutlineClose /></span>
                    </div>
                    <div className={`overflow-x-auto `}>
                        <div className=' justify-between space-x-1 lg:grid lg:grid-cols-6 gap-2 lg:gap-7 px-1'>
                            <div className='space-x-2 flex px-3 hover:text-lightblue lg:justify-center items-center py-4 rounded-lg lg:border lg:border-lightblue cursor-pointer'>
                                <span className='text-lightblue'> <GiIsland /></span>
                                <span className=''>Tours</span>
                            </div>
                            <div className='flex space-x-2 px-3 hover:text-lightblue lg:justify-center items-center py-4 rounded-lg lg:border lg:border-lightblue cursor-pointer'>
                                <span className='text-lightblue'>lg</span>
                                <span className=''>Activities</span>
                            </div>
                            <div className='flex space-x-2 px-3 hover:text-lightblue lg:justify-center items-center py-4 rounded-lg lg:border lg:border-lightblue cursor-pointer'>
                                <span className='text-lightblue'><MdOutlineAttractions /></span>
                                <span className=''>Attraction</span>
                            </div>
                            <div className='flex space-x-2 px-3 hover:text-lightblue lg:justify-center items-center py-4 rounded-lg lg:border lg:border-lightblue cursor-pointer'>
                                <span className='text-lightblue'>lg</span>
                                <span className=''>Landmarks</span>
                            </div>
                            <div className='flex space-x-2 px-3 hover:text-lightblue lg:justify-center items-center py-4 rounded-lg lg:border lg:border-lightblue cursor-pointer'>
                                <span className='text-lightblue'>lg</span>
                                <span className=''>Museums</span>
                            </div>
                            <div className='flex space-x-2 px-3 hover:text-lightblue lg:justify-center items-center py-4 rounded-lg lg:border lg:border-lightblue cursor-pointer'>
                                <span className='text-lightblue'>lg</span>
                                <span className=''>Extras</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-around lg:hidden'>
                    <span className=''>
                        <button className='border border-blue rounded-lg px-10 py-2 hover:text-blue' onClick={() => setViewFilter(!viewFilter)}>Filters</button>
                    </span>
                    <span className=''>
                        <button className='border border-blue rounded-lg px-5 py-2'onClick={() => setViewCategory(!viewCategory)}>Category</button>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchHomePage