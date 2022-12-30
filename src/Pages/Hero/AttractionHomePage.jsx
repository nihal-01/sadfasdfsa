import React from 'react'
import ActivityAndTourSection from '../General/ActivityAndToursSection'
import AttractionsAndLandmarkSection from '../General/AttractionsAndLandmarkSection'
import BlogSection from '../General/BlogSection'
import HeroSection from '../General/HeroSection'
import NearbySection from '../General/NearbySection'
import TopSellingSection from '../General/TopSellingSection'
import SpecialofferCardSection from '../General/SpecialofferCardSection'
import SubscribeSection from '../General/SubscribeSection'


function AttractionHomePage() {
  return (
    <div className='bg-soft md:space-y-20'>
      <HeroSection />
      <SpecialofferCardSection />
      {/* <ActivityAndTourSection /> */}
      <AttractionsAndLandmarkSection />
      <TopSellingSection />
      <BlogSection />
      <NearbySection />
      <SubscribeSection />
    </div>
  )
}

export default AttractionHomePage