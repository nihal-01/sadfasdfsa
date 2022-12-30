import React, { useState, useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { MdAttractions } from 'react-icons/md'
import { GiCommercialAirplane } from 'react-icons/gi'
import { IoIosCar } from 'react-icons/io'
import { FaHotel, FaWpforms } from 'react-icons/fa'
import banner1 from "../../static/images/banner1.jpg"
import banner2 from "../../static/images/banner2.jpg"
import banner3 from "../../static/images/banner3.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AttractionCard, FlightCard, HotelCard, CarCard, VisaCard } from '../../components/Attractions'
import { IoLocationOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

function HeroSection() {

    const dispatch = useDispatch()
    const [viewAttraction, setViewAttraction] = useState(true)
    const [viewFlight, setViewFlight] = useState(false)
    const [viewHotel, setViewHotel] = useState(false)
    const [viewVisa, setViewVisa] = useState(false)
    const [viewCar, setViewCar] = useState(false)

    // const [ view, setView ] = useState({
    //     attraction: true,
    //     flight: false,
    //     hotel: false,
    //     visa: false,
    //     car: false
    // })

    const { home } = useSelector(state => state.general)

    const [currentSlide, setCurrentSlide] = useState(0)

    const updateCurrentSlide = (index) => {
        if (currentSlide !== index) {
            setCurrentSlide(index)
        }
    }

    const data= [
        {
            id: 1,
            img: banner1
        },
        {
            id: 2,
            img: banner2
        },
        {
            id: 3,
            img: banner3
        },
    ]

    return (
        <div>
            <div className='lg:max-w-screen-xl lg:mx-auto lg:pt-14'>
                <main className='md:mb-28'>
                    <div className=' relative'>

                        <div className='overflow-hidden lg:rounded-[4em] lg:h-[42em]  relative bg-cover '>
                            <div className='absolute top-0 text-center w-full z-10'>
                                <div className='text-3xl lg:text-6xl font-bold text-light heading pt-20'>{home?.heroTitle}</div>
                                <div className='text-light md:text-lg '>{home?.heroDescription}</div>
                                {/* <div className='hidden md:block text-light bg-trans text-2xl mt-24 py-10'>Explore Your Destination </div> */}
                                <div className='flex items-end h-[30em] '>
                                    <div className='hidden md:flex justify-between w-full items-center mx-10 max-w-8xl'>
                                        <span className='text-3xl font-bold text-darktext bg-trans hover:bg-soft h-16 w-16 rounded-full flex justify-center items-center' onClick={() => setCurrentSlide(currentSlide - 1)}><AiOutlineLeft /> </span>
                                        <span className='text-3xl text-light font-lg space-x-1 flex '><IoLocationOutline /> Dubai</span>
                                        <span className='text-3xl font-bold text-darktext bg-trans hover:bg-soft h-16 w-16 rounded-full flex justify-center items-center' onClick={() => setCurrentSlide(currentSlide + 1)}><AiOutlineRight /></span>
                                    </div>
                                </div>
                            </div>
                            <Carousel
                                infiniteLoop
                                autoPlay
                                showThumbs={false}
                                interval={9000}
                                showArrows={false}
                                stopOnHover
                                swipeable={false}
                                selectedItem={currentSlide}
                                showIndicators={false}
                                showStatus={false}
                                onChange={updateCurrentSlide}
                            >
                                {home?.heroImages?.map((item,index) => (
                                <div className='bg-inherit h-full' key={index}>
                                     <img src={'http://127.0.0.1:5000'+item} alt='banner' className='bg-cover h-full' />
                                </div>
                                ))} 

                            </Carousel>
                            

                        </div>
                        <div className=' md:absolute z-10 bottom-36 w-full md:flex justify-center '>
                            <div className='md:w-9/12 relative'>
                                <div className='md:ml-14  md:w-8/12 bg-light rounded-t-2xl md:rounded-t-[1em] overflow-x-auto'>
                                    <div className=' flex md:grid md:grid-cols-5 space-x-1 px-1 md:px-10 py-3 md:py-1 items-center '>
                                        <button className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1 ${viewAttraction ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={ () => {
                                             setViewFlight(false)
                                             setViewHotel(false)
                                             setViewVisa(false)
                                             setViewCar(false)
                                             setViewAttraction(true)
                                        }}>
                                            <span className=''><MdAttractions /> </span>
                                            <span className=''>Attraction</span>
                                        </button>
                                        <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1  ${viewFlight ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={ () => {
                                             setViewAttraction(false)
                                             setViewHotel(false)
                                             setViewVisa(false)
                                             setViewCar(false)
                                             setViewFlight(true)
                                        }}>
                                            <span className=''><GiCommercialAirplane /> </span>
                                            <span className=''>Flight</span>
                                        </button>
                                        <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1  ${viewHotel ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={ () => {
                                             setViewAttraction(false)
                                             setViewVisa(false)
                                             setViewCar(false)
                                             setViewFlight(false)
                                             setViewHotel(true)
                                        }}>
                                            <span className=''><FaHotel /> </span>
                                            <span className=''>Hotel</span>
                                        </button>
                                        <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1  ${viewVisa ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={ () => {
                                             setViewAttraction(false)
                                             setViewHotel(false)
                                             setViewCar(false)
                                             setViewFlight(false)
                                             setViewVisa(true)
                                        }}>
                                            <span className=''><FaWpforms /> </span>
                                            <span className=''>Visa</span>
                                        </button>
                                        <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blue duration-300 space-x-1  ${viewCar ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={ () => {
                                             setViewAttraction(false)
                                             setViewHotel(false)
                                             setViewVisa(false)
                                             setViewFlight(false)
                                             setViewCar(true)
                                        }}>
                                            <span className=''><IoIosCar /> </span>
                                            <span className=''>Transport</span>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='bg-light w-full  md:rounded-[2em] relative'>
                                        <>
                                            {viewAttraction && (
                                                <AttractionCard />
                                            )}

                                            {viewFlight && (
                                                <FlightCard />
                                            )}
                                            {viewHotel && (
                                                <HotelCard />
                                            )}
                                            {viewVisa && (
                                                <VisaCard />
                                            )}
                                            {viewCar && (
                                                <CarCard />
                                            )}
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default HeroSection