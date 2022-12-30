import React, { useState,useEffect } from 'react'
import Navigator from '../../components/Layouts/Navigator'
import FunctionalitySection from '../AttractionLanding/FunctionalitySection'
import ListResultView from '../AttractionLanding/ListResultView'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function AttractionLandingPage() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [ viewFliters,setViewFilters ] = useState(false)


  return (
    <div className='relative'>
      <div className='lg:max-w-screen-xl lg:mx-auto '>
        <Navigator />
        <div className=' mx-5 my-7 lg:mx-0 space-y-3'>
          <h1 className='font-semibold text-3xl lg:text-5xl text-dark'>Dubai Attractions</h1>
          <h4 className='font-medium text-sm text-text'>855 things to do</h4>
        </div>
        <div className='lg:hidden'>
          <span className='flex justify-center'>
            <button className=' py-2 bg-lightblue hover:border hover:bg-light border-lightblue hover:text-blue text-light rounded-lg w-10/12' onClick={() => setViewFilters(!viewFliters)}>Filters</button>
          </span>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-5 mt-3'>
          <span className='lg:col-span-3'>
          <div className={`lightglass ${viewFliters ? "fixed" : "hidden"} top-0 bottom-0 right-0 left-0 z-10`} onClick={() => setViewFilters(!viewFliters)}></div>
            <div className={`bg-light  p-5 lg:p-0 rounded-t-3xl overflow-y-auto lg:rounded-none lg:bg-light lg:h-auto lg:w-auto h-[85vh] w-full fixed lg:static ${viewFliters ? "bottom-0" : "-bottom-full"} z-10 transition-all duration-500`}>
            <FunctionalitySection 
            viewFliters={viewFliters}
            setViewFilters={setViewFilters}
            />
            </div>
          </span>
          <span className='lg:col-span-9'>
            <ListResultView id={id} />
          </span>
        </div>
        
      </div>
    </div>
  )
}

export default AttractionLandingPage