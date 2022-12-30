import React from 'react'
import Navigator from '../../components/Layouts/Navigator'
import SpecialOfferFunctionaitySection from '../SpecialOfferLanding/SpecialOfferFunctionaitySection'
import SpecialOfferListViewSection from '../SpecialOfferLanding/SpecialOfferListViewSection'

function SpecialOfferLandingPage() {
  return (
    <div className='relative'>
    <div className='lg:max-w-screen-xl lg:mx-auto '>
      <Navigator />
      <div className=' mx-5 my-7 lg:mx-0 space-y-3'>
        <h1 className='font-semibold text-3xl lg:text-5xl text-dark'>Special offers</h1>
        {/* <h4 className='font-medium text-sm text-text'>40 combos available</h4> */}
      </div>
      <div className='lg:grid lg:grid-cols-12 lg:gap-5 mt-3'>
        <span className='lg:col-span-9'>
          <SpecialOfferListViewSection />
        </span>
        <span className='lg:col-span-3'>
          <SpecialOfferFunctionaitySection />
        </span>
      </div>
      
    </div>
  </div>
  )
}

export default SpecialOfferLandingPage