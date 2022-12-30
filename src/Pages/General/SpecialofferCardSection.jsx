import React from 'react'
import {  GiHoneycomb } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SpecialofferCardSection() {

    const { home } = useSelector(state => state.general)

    return (
        <div className='lg:max-w-screen-xl lg:mx-auto'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-7'>

                <div className='1 col-span-6'>
                    <Link to={home?.cards[0]?.url}>
                        <div className='  h-[23em] group cursor-pointer'>
                            <div className=' relative '>
                                <div className='overflow-hidden lg:rounded-xl bg-bottom'>
                                    <img className='group-hover:scale-110 object-cover  h-[23em] w-full transition-all duration-500 cursor-pointer' src={'http://127.0.0.1:5000' + home?.cards[0]?.backgroundImage} alt='special offer' />
                                </div>
                                <div className='absolute top-10 px-10'>
                                    <div className=' pt-5'>
                                        <span className='bg-main text-light py-[8px] px-3'>
                                            {home?.cards[0]?.tag}
                                        </span>
                                    </div>
                                    <div className='text-3xl text-darktext font-medium pt-5'>
                                        {home?.cards[0]?.title}
                                    </div>
                                    <div className='text-sm text-darktext pt-3'>
                                        <p className=''>{home?.cards[0]?.description}</p>
                                    </div>
                                    <div className='pt-3 mt-20 scale-0 group-hover:scale-100 group-hover:mt-0 transition-all duration-700'>
                                        <button className='py-2 px-3 border-main border text-main  '>See Deals</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {home?.cards?.slice(1)?.map((item) => (
                    <div className='2 hidden lg:block col-span-3' key={item.title}>
                        <Link to={item.url}>
                            <div className=' h-[23em] group mx-3 cursor-pointer'>
                                <div className='relative'>
                                    <div className='overflow-hidden rounded-xl'>
                                        <img className='group-hover:scale-110 object-cover  h-[23em] w-full transition-all duration-500 cursor-pointer' src={"http://127.0.0.1:5000" + item.backgroundImage} alt='combo' />
                                    </div>
                                    <div className='absolute h-full w-full top-0 bg-cardtransblue rounded-xl'>
                                        <div className=' px-10 py-10'>
                                            <div className=' pt-5'>
                                                <span className='text-5xl text-light'>
                                                    <GiHoneycomb />
                                                </span>
                                            </div>
                                            <div className='text-3xl text-light font-medium  heading pt-5'>
                                                {item.title}
                                            </div>
                                            <div className='text-sm text-light pt-3'>
                                                <p className=''>{item.description}</p>
                                            </div>
                                            <div className='pt-3 mt-20 scale-0 group-hover:scale-100 group-hover:mt-0 transition-all duration-700'>
                                                <button className='py-2 px-3 text-sm border-light border text-light hover:bg-light hover:text-darktext '>See Deals</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                {/* <div className='3 hidden lg:block col-span-3'>
                    <Link to='/attraction'>
                        <div className=' h-[23em] group mx-3 cursor-pointer'>
                            <div className='relative'>
                                <div className='overflow-hidden rounded-xl'>
                                    <img className='group-hover:scale-110 object-cover  h-[23em] w-full transition-all duration-500 cursor-pointer' src={combo} alt='combo' />
                                </div>
                                <div className='absolute h-full w-full top-0 bg-cardtransyellow rounded-xl'>
                                    <div className=' px-10 py-10'>
                                        <div className=' pt-5'>
                                            <span className='text-5xl text-light'>
                                                <GiIsland />
                                            </span>
                                        </div>
                                        <div className='text-3xl text-light font-medium  heading pt-5'>
                                            Attractions
                                        </div>
                                        <div className='text-sm text-light pt-3'>
                                            <p className=''>Find Your Perfect Attractions Get the best<br />
                                                prices and properties</p>
                                        </div>
                                        <div className='pt-3 mt-20 scale-0 group-hover:scale-100 group-hover:mt-0 transition-all duration-700'>
                                            <button className='py-2 px-3 text-sm border-light border text-light hover:bg-light hover:text-darktext '>See Deals</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default SpecialofferCardSection