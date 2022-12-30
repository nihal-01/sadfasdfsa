import React from 'react'
import ReactPlayer from 'react-player'
import burj1 from '../../static/images/burj1.jpg'
import burj2 from '../../static/images/burj2.jpg'
import burj3 from '../../static/images/burj3.jpg'
import { useSelector } from 'react-redux'


function ImageSection() {
    const { excursion } = useSelector(state => state.excursion)
    return (
        <div className='bg-soft'>
            <div className='lg:mx-auto lg:max-w-screen-2xl'>
                <div className='lg:grid lg:grid-cols-12 gap-1'>
                    <div className='col-span-3 space-y-3 px-5'>
                        {excursion?.images?.map((item) => (
                        <div className=''>
                            <img src={"http://127.0.0.1:5000" + item} alt='Burj Khalifa'
                                className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' />
                        </div>
                        ))}
                        {/* <div className=''>
                            <img src={burj1} alt='Burj Khalifa'
                                className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' />
                        </div>
                        <div className=''>
                            <img src={burj2} alt='Burj Khalifa'
                                className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' />
                        </div>
                        <div className=''>
                            <img src={burj3} alt='Burj Khalifa'
                                className='rounded-xl object-cover w-full h-[16vh] hidden lg:block' />
                        </div> */}
                    </div>
                    <div className='col-span-9 '>
                        <div className='w-full md:h-full h-72 md:rounded-3xl overflow-hidden'>
                            {/* <img src='https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_960_720.jpg' alt='Burj Khalifa'
                        className='object-cover w-full h-[50vh]' /> */}
                            {/* <iframe src='https://www.youtube.com/watch?v=K4TOrB7at0Y' alt='Burj Khalifa' className='w-full h-[50vh]' /> */}
                            <ReactPlayer  width={'100%'} height={'100%'} muted playing loop url={excursion?.youtubeLink} />
                            {/* controls  playing loop */}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection