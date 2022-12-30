import React, { useEffect } from 'react'
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { NearbyDestinations } from '../../data'
import { useDispatch, useSelector } from 'react-redux'

function ActivityAndTourSection() {
  const dispatch = useDispatch()

  // const { sections, sectionData } = useSelector(state => state.general)
  // useEffect(() => {
  //   dispatch(getSections())
  //   dispatch(getSectionData())
  // }, [dispatch])

  // console.log(sectionData);
  return (

    <div className='mx-5 my-10 lg:mx-auto lg:max-w-screen-xl'>
      {/* {sections?.map((sec) => ( */}
      <div >
        <div className='flex justify-between' >
          <div className='text-3xl font-semibold text-darktext mb-4 cursor-default'>titlr</div>
          <div className='hidden  lg:flex space-x-5'>
            <button className='hover:bg-main rounded-full w-12 h-12 flex justify-center items-center hover:text-light text-xl bg-light text-main duration-500' onClick={() => {
              document.querySelector('.containerAT').scrollLeft -= 200
            }}><AiOutlineLeft /></button>
            <button className='hover:bg-main rounded-full w-12 h-12 flex justify-center items-center hover:text-light text-xl bg-light text-main duration-500' onClick={() => {
              document.querySelector('.containerAT').scrollLeft += 200
            }}><AiOutlineRight /> </button>
          </div>
        </div>
        <div className='containerAT scroll-smooth flex overflow-x-auto snap-x overflow-y-hidden  gap-5'>
          {NearbyDestinations?.map((image, index) => (
            <div className=' snap-start mt-2 bg-light p-3 rounded-3xl cursor-pointer' key={index}>
              <div className=' relative w-[17.5em]'>
                <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                  <img className='hover:scale-110 object-cover  h-[14em] w-full transition-all duration-500 cursor-pointer' src={image.img} alt={image.name} />
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
                  <div className='font-semibold'>{image.name} </div>
                  <div className='flex justify-between '>
                    <span className='text-sm'>{image.number}tickets more</span>
                    <span className='text-base font-medium text-blue '>AED 1165.5</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ))} */}
    </div>
  )
}

export default ActivityAndTourSection