import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function SearchRecentlyViewedSection() {
  return (
    <div className='py-10 '>
      <div className='space-y-2 mx-3 lg:mx-0'>    
        <div className='flex justify-between'>
      <div className='text-3xl font-semibold text-darktext mb-4 cursor-default'>Recently Viewed</div>
      <div className='hidden  lg:flex space-x-5'>
        <button className='hover:bg-main rounded-full w-12 h-12 flex justify-center items-center hover:text-light text-xl bg-soft text-main duration-500'onClick={() => {
          document.querySelector('.containerRV').scrollLeft -= 220
        }}><AiOutlineLeft/></button>
        <button className='hover:bg-main rounded-full w-12 h-12 flex justify-center items-center hover:text-light text-xl bg-soft text-main durRVion-500'onClick={() => {
          document.querySelector('.containerRV').scrollLeft += 220
        }}><AiOutlineRight/> </button>
      </div>
      </div>
        <p className='text-text md:text-lg '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
      </div>
      <div className='py-7'>
        <div className='containerRV scroll-smooth snap-x flex gap-5 overflow-x-auto'>
          {[1,2,3,4,5,6,7,8].map((item) => (
          <div className=' snap-start'>
            <div className='w-[25.5em] space-y-4 snap-start'>
              <div className=''>
                <img src='https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='demo'
                  className='object-cover  h-[15em] lg:[14em] w-full rounded-2xl' />
              </div>
              <div className='text-center space-y-3'>
                <h3 className='text-2xl text-darktext'>Train Your Skyline</h3>
                <p className='text-text text-center'>
                  There are many variations of passages of Lorem Ipsum available,
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchRecentlyViewedSection