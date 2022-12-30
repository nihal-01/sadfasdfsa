import React, { useState } from 'react'
import TermsConditionSection from './TermsConditionSection'
import VisaApplyCard from './VisaApplyCard'
import VisaComponentPage from './VisaComponentPage'
import VisaDocumentSection from './VisaDocumentSection'
import VisaFAQsSection from './VisaFAQsSection'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi'
import { GiEncirclement } from 'react-icons/gi'
import { VscTasklist } from 'react-icons/vsc'
import { FaQuoteRight, FaWpforms } from 'react-icons/fa'

function VisaHomeScreen() {

  const [ viewCard,setViewCard ] = useState(false)
  return (
    <>
      <div className={`fixed  w-full bg-light rounded-t-2xl transition-all duration-500 ${viewCard ? '-bottom-full' : 'bottom-0'}  z-20 px-10 py-8 lg:hidden`}>
        <button className='bg-blue text-light w-full rounded-lg py-2' onClick={() => setViewCard(!viewCard)}>Apply Online</button>
      </div>
      <div className='visabanner object-cover bg-center h-[40vh]'>
      <div className='md:max-w-screen-xl md:mx-auto flex py-7 '>
        <div className=' w-full text-darktext lg:text-light space-y-7 px-4 lg:px-0'>
          <div className='text-5xl font-bold'>Dubai Visa</div>
          <div className='flex justify-around items-center gap-7'>
            <span className='space-y-2'>
              <div className='text-sm text-text'>Processing Time</div>
              <div className='text-xl'>Up to 48 hours</div>
            </span>
            <span className='space-y-2'>
              <div className='text-sm text-text'>Starting from</div>
              <div className='text-xl'>AED 310.00</div>
            </span>
          </div>
        </div>
      </div>
      </div>
      <div className=''>
        <div className='bg-semisoft sticky top-0 z-10'>
          <div className='md:max-w-screen-xl md:mx-auto text-darktext '>
            <div className=' overflow-x-auto'>
              <div className=' flex md:grid md:grid-cols-5 space-x-1 px-1 md:px-10 py-3 md:py-1 items-center '>
                <button className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-3 border-b-4 border-blue hover:text-lightblue text-lightblue  hover:border-b-4 duration-300 space-x-1 `}>
                  <span className=''><FaWpforms /></span>
                  <span className=''>Visas</span>
                </button>
                <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}>
                  <span className=''><HiOutlineDocumentDuplicate /> </span>
                  <span className=''>Documents</span>
                </button>
                <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}>
                  <span className=''><GiEncirclement/></span>
                  <span className=''>Process</span>
                </button>
                <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}>
                  <span className=''><FaQuoteRight /></span>
                  <span className=''>FAQs</span>
                </button>
                <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1 `}>
                  <span className=''><VscTasklist /></span>
                  <span className=''>Terms & conditions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='md:max-w-screen-xl md:mx-auto'>
          <div className='lg:grid grid-cols-12 gap-10'>
            <div className='col-span-8'>
              <VisaComponentPage />
              <VisaDocumentSection />
              <VisaFAQsSection />
            </div>
            <div className='col-span-4 relative'>
              <div className={`lightglass  top-0 bottom-0 left-0 right-0 z-10 ${viewCard ? "fixed" : "hidden"}`} onClick={() => setViewCard(!viewCard)}></div>
              <div className={`${viewCard ? "fixed bottom-0 w-full z-10 bg-white" : "-bottom-full invisible h-0 overflow-hidden"} transition-all duration-500  rounded-t-3xl lg:rounded-none lg:block   lg:visible lg:h-auto  lg:sticky lg:top-20`}>
                <div className='flex lg:hidden justify-end pt-5 px-7 text-4xl' onClick={() => setViewCard(!viewCard)}><AiOutlineClose /></div>
                <VisaApplyCard />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light'>
          <div className='md:max-w-screen-xl md:mx-auto'>
            <TermsConditionSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default VisaHomeScreen