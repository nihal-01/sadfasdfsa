import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import PaymentCardSection from './PaymentCardSection'
import PaymentDetailsSection from './PaymentDetailsSection'

function PaymentHomePage() {
    return (
        <div className='lg:max-w-screen-xl lg:mx-auto'>
            <div className='lg:flex lg:justify-between text-darktext p-5 bg-light rounded-2xl cursor-default space-y-3'>
                <div className='lg:space-y-5 font-light lg:text-xl'>
                    <div className=''>You've got the best price</div>
                    <div className=''>Best Price Guarantee</div>
                </div>
                <div className='lg:space-y-5 space-y-2 font-medium'>
                    <div className='font-light lg:text-xl'>Currently, you have 1 item(s) in your cart</div>
                    <div className=''>
                        <button className='px-3 py-2 bg-lightblue rounded-lg text-light flex items-center space-x-2 hover:border border-lightblue hover:bg-light hover:text-lightblue'>
                            <span className=''><AiOutlineLeft /> </span>
                            <span className=''>Continue shopping</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='lg:grid grid-cols-12 lg:gap-7 space-y-3 lg:mt-5'>
                <div className='1 col-span-8'>
                    <PaymentDetailsSection />
                </div>
                <div className='2 col-span-4'>
                    <PaymentCardSection />
                </div>
            </div>
        </div>
    )
}

export default PaymentHomePage