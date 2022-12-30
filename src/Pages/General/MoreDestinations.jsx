import React from 'react'
import { NearbyDestinations } from '../../data'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMoreDestinations } from '../../redux/slices/excursionSlice'
import { useEffect } from 'react'

function MoreDestinations() {
  const dispatch = useDispatch()

  const { moreDestinations, loading } = useSelector(state => state.excursion)

  useEffect(() => {
    dispatch(getMoreDestinations())
  }, [dispatch])

  return (
    <div className='mx-5 my-7 lg:mx-auto lg:max-w-screen-xl'>
      <div className=''>
        <div className='text-3xl font-semibold text-dark'>
          Explore more destinations
        </div>
        <p className='text-text my-1'>Find things to do in cities around the world</p>
      </div>
      <div className='overflow-x-auto flex space-x-4 my-5 border-b-2'>
        <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Dubai</button>
        {/* <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi whitespace-nowrap'>North America</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Asia</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Africa</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Oceania</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi whitespace-nowrap'>Middle East</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi whitespace-nowrap'>South America</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi'>Caribbean</button>
            <button className='hover:bg-stone-300 p-3 focus:border-2 border-semi whitespace-nowrap'>Central</button> */}
      </div>
      <div className='md:grid lg:grid-cols-4 md:gap-5 md:grid-cols-2'>
        {moreDestinations?.map((destination) => (
          <Link to={`attraction/${destination.id}`}>
            <div className='mt-2 relative' key={destination.id}>
              <div className='overflow-hidden rounded-2xl'>
                <img className='object-cover rounded-2xl h-[14em] w-full transition-all duration-500 cursor-pointer hover:scale-110' src='https://images.pexels.com/photos/4612433/pexels-photo-4612433.png?auto=compress&cs=tinysrgb&w=1600' alt={destination.state} />
              </div>
              <div className='absolute bottom-2 left-4  text-light'>
                <div className='font-semibold'>{destination.state} </div>
                <div className='text-xs'>{destination.address}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MoreDestinations