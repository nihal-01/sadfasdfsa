import React from 'react'

function PolicySection() {
    return (
        <div>
            <div className='bg-light rounded-2xl p-5 5'>
                <div className='lg:max-w-6xl lg:mx-auto px-5'>
                    <div className='space-y-3'>
                        <div className='text-2xl font-medium'>Burj Khalifa policies</div>
                        <div className='text-text space-y-2'>
                            <div className='font-semibold'>Confirmation Policy</div>
                            <div className=' leading-relaxed'>The customer receives a confirmation voucher via email within 2 business hours of successful booking.

                                In case the preferred slots are unavailable, an alternate schedule of the customer’s preference will be arranged and a new confirmation voucher will be sent via email.

                                Alternatively, the customer may choose to cancel their booking before confirmation and a full refund will be processed.</div>
                        </div>
                        <div className='text-text space-y-2'>
                            <div className='font-semibold'>Refund Policy</div>
                            <div className='leading-relaxed'> No refund applicable.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PolicySection