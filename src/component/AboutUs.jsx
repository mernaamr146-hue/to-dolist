import React from 'react'
import abotimg from '../assets/study2.jpg'
export default function AboutUs() {
  return (
  
    <div id='about-us' className='my-20 p-10 shadow-xl rounded-2xl bg-blue-100 scroll-mt-30'>
      <h1 className='text-center my-4 text-4xl'>About Us</h1>

      <div className='flex flex-col md:flex-row'>

       
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <img src={abotimg} alt="About us" className='w-4/5 rounded-xl' />
        </div>

       
        <div className='w-full md:w-1/2 pt-5'>
          <h2 className='text-neutral-500 font-bold'>About Us</h2>
          <p className='mb-3'>
            We are a passionate team dedicated to helping people organize their tasks 
            and boost productivity with simple and effective tools.
          </p>

          <h2 className='text-neutral-500 font-bold'>Our Mission</h2>
          <p className='mb-3'>
            Our mission is to provide you with the best experience, 
            making your daily life easier, more productive, and stress-free.
          </p>

          <h2 className='text-neutral-500 font-bold'>Our Vision</h2>
          <p>
            To be a leading company that inspires innovation and delivers value to our clients worldwide.
          </p>
        </div>

      </div>
    </div>
  
  )
}
