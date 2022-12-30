import React from 'react'
import banner from '../../static/images/banner.jpg'
import BlogImagesLink from '../../data/BlogImagesLink'
import { AiOutlineSearch } from 'react-icons/ai'

function BlogHeroSection() {
    return (
        <div className='lg:max-w-screen-xl lg:mx-auto py-14'>
            <div className='flex justify-between items-center'>
                <div className='text-darktext'>
                    <h1 className='text-5xl font-medium heading'>Blog</h1>
                    <p className='text-text'>Latin literature from 45 BC, making it over 2000 years old</p>
                </div>
                <div className='mr-5 flex'>
                    <input type='search' placeholder='Search here!!!' className=' py-3 bg-light border border-main px-2 rounded-l-xl' />
                    <button className='text-3xl flex justify-center items-center bg-main rounded-r-lg text-light w-16 h-14'><AiOutlineSearch /></button>
                </div>
            </div>
            <div className='mt-5'>
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {BlogImagesLink?.map((item, index) => (
                        <div className=' mt-2 bg-light p-3 rounded-3xl cursor-pointer' key={index}>
                            <div className=' relative'>
                                <div className='overflow-hidden rounded-t-3xl rounded-b-md'>
                                    <img className='hover:scale-110 object-cover  h-[14em] lg:[14em] w-full transition-all duration-500 cursor-pointer' src={item.img} alt='Loreum' />
                                </div>
                                <div className='px-3 space-y-3 pb-5 pt-3 text-darktext'>
                                    <div className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo </div>
                                    <div className='flex space-x-2 items-center'>
                                        <span className=''>
                                            <img src={banner} className='h-8 w-8 rounded-full' />
                                        </span>
                                        <span className=''><i className='text-bluetrans font-light text-sm '>15th April 2022</i></span>
                                        <span className='text-main'>{item.name}</span>
                                    </div>

                                    <div className='text-sm text-text leading-relaxed'>
                                        Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                                        Eget dolor morbi non arcu risus. Suspendisse interdum consectetur libero id faucibus.
                                        Sem et tortor consequat id porta nibh venenatis.
                                        Egestas purus viverra accumsan in nisl nisi scelerisque eu. Risus feugiat in ante metus dictum at tempor commodo ullamcorper.
                                    </div>
                                    {/* <div className='flex justify-end'>
                                        <button className='py-1 px-2 bg-lightblue hover:bg-blue rounded-md text-light text-sm '>Read more</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogHeroSection