import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineSearch, AiOutlineUp } from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

function FlightCard() {

    const [ dropdown , setDropdown ] = useState(false)
  return (
    <form>
    <div className='flex px-5 pt-7 pb-4 space-x-3'>
        <div className='flex space-x-2'>
            <div className=''>
                <input type='radio' name='choose' />
            </div>
            <div className='text-sm'>
                Round trip
            </div>
        </div>
        <div className='flex space-x-2'>
            <div className=''>
                <input type='radio' name='choose' />
            </div>
            <div className='text-sm'>
                One-way
            </div>
        </div>
        <div className='flex space-x-2'>
            <div className=''>
                <input type='radio' name='choose' />
            </div>
            <div className='text-sm'>
                Multi-city
            </div>
        </div>
        <div className='flex border rounded-xl justify-between items-center relative text-darktext'>
            <div className='flex items-center cursor-pointer' onClick={() => setDropdown(!dropdown)} >
                <span className='px-3 text-sm'>Peoples</span>
                <span className='px-3 text-sm'>{dropdown ? <AiOutlineUp /> : <AiOutlineDown />}  </span>
            </div>
            {/* absolute div */}
            {dropdown && (
                <div className="absolute bg-soft border-2 right-0 top-[25px] rounded-2xl w-[15em] z-10 shadow-sm">
                    <ul>
                        <li>
                            <div
                                className="flex items-center gap-[12px] text-sm px-6 py-[12px]  transition-all text-darktext justify-between"
                            >
                                <span>Adults</span>
                                <span>
                                    <input type='number' min={0} max={10} className='text-center border placeholder:text-text py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="flex items-center gap-[12px] text-sm px-6 py-[12px] transition-all text-darktext justify-between"
                            >
                                <span>Seniors</span>
                                <span>
                                    <input type='number' min={0} max={10} className='text-center border placeholder:text-text py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="flex items-center gap-[12px] text-sm px-6 py-[12px] transition-all text-darktext justify-between"
                            >
                                <span>Children</span>
                                <span>
                                    <input type='number' min={0} max={10} className='text-center border placeholder:text-text py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
            {/* absolute div */}
        </div>
    </div>
    <div className='md:grid md:grid-cols-12 gap-0 pb-7 space-y-4 md:space-y-0'>
        <div className='md:col-span-3 flex justify-center items-center md:border-r-2 border-bluetrans'>
            <div className='space-y-2 w-10/12 '>
                <div className='flex items-center space-x-2 text-darktext'>
                    <span className='text-2xl text-blue'><IoLocationOutline /> </span>
                    <span className='text-lg '>Departure from</span>
                </div>
                <div className=''>
                    <input type='text' placeholder='Where do you want to go?' className='px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                </div>
            </div>
        </div>
        <div className='md:col-span-3 flex justify-center items-center md:border-r-2 border-bluetrans'>
            <div className='space-y-2 w-10/12 '>
                <div className='flex items-center space-x-2 text-darktext'>
                    <span className='text-2xl text-blue'><IoLocationOutline /> </span>
                    <span className='text-lg'>Departure to</span>
                </div>
                <div className=''>
                    <input type='text' placeholder='Choose date' className='px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                </div>
            </div>
        </div>
        <div className='md:col-span-2 flex justify-center items-center md:border-r-2 border-bluetrans'>
            <div className='space-y-2 w-10/12 '>
                <div className='flex items-center space-x-2 text-darktext'>
                    <span className='text-2xl text-blue'><BsCalendar2Date /> </span>
                    <span className='text-lg'>Leave</span>
                </div>
                <div className=''>
                    <input type='date' placeholder='Choose date' className='px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                </div>
            </div>
        </div>
        <div className='md:col-span-2 flex justify-center items-center md:border-r-2 border-bluetrans'>
            <div className='space-y-2 w-10/12 '>
                <div className='flex items-center space-x-2 text-darktext'>
                    <span className='text-2xl text-blue'><BsCalendar2Date /> </span>
                    <span className='text-lg'>Return</span>
                </div>
                <div className=''>
                    <input type='date' placeholder='Choose date' className='px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                </div>
            </div>
        </div>
        <div className='md:col-span-2 flex justify-center items-center'>
            <div className=''>
                <button className='h-14 w-14 bg-blue rounded-xl text-light text-3xl flex justify-center items-center'>
                    <AiOutlineSearch />
                </button>
            </div>
        </div>
    </div>
</form>
  )
}

export default FlightCard