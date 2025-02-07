import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Tittle text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.aboutus} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Craftyfy, a vibrant online marketplace dedicated to unique, handcrafted treasures. We connect skilled artisans with craft lovers, offering a diverse collection of handmade home décor, jewelry, stationery, and more. Every piece is crafted with passion and care, making each purchase a celebration of creativity and craftsmanship. Join us in supporting local artisans and bringing one-of-a-kind artistry into your life!</p>
          {/* <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p> */}
          <b className='text-gray-800'>Our Mission</b>
          <p>At Craftyfy, our mission is to empower artisans by providing a platform to showcase and sell their handmade creations. We are committed to preserving traditional craftsmanship, promoting sustainability, and connecting buyers with unique, high-quality handmade products. By supporting local artisans, we aim to foster a community that values creativity, authenticity, and ethical shopping.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Tittle text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About