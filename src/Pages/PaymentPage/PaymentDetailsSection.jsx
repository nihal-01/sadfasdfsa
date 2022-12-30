import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

function PaymentDetailsSection() {

    const [ travellerData, setTravellerData ] = useState({
        gender: "",
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        phone: "",
        special_request_text: ""
    }) 
    const [viewRedeem, setViewRedeem] = useState(false)
    const { wrapperProps, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    const onChange = (e) => {
        setTravellerData({...travellerData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='bg-light  w-full p-5 rounded-2xl space-y-5'>
                <div className=' cursor-default'>
                    <h2 className='text-2xl font-semibold text-darktext'>Lead Passenger Details</h2>
                </div>
                <div className='lg:flex gap-5 text-darktext space-y-3 lg:space-y-0'>
                    <div className=''>
                        <div className=''>
                            <label className=''>Mr/Mrs</label>
                        </div>
                        <div className=''>
                            <select 
                            type='text'
                            name='gender'
                            value={travellerData.gender}
                            onChange={onChange}
                             className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light' >
                                <option value={"male"}>Mr.</option>
                                <option value={"female"}>Mrs.</option>
                                <option value={"other"}>Ms.</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:w-5/12'>
                        <div className=''>
                            <label className=''>First Name</label>
                        </div>
                        <div className=''>
                            <input 
                            type='text' 
                            className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                            name='firstname'
                            value={travellerData.firstname}
                            onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className='lg:w-5/12'>
                        <div className=''>
                            <label className=''>Last Name</label>
                        </div>
                        <div className=''>
                            <input 
                            type='text' 
                            className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                            name='lastname'
                            value={travellerData.lastname}
                            onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:flex gap-5 text-darktext space-y-3 lg:space-y-0'>
                    <div className='lg:w-4/12'>
                        <div className=''>
                            <label className=''>Email</label>
                        </div>
                        <div className=''>
                            <input 
                            type='text' 
                            className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                            name='lastname'
                            value={travellerData.lastname}
                            onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className='lg:w-4/12'>
                        <div className=''>
                            <label className=''>Country</label>
                        </div>
                        <div className=''>
                            <select type='text' className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light' >
                                <option>Choose Country</option>
                                <option>India</option>
                                <option>United Arab Emirate</option>
                                <option>SriLanka</option>
                                <option>Argentina</option>
                                <option>Russia</option>
                                <option>Caneda</option>
                                <option>United State of America</option>
                                <option>United Kingdom</option>
                                <option>Italy</option>
                                <option>Portugal</option>
                                <option>Moroko</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:w-4/12'>
                        <div className=''>
                            <label className=''>Phone</label>
                        </div>
                        <div className=''>
                            <input type='text' className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light' />
                        </div>
                    </div>
                </div>
                <div className='text-darktext'>
                    <div className=''>
                        <label className=''>Special Request</label>
                    </div>
                    <div className=''>
                        <textarea type='text' className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light' />
                    </div>
                </div>
            </div>
            <div className='bg-light  w-full px-5 py-10 rounded-2xl lg:my-5'>
                <div className='lg:flex items-center lg:space-x-2'>
                    <span className=''>
                        <button className='border border-lightblue px-3 py-2 text-lightblue space-x-2 flex items-center' onClick={() => setViewRedeem(!viewRedeem)}>
                            <span className='whitespace-nowrap'>Use Promo Code</span>
                            <span className=''><AiOutlineDown /> </span>
                        </button>
                    </span>
                    <span className=' cursor-default'>
                        <p className='text-lightblue text-sm lg:text-base'>All Coupon code discounts are Applicable on MRP(Retail Price) of Tours</p>
                    </span>
                </div>
                {viewRedeem && (
                    <div className='bg-soft p-7 rounded-b-xl rounded-r-xl'>
                        <div className=' flex space-x-4'>
                            <input className='border  py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light ' />
                            <button className='px-3 py-2 bg-lightblue text-light rounded-lg'>Redeem</button>
                        </div>
                    </div>
                )}
            </div>
            <div className='bg-light rounded-2xl w-full p-5 space-y-5'>
                <div className='border-b pb-3 my-2'>
                    <h2 className='text-xl font-medium'>Choose Payment Method</h2>
                </div>


                <div className=''>
                    <button className='px-5 py-2 text-light bg-lightblue rounded-md '>Debit/Credit</button>
                </div>
                <div className=''>
                    <div className='mb-3'>
                        <label htmlFor="in">Cardholder Name </label>
                    </div>
                    <div className=''>
                        <input id='in' type="text" className='md:w-5/12 w-11/12 border border-text  py-2 rounded-md px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light ' />
                    </div>
                </div>
                <div className=''>
                    Card Details
                </div>
                <div className='w-full'>
                    <PaymentInputsWrapper {...wrapperProps}>
                        <svg {...getCardImageProps({ images })} />
                        <input {...getCardNumberProps()} />
                        <input {...getExpiryDateProps()} />
                        <input {...getCVCProps()} />
                        {/* {meta.isTouched && meta.error && <span>Error: {meta.error}</span>} */}
                    </PaymentInputsWrapper>
                </div>


            </div>
            <div className='bg-light my-5 p-7 rounded-2xl lg:flex '>
                <div className='{" "}'>
                    <span className='cursor-default '>By Clicking Pay Now You agree that you have read and understood our {" "}</span>
                    <span className='text-lightblue underline cursor-pointer'>Terms & Conditions</span>
                </div>
                <div className='text-center fixed lg:static bottom-0 left-0 right-0 rounded-t-3xl lg:rounded-none py-8 bg-light lg:bg-none px-10 lg:px-0 z-10'>
                    <button className='text-light bg-lightblue px-3 py-2 rounded-lg text whitespace-nowrap w-full'>Pay Now</button>
                </div>
            </div>
        </>
    )
}

export default PaymentDetailsSection