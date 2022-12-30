import React, { useEffect, useState } from 'react'
import { AiFillCar } from 'react-icons/ai'
import { BsCalendar2Day } from 'react-icons/bs'
import { FaChild } from 'react-icons/fa'
import { IoIosMan } from 'react-icons/io'
import { useSelector } from 'react-redux'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'

function DetailsCard() {
    const navigate = useNavigate()

    const { excursion } = useSelector(state => state.excursion)

    const [price, setPrice] = useState(0)
    const [data, setData] = useState({
        adult: 1,
        child: 0,
    })
    const [activity, setActivity] = useState({
        date: "",
        transfer: "",
    })

    const [offerAmount, setOfferAmount] = useState(0)

    const onChange = (e) => {
        return setData({ ...data, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        if (excursion?.activities) {
            const { childPrice } = excursion?.activities[0]
            let sum = (Number(offerAmount) * Number(data.adult)) + (Number(childPrice) * Number(data.child))
            setPrice(sum)
        }

    }, [data.adult, data.child, excursion])

    useEffect(() => {
        if (excursion?.activities) {
            if (excursion?.isOffer) {
                if (excursion?.offerAmountType === "flat") {
                    let offer = excursion?.activities[0]?.adultPrice - excursion?.offerAmount
                    setOfferAmount(offer)
                } else {
                    let offer = excursion?.activities[0]?.adultPrice - ((excursion?.activities[0]?.adultPrice * excursion?.offerAmount) / 100)
                    setOfferAmount(offer)
                }
            } else {
                setOfferAmount(excursion?.activities[0]?.adultPrice)
            }
        }
    }, [excursion])

    const submitHandler = async (e) => {
        e.preventDefault()

        const payload = {
            attraction: excursion._id,
            selectedActivities: [
                {
                    adultsCount: data.adult,
                    childrenCount: data.child,
                    infantCount: 0,
                    transferType: activity.transfer,
                    activity: excursion?.activities && (excursion?.activities[0]?._id),
                    date: activity.date,
                }
            ]
        }
        try {
            const response = await axios.post('attractions/orders/initiate', payload)
            navigate(`/payment/${response.data._id}`)

        } catch (err) {
            console.log(err);
        }
    }
    const takeData = (e) => {
        return setActivity({ ...activity, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='bg-light  lg:rounded-xl p-5 space-y-2 sticky top-0'>
                <div className=''>
                    <div className=''>
                        {excursion?.isOffer && (
                            <p className='text-main text-xs'><s>AED {excursion?.activities && (excursion?.activities[0]?.adultPrice)}</s></p>
                        )}
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='flex items-center space-x-2'>
                            <h2 className='text-darktext font-bold text-3xl'>AED {offerAmount}</h2>
                            <p className='text-xs text-darktext font-extralight'>per person</p>
                        </span>
                        {excursion?.isOffer && (
                            <span className='bg-soft px-3 py-2 rounded-full text-blue'>{excursion?.offerAmount} {excursion?.offerAmountType === "flat" ? "AED" : "%"} OFF</span>
                        )}
                    </div>
                    {/* <div className=''>
                        <p className='text-text text-xs'>*price based on selection below</p>
                    </div> */}
                    <form onSubmit={submitHandler}>
                        <div className='inputs space-y-5 my-4'>

                            <div className='space-y-1'>
                                <div className='flex items-center space-x-2 text-darktext'>
                                    <span className='text-lg text-lightblue'><BsCalendar2Day /> </span>
                                    <span className='text-lg'>Dates</span>
                                </div>
                                <div className=''>
                                    <input
                                        type='date'
                                        min={Date.now}
                                        placeholder='Select Date'
                                        className='px-3 w-full border placeholder:text-darktext py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext'
                                        name='date'
                                        onChange={takeData}
                                    />
                                </div>
                            </div>

                            <div className='space-y-1'>
                                <div className='flex items-center space-x-2 text-darktext'>
                                    <span className='text-lg '>Tours</span>
                                </div>

                                <div>
                                    <div className=''>
                                        <input type='checkbox' name='check' className='peer px-3 ' />
                                        <label className='text-darktext ml-1'>{excursion?.activities && (excursion?.activities[0]?.name)}</label>
                                        <div className='py-2 space-y-2 overflow-hidden peer-checked:block hidden cursor-pointer'>

                                            {/* <div className='space-y-1'>
                                            <div className='flex items-center space-x-2 text-darktext'>
                                                <span className='text-lg text-lightblue'><GiClockwork /> </span>
                                                <span className='text-lg'>Choose Time Slot</span>
                                            </div>
                                            <div className='mx-1'>
                                                <select className='px-3 w-full border  py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext' >
                                                    <option>Choose the slot</option>
                                                    <option>11:30,  127AED</option>
                                                    <option>12:30,  220AED</option>
                                                </select>
                                            </div>
                                        </div> */}
                                            <div className='space-y-1'>
                                                <div className='flex items-center space-x-2 text-darktext'>
                                                    <span className='text-lg text-lightblue'><AiFillCar /> </span>
                                                    <span className='text-lg'>Travel</span>
                                                </div>
                                                <div className='mx-1'>
                                                    <select
                                                        className='px-3 w-full border  py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext'
                                                        name='transfer'
                                                        value={activity.transfer}
                                                        onChange={takeData}
                                                    >
                                                        <option value="without">Without Transfer</option>
                                                        <option value="private">Private</option>
                                                        <option value="shared">Shared</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div className=' flex space-x-2'>
                                <div className='space-y-1'>
                                    <div className='flex items-center space-x-2 text-darktext'>
                                        <span className='text-lg text-lightblue'><IoIosMan /> </span>
                                        <span className='text-lg'>Adult</span>
                                    </div>
                                    <div className=''>
                                        <input
                                            type='number'
                                            min={1}
                                            placeholder='Adult number'
                                            className='px-3 w-full border placeholder:text-sm placeholder:text-darktext py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext'
                                            name='adult'
                                            value={data.adult}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <div className='flex items-center space-x-2 text-darktext'>
                                        <span className='text-lg text-lightblue'><FaChild /> </span>
                                        <span className='text-lg'>Children</span>
                                    </div>
                                    <div className=''>
                                        <input
                                            type='number'
                                            min={0}
                                            placeholder='Children number'
                                            className='px-3 w-full border placeholder:text-sm placeholder:text-darktext py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext'
                                            name='child'
                                            value={data.child}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='px-5'>
                                <div className='flex justify-between text-darktext'>
                                    <span className=''>adults</span>
                                    <span className=''>{excursion?.activities && (Number(excursion?.activities[0]?.adultPrice) * data.adult)}  AED</span>
                                </div>
                                <div className='flex justify-between text-darktext'>
                                    <span className=''>child</span>
                                    <span className=''>{excursion?.activities && (Number(excursion?.activities[0]?.childPrice) * data.child)} AED</span>
                                </div>
                                {/* <div className='flex justify-between text-darktext'>
                                <span className=''>Travel</span>
                                <span className=''> AED</span>
                            </div> */}
                                <div className='flex justify-between text-darktext'>
                                    <span className='font-semibold text-lg'>Grand Total</span>
                                    <span className='font-bold text-xl'>{price}.00 AED</span>
                                </div>
                            </div>


                            <div className=''>
                                {/* <Link to='/payment'> */}
                                <button type='submit' className='bg-lightblue text-light w-full py-3 rounded-lg'>Book Now</button>
                                {/* </Link> */}
                            </div>

                        </div>
                    </form>

                    <div className='hidden lg:block py-7 space-y-3'>
                        <div className=''>
                            <p className='text-text'>if you have questions about this tour, please feel free to ask</p>
                        </div>
                        <div className=''>
                            <button className='w-full py-3 border border-text text-text rounded-full'>Ask the Tour Expert</button>
                        </div>
                        <div className=''>
                            <p className='text-text text-xs'>*All questions are replied within 24-48 hrs</p>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default DetailsCard