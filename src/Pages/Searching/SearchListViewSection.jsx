import React from 'react'
import NearbyDestinations from '../../data/NearbyDestinations'
import { AiFillStar, AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'

function SearchListViewSection() {
    return (
        <div>
            <div className='md:grid md:grid-cols-2 gap-5'>
                {NearbyDestinations?.map((image, index) => (
                    <div className='' key={index}>
                        <div className=' snap-start mt-2 bg-light shadow-md p-3 rounded-3xl cursor-pointer mx-2 md:mx-0'>
                            <div className=' relative space-y-3'>
                                <div className='overflow-hidden rounded-2xl '>
                                    <img className='hover:scale-110 object-cover  h-[14em] w-full transition-all duration-500 cursor-pointer' src={image.img} alt={image.name} />
                                </div>
                                <div className='px-3 pt-5 flex justify-between '>
                                    <div className='text-lg font-semibold  text-darktext flex items-center'>
                                        {image.name}
                                    </div>
                                    <div className='flex items-center space-x-1 text-text'>
                                        <span className='text-3xl'><AiOutlineHeart /></span>
                                    </div>
                                </div>
                                <div className='text-xs text-text px-3'>Hiking tour | Stoke on trend</div>
                                <div className='px-3 space-y-2  text-darktext'>
                                    <div className='flex justify-between items-center'>
                                        <span className='space-y-1'>
                                            <div className='text-xs text-text font-light'>from</div>
                                            <div className='text-xl font-medium text-darktext'>AED 990.00</div>
                                            <div className='text-xs text-text font-light'>*price varies</div>
                                        </span>
                                        <span className='space-y-1'>
                                            <div className=' text-yellow-500 flex'> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                                            <div className='text-xs text-text flex justify-end'>4.9 (105)</div>
                                        </span>
                                    </div>
                                </div>
                                <div className='px-3 space-y-2 pb-5  text-darktext'>
                                    <div className='flex space-x-1 items-center'>
                                        <span className='text-lightblue'> <AiOutlineClockCircle /></span>
                                        <span className='text-text text-sm'>7 Days</span>
                                    </div>
                                    <div className='flex space-x-3 items-center'>
                                        <div className='flex space-x-1 items-center'>
                                            <span className='text-lightblue'><TiTick /></span>
                                            <span className='text-text text-sm'>Free Cancellation</span>
                                        </div>
                                        <div className='flex space-x-1 items-center'>
                                            <span className='text-lightblue'><TiTick /></span>
                                            <span className='text-text text-sm'>New On TCtours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchListViewSection