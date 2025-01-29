import React from 'react'
import { assets } from '../assets/assets'
import Slideshow from './Slideshow';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero left side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <h1 style={{ fontFamily: 'Playwrite VN, serif' }} className='text-3xl sm:py-3 lg:text-4xl leading-relaxed'>Fuel your creativity with Craftyfy</h1>
                </div>
            </div>
            <Slideshow className='w-full sm:w-1/2 h-[400px]' />
        </div>
    )
}

export default Hero