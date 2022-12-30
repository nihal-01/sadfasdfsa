import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { TfiHeadphoneAlt } from 'react-icons/tfi'

function SpecialOfferFunctionaitySection() {
  return (
    <div className='block bg-soft rounded-xl py-5 mb-10'>
    <div className='p-3 text-text space-y-3'>
        <div className='text-2xl text-darktext'>
            Need Help?
        </div>
        <div className='flex items-center space-x-3 ml-3'>
            <div className='text-2xl text-blue'><TfiHeadphoneAlt /> </div>
            <div className='space-y-2'>
                <div className='text-main'>Call us on</div>
                <div className=''>+910000000000</div>
                <div className=''>+910000000000</div>
            </div>
        </div>
        <div className='flex items-center space-x-3 ml-3'>
            <div className='text-2xl text-green-600'><BsWhatsapp /> </div>
            <div className='space-y-2'>
                <div className='text-main'>Whatsapp us on</div>
                <div className=''>+910000000000</div>
            </div>
        </div>
        <div className='flex items-center space-x-3 ml-3'>
            <div className='text-2xl text-blue'><AiOutlineMail /> </div>
            <div className='space-y-2'>
                <div className='text-main'>Email us on</div>
                <div className=''>test123@email.com</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SpecialOfferFunctionaitySection