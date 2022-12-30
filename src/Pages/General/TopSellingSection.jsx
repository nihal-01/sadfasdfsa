import React from 'react'
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { NearbyDestinations } from '../../data'
import { useSelector } from 'react-redux'

function TopSellingSection() {
  const { topAttractions } = useSelector(state => state.general)
  return (
    <div className='mx-5 my-10 lg:mx-auto lg:max-w-screen-xl'>
      <div className='flex justify-between'>
        <div className='text-3xl font-semibold text-darktext cursor-default '>Top Attractions</div>
        <div className='hidden lg:flex space-x-5'>
          <button className='hover:bg-main rounded-full w-12 h-12 flex justify-center items-center hover:text-light text-xl bg-light text-main duration-500' onClick={() => {
            document.querySelector('.containertop').scrollLeft -= 200
          }}><AiOutlineLeft /></button>
          <button className='hover:bg-main rounded-full w-12 h-12 flex justify-center items-center hover:text-light text-xl bg-light text-main duration-500' onClick={() => {
            document.querySelector('.containertop').scrollLeft += 200
          }}><AiOutlineRight /> </button>
        </div>
      </div>
      <div className='containertop scroll-smooth flex overflow-x-auto snap-x overflow-y-hidden  gap-5'>
        {topAttractions?.map((item) => (
          <Link to='/attraction' key={item._id}>
            <div className=' snap-start mt-2 bg-light p-3 rounded-3xl cursor-pointer' >
              <div className=' relative w-[17.5em]'>
                <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                  <img className='hover:scale-110 object-cover  h-[14em] w-full transition-all duration-500 cursor-pointer' src={"http://127.0.0.1:5000" + item.images[0]} alt={item.title} />
                </div>
                <div className='px-3 pt-5 flex justify-between '>
                  <div className='text-light bg-lightblue text-xs px-2 rounded-lg flex items-center'>
                    Dubai
                  </div>
                  <div className='flex items-center space-x-1 text-yellow-500'>
                    <span className='text-sm'>4.7</span>
                    <span className=''><AiFillStar /></span>
                  </div>
                </div>
                <div className='px-3 space-y-2 pb-5 pt-3 text-darktext'>
                  <div className='font-semibold'>{item.title} </div>
                  <div className='flex justify-between '>
                    <span className='text-sm'>{item.category.categoryName}</span>
                    <span className='text-base font-medium text-blue '>AED {item.activity?.adultPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TopSellingSection