import React from 'react'
import { BsFileRichtext } from 'react-icons/bs'

function VisaDocumentSection() {
  return (
    <div className='my-14 '>
        <div className='text-2xl text-dark mx-4 lg:mx-0'>Documents required for Dubai Visa</div>
        <div className=' text-text mx-4 lg:mx-0'>
            <ul className='space-y-5 py-3 list-disc list-inside'>
                <li>Scanned colour copy of first and last page of your valid Passport</li>
                <li>Scanned colour copy of your passport size photograph with white background</li>
                <li>Confirmed return air ticket (required for Ok to Board processing)</li>
            </ul>
        </div>
        <div className='bg-lightblue lg:rounded-2xl text-soft mt-5 cursor-pointer'>
            <div className='flex px-7 py-10 space-x-7 items-center'>
                <span className='text-5xl'><BsFileRichtext /></span>
                <span className='text-2xl'>
                    <div className=''>View Sample Visa Copy</div>
                    <div className='text-lg font-light'>For the better understanding click here!!</div>
                </span>
            </div>
        </div>
    </div>
  )
}

export default VisaDocumentSection