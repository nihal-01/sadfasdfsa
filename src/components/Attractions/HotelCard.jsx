import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

function HotelCard() {

    const [ dropdown, setDropdown ] = useState(false)
    return (
        <div className='md:grid md:grid-cols-12 gap-0 py-7 space-y-4 md:space-y-0'>
            <div className='md:col-span-3 flex justify-center items-center md:border-r-2 border-bluetrans'>
                <div className='space-y-2 w-10/12 '>
                    <div className='flex items-center space-x-2 text-darktext'>
                        <span className='text-2xl text-blue'><IoLocationOutline /> </span>
                        <span className='text-lg '>Departure</span>
                    </div>
                    <div className=''>
                        <input type='text' placeholder='Where do you want to go?' className='px-3 w-full border-none placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
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
            <div className='md:col-span-4 flex justify-center items-center md:border-r-2 border-bluetrans'>
                <div className='space-y-2 w-10/12 '>
                    <div className='flex items-center space-x-2 text-darktext'>
                        <span className='text-2xl text-blue'><BsCalendar2Date /> </span>
                        <span className='text-lg'>People and Room</span>
                    </div>
                    <div className='' onClick={() => setDropdown(!dropdown)}>
                        <button className='px-3  w-full  py-3 rounded-xl text-darktext flex items-center focus:border border-sky-500' > 
                        adult: 0 Children: 0 rooms: 0 <AiOutlineDown />
                        </button>
                    </div>
                    {/* absolute div */}
                    {dropdown && (
                        <div className="absolute bg-soft border-2  md:top-[7em] rounded-2xl w-[15em] z-10 shadow-sm">
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
                                        <span>Children</span>
                                        <span>
                                            <input type='number' min={0} max={10} className='text-center border placeholder:text-text py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' />
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="flex items-center gap-[12px] text-sm px-6 py-[12px] transition-all text-darktext justify-between"
                                    >
                                        <span>Rooms</span>
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
            <div className='md:col-span-1 flex justify-center items-center'>
                <div className=''>
                    <button className='h-14 w-14 bg-blue rounded-xl text-light text-3xl flex justify-center items-center'>
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HotelCard