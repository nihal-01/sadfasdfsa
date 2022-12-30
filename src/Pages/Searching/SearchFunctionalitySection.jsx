import React from 'react'
import { AiFillStar, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { BsWhatsapp } from 'react-icons/bs'

function SearchFunctionalitySection({ viewCategory, setViewCategory }) {
    return (
        <>
            <div className={`lightglass ${viewCategory ? "fixed" : "hidden"} top-0 bottom-0 right-0 left-0 z-10`} onClick={() => setViewCategory(!viewCategory)}></div>
            <div className={`bg-light  p-5 lg:p-0 rounded-t-3xl overflow-y-auto lg:rounded-none lg:bg-light lg:h-auto lg:w-auto h-[85vh] w-full fixed lg:static ${viewCategory ? "bottom-0" : "-bottom-full"} z-10 transition-all duration-500`}>
            <div className='flex lg:hidden justify-between text-darktext p-3'>
                    <span className='text-xl font-semibold'>Category</span>
                    <span className='text-3xl' onClick={() => setViewCategory(!viewCategory)}><AiOutlineClose /></span>
                </div>
                <div className=''>
                    <div className='lg:border rounded-xl'>
                        <div className='p-5 space-y-5'>
                            <div className='1 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Where are you travelling?</p>
                                </div>
                                <div className=''>
                                    <input type='date' className='text-text py-2 w-full border border-sky-500 rounded-lg px-2 focus:border-none focus:ring-1 focus:ring-sky-500 outline-none' />
                                </div>
                            </div>
                            <div className='2 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Popular Tags</p>
                                </div>
                                <div className='space-y-3'>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>Child Friendly</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>Taking extra precuations</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>Away from the chaos</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>Epic challenges</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>Virtual experiences</p>
                                    </div>
                                </div>
                            </div>
                            <div className='3 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Price Range</p>
                                </div>
                                <div className='flex items-center space-x-4'>
                                    <input type='range' min={'0'} max={'100'} className='w-full' />
                                </div>
                                <div className='flex items-center space-x-4 justify-center'>
                                    <input type='number' className='border border-sky-500 w-20 py-2 px-2 text-text rounded-lg focus:border-none focus:ring-1 focus:ring-sky-500 outline-none' />
                                    <p> = </p>
                                    <input type='number' className='border border-sky-500 w-20 py-2 px-2 text-text rounded-lg focus:border-none focus:ring-1 focus:ring-sky-500 outline-none' />
                                </div>
                            </div>
                            <div className='4 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Duration</p>
                                </div>
                                <div className='space-y-3'>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>Upto 1 Hour</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>1 to 4 Hour</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>4 Hour to 1 Day</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>1 to 3 Day</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>3 Days or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className='5 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Tour Rating</p>
                                </div>
                                <div className='space-y-3'>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                        </div>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                        </div>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                        </div>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-semisoft'><AiFillStar /></span>
                                        </div>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <div className='text-lg text-darktext flex items-center'>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                            <span className='text-yellow-500'><AiFillStar /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='6 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Age Group</p>
                                </div>
                                <div className='space-y-3'>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>1 & Up</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>3 & Up</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>7 & Up</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>13 & Up</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>18 & Up</p>
                                    </div>
                                </div>
                            </div>
                            <div className='7 space-y-3'>
                                <div className='text-text font-medium'>
                                    <p className=''>Specials</p>
                                </div>
                                <div className='space-y-3'>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>Discounted deals</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>Free Cancellations</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>Private Groups</p>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <input type='checkbox' className='w-5' />
                                        <p className='text-sm text-darktext'>New on TC.tours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block bg-light border rounded-xl py-5 mt-5 mb-10'>
                        <div className='p-3 text-text space-y-3'>
                            <div className='text-2xl text-darktext'>
                                Need Help?
                            </div>
                            <div className='flex items-center space-x-3 ml-3'>
                                <div className='text-2xl text-blue'><TfiHeadphoneAlt /> </div>
                                <div className='space-y-2'>
                                    <div className='text-main'>Call us on</div>
                                    <div className=''>+910000000000</div>
                                    <div className=''>+910000000000</div>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3 ml-3'>
                                <div className='text-2xl text-green-600'><BsWhatsapp /> </div>
                                <div className='space-y-2'>
                                    <div className='text-main'>Whatsapp us on</div>
                                    <div className=''>+910000000000</div>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3 ml-3'>
                                <div className='text-2xl text-blue'><AiOutlineMail /> </div>
                                <div className='space-y-2'>
                                    <div className='text-main'>Email us on</div>
                                    <div className=''>test123@email.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchFunctionalitySection