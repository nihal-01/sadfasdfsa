import React from 'react'
import banner from '../../static/images/banner.jpg'

function BlogDetailsHomeSection() {
    return (
        <div className='lg:max-w-screen-xl lg:mx-auto py-10'>
            <div className='md:grid grid-cols-12 gap-5'>
                <div className='col-span-3'>
                    <div className='w-full bg-semisoft rounded-xl'>
                        <div className='p-5'>
                            <div className='text-3xl text-darktext heading'>
                                Category
                            </div>
                            <div className='space-y-3 text-darktext pt-3'>
                                <div className='flex justify-between hover:text-lightblue'>
                                    <span className=''>Show all</span>
                                    <span className=''>56</span>
                                </div>
                                <div className='flex justify-between hover:text-lightblue'>
                                    <span className=''>Our team</span>
                                    <span className=''>56</span>
                                </div>
                                <div className='flex justify-between hover:text-lightblue'>
                                    <span className=''>Works</span>
                                    <span className=''>56</span>
                                </div>
                                <div className='flex justify-between hover:text-lightblue'>
                                    <span className=''>Images</span>
                                    <span className=''>56</span>
                                </div>
                                <div className='flex justify-between hover:text-lightblue'>
                                    <span className=''>Details</span>
                                    <span className=''>56</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-9'>
                    <div className='w-full space-y-5'>
                        <div className=''>
                            <h1 className='text-3xl font-medium text-darktext '>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>
                        </div>
                        <div className='rounded-2xl overflow-hidden md:h-[30em]'>
                            <img src={banner} alt='banner' className='' />
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <span className=''>
                                <img src={banner} className='h-12 w-12 rounded-full' />
                            </span>
                            <span className=''>
                                <div className='text-darktext text-lg '>Sam Philipie</div>
                                <div className=''><p className='text-bluetrans font-light text-lg '>15th April 2022</p></div>
                            </span>
                        </div>
                        <div className='text-darktext text-lg'>
                            <i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            </i>
                        </div>
                        <div className='text-text leading-relaxed'>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsHomeSection