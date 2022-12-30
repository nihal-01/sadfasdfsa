import React from 'react'

function PaymentCardSection() {
    return (
        <>
            <div className=' sticky top-0'>
                <div className='bg-light w-full pb-3 rounded-2xl'>
                    <div className='p-5 border-b'>
                        <h1 className='text-lg font-semibold text-darktext'>Burj Khalifa with combo pack</h1>
                    </div>
                    <div className='text-darktext p-5 space-y-3 '>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Option :</span>
                            <span className=''>124th Floor Ticket </span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Transfer :</span>
                            <span className=''>Private</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Date :</span>
                            <span className=''>24/12/2022</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Time :</span>
                            <span className=''>08:30 GST</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Pax :</span>
                            <span className=''>1Adult,</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Last Date to Cancel :</span>
                            <span className=''>23/12/2022 13:02:00</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Amount :</span>
                            <span className=''>120.00 AED</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>VAT Amount :</span>
                            <span className=''>52.04 AED</span>
                        </div>
                        <div className='flex items-center justify-between font-medium text-lightblue text-lg'>
                            <span className=''>Total :</span>
                            <span className=''>172.00 AED</span>
                        </div>
                    </div>
                </div>
                <div className='bg-light rounded-2xl mt-5'>
                    <div className='p-5 border-b'>
                        <h1 className='text-lg font-semibold text-darktext'>Final Payment</h1>
                    </div>
                    <div className='text-darktext p-5 space-y-3'>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>VAT Amount :</span>
                            <span className=''>52.04 AED</span>
                        </div>
                        <div className='flex items-center justify-between font-medium'>
                            <span className=''>Total :</span>
                            <span className=''>172.00 AED</span>
                        </div>
                        <div className='flex items-center justify-between font-bold text-xl'>
                            <span className=''>Final Payment :</span>
                            <span className=''>172.00 AED</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentCardSection