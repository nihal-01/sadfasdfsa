import React, { useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
// import { GoThumbsup } from 'react-icons/go'
import { SlCalender } from 'react-icons/sl'
import {  AiFillStar, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
// import { FaHotel } from 'react-icons/fa'
import { RxShare2 } from 'react-icons/rx'
// import { BsCalendar2X } from 'react-icons/bs'
import PackageSection from './PackageSection'
import MapSection from './MapSection'
import ReviewSection from './ReviewSection'
// import PolicySection from './PolicySection'
import FaqSection from './FaqSection'
import DetailsCard from './DetailsCard'
// import { IoCalendarNumberSharp } from 'react-icons/io5'
import FeatureSection from './FeatureSection'
// import TourOverview from './TourOverview'
import { useDispatch, useSelector } from 'react-redux'
import { getExcursions } from '../../redux/slices/excursionSlice'

function HeroSection() {
    const dispatch = useDispatch()

    const { excursion } = useSelector(state => state.excursion)

    useEffect(() => {
        dispatch(getExcursions())
    }, [dispatch])
    // const [viewBook, setViewBook] = useState(false)
    const [viewBookCard, setViewBookCard] = useState(false)

    return (
        <div className='bg-soft'>
            <div className='lg:max-w-screen-xl lg:mx-auto'>
                <div className=''>
                    <div className='relative lg:grid lg:grid-cols-12 gap-5 my-7 lg:my-0 lg:py-7'>
                        <div className='1st lg:col-span-8'>

                            <div className='bg-light md:rounded-2xl p-5 py-7  text-darktext'>
                                <div className='flex justify-between'>
                                    <div className='space-y-5'>
                                        <div className='text-3xl font-bold '>
                                            {excursion?.title}
                                        </div>
                                        <div className='flex items-center space-x-3 text-sm'>
                                            <span className=' text-yellow-500 flex space-x-1 '>
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                            </span>
                                            <span className='text-text'>(1935 Reviews)</span>
                                            <span className='flex items-center text-blue'><CiLocationOn /> {excursion?.destination?.name} </span>
                                        </div>

                                        <div className='text-sm flex items-center space-x-1 text-green-600'>
                                            <span className=''><SlCalender /> </span>
                                            <span className='text-xs'>Free cancellation available</span>
                                        </div>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <button className='h-10 w-10 rounded-full bg-soft text-text flex justify-center items-center text-2xl'><RxShare2 /></button>
                                        <button className='h-10 w-10 rounded-full bg-soft text-text flex justify-center items-center text-2xl'><AiOutlineHeart /></button>
                                    </div>
                                </div>

                            </div>

                            <>
                                <FeatureSection />
                            </>


                            <div className='bg-light py-10 px-4 rounded-2xl md:my-4 w-full text-darktext'>
                                <div className='py-3'>
                                    <span className='text-xl font-semibold text-darktext '>{excursion?.title} Highlights</span>
                                </div>
                                <div className='space-y-6 text-text mt-3'>
                                    <div dangerouslySetInnerHTML={{ __html: excursion?.highlights }} className=''>
                                    </div>
                                </div>
                            </div>
                            <div className='md:my-5'>
                                <>
                                    <div className=' bg-lightblue py-5 md:rounded-md sticky top-0  gap-3 z-10'>
                                        <div className='overflow-x-auto'>
                                            <div className='flex space-x-1 items-center px-1 lg:px-5'>
                                                <button className='border border-lightblue rounded-lg hover:bg-lightblue hover:text-light hover:border-light text-blue w-full py-3 text-center focus:ring-light focus:bg-lightblue focus:text-light focus:ring-1 focus:outline-none px-3 lg:px-5  focus:border-none bg-light'>

                                                    <a href='#packageSection'> <span className=' whitespace-nowrap px-3 py-2'>Package Option</span></a>
                                                </button>
                                                <button className='border border-lightblue rounded-lg hover:bg-lightblue hover:text-light hover:border-light text-blue w-full py-3 text-center focus:ring-light focus:bg-lightblue focus:text-light focus:ring-1 focus:outline-none px-3 lg:px-5  focus:border-none bg-light'>

                                                    <span className=' px-3 py-2'>Map</span>
                                                </button>
                                                <button className='border border-lightblue rounded-lg hover:bg-lightblue hover:text-light hover:border-light text-blue w-full py-3 text-center focus:ring-light focus:bg-lightblue focus:text-light focus:ring-1 focus:outline-none px-3 lg:px-5  focus:border-none bg-light'>

                                                <a href='#reviewSection'> <span className=' px-3 py-2'>Reviews</span></a>
                                                </button>
                                                <button className='border border-lightblue rounded-lg hover:bg-lightblue hover:text-light hover:border-light text-blue w-full py-3 text-center focus:ring-light focus:bg-lightblue focus:text-light focus:ring-1 focus:outline-none px-3 lg:px-5  focus:border-none bg-light'>

                                                    <span className=' px-3 py-2'>Policies</span>
                                                </button>
                                                <button className='border border-lightblue rounded-lg hover:bg-lightblue hover:text-light hover:border-light text-blue w-full py-3 text-center focus:ring-light focus:bg-lightblue focus:text-light focus:ring-1 focus:outline-none px-3 lg:px-5  focus:border-none bg-light'>

                                                    <span className=' px-3 py-2'>FAQs</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div id='packageSection' className='p-5 bg-light rounded-2xl '>
                                        <PackageSection />
                                    </div>
                                    <div id='mapSection' className='p-5 my-5 bg-light rounded-2xl'>
                                        <MapSection />
                                    </div>


                                    {excursion?.sections?.map((item) => (
                                        <div className='bg-light py-10 px-4 rounded-2xl md:my-4 w-full text-darktext'>
                                            <div className='py-3'>
                                                <span className='text-xl font-semibold text-darktext '>{item?.title}</span>
                                            </div>
                                            <div className='space-y-6 text-text mt-3'>
                                                <div dangerouslySetInnerHTML={{ __html: item?.body }} className=' space-y-2'>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                    <div id='reviewSection' className=''>
                                        <ReviewSection />
                                    </div>
                                    {/* <div id='policySection' className='py-5'>
                                        <TourOverview />
                                    </div>
                                    <div id='policySection' className='py-5'>
                                        <PolicySection />
                                    </div> */}
                                    <div id='faqSection' className='py-5'>
                                        <FaqSection />
                                    </div>
                                </>
                            </div>
                        </div>

                        <div className='2nd lg:col-span-4'>
                            <div className={`lightglass  top-0 bottom-0  left-0 right-0 z-10 ${viewBookCard ? "fixed" : "hidden"}`} onClick={() => setViewBookCard(!viewBookCard)}></div>
                            <div className={`${viewBookCard ? "fixed bottom-0 max-h-[93vh] overflow-y-auto w-full z-10 bg-white" : "-bottom-full invisible h-0 overflow-hidden"} transition-all duration-500  rounded-t-3xl lg:rounded-none lg:block   lg:visible lg:h-auto  lg:sticky lg:top-0`}>
                                <div className='flex lg:hidden justify-end pt-5 lg:pt-0 px-7 text-4xl' onClick={() => setViewBookCard(!viewBookCard)}><AiOutlineClose /></div>

                                <DetailsCard />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={`fixed  ${viewBookCard ? "-bottom-full" : "bottom-0"} transition-all duration-500 left-0 right-0 lg:hidden px-7 py-7 bg-light rounded-t-xl z-10`}>
                <button className='bg-blue w-full py-3 rounded-md shadow-sm text-light' onClick={() => setViewBookCard(!viewBookCard)}>Book Now</button>
            </div>
        </div>
    )
}

export default HeroSection