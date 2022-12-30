import React from 'react'

function AttractionCardSection() {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto'>
      <div className='bg-lightblue py-10 lg:rounded-lg'>
        <div className='space-y-4 text-darktext p-5 lg:flex justify-between px-16'>
          <div>
            <div className='lg:text-5xl heading text-2xl text-light'>Explore top attractions.</div>
            <div className='text-semisoft'>Experience the best of your destination with attractions, tours, activities, and more </div>
          </div>
          <div className=''>
            <button className='px-7 py-2 bg-light text-darktext'>Explore!!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttractionCardSection