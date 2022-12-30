import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import banner from '../../static/images/banner.jpg'
import { useDispatch, useSelector } from 'react-redux'

function BlogSection() {
    const dispatch = useDispatch()

    // const { independentBlog } = useSelector(state => state.general)

    // useEffect(() => {
    //     dispatch(getIndependentBlog())
    // },[dispatch])

    // console.log(independentBlog);
    return (
        <div className='my-10 lg:max-w-screen-xl lg:mx-auto'>
            <div className='space-y-5'>

                {/* <div className='text-4xl font-semibold  flex justify-start lg:mx-0 mx-5'>
                    <div className='text-darktext'>Blog</div>
                </div> */}
                <div className='space-y-3 p-5 bg-trans shadow-sm lg:rounded-2xl py-14'>
                    <div className='flex justify-between items-center'>
                        <div className='text-darktext text-3xl font-medium cursor-default'>
                            Blog
                        </div>
                        <Link to='/blog'>
                            <div className='px-7 mr-2 hover:bg-soft hover:text-blue hover:border-blue hover:border bg-blue text-light shadow-sm py-2 rounded-md cursor-pointer'>View</div>
                        </Link>
                    </div>
                    <div className=' gap-5 md:grid-cols-2 md:grid lg:grid-cols-3'>
                        {/* {independentBlog?.map((blog) => ( */}
                        <div className=' mt-2 bg-light p-3 rounded-3xl cursor-pointer'>
                            <div className=' relative'>
                                <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                                    <img className='hover:scale-110 object-cover  h-[14em] lg:[14em] w-full transition-all duration-500 cursor-pointer' src={banner} alt={'banner'} />
                                </div>
                                <div className='px-3 space-y-3 pb-5 pt-3 text-darktext'>
                                    <div className='font-semibold'>dsnvhsdgh </div>
                                    <i className='text-bluetrans font-light text-sm '>10/101/22</i>
                                    <div className='text-sm text-text leading-relaxed line-clamp-6'>
                                        dsdbhksgdfhsgf
                                    </div>
                                    <div className='flex justify-end'>
                                        <button className='py-1 px-2 bg-lightblue hover:bg-blue rounded-md text-light text-sm '>Read more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ))} */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection