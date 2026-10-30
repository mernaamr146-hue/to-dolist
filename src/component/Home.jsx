import React from 'react'
import bgimg from '../assets/study.jpg'
import NavBar from './NavBar'
export default function Home() {
  return (
    <div id='home' className='h-screen bg-center bg-cover relative' style={{backgroundImage:`url(${bgimg})`}}>
        <div className='relative z-20'><NavBar/></div>
       <div className='absolute bg-black opacity-70 inset-0'></div>
<div className='relative text-amber-50 h-screen flex items-center justify-center'><h2 className='font-homeFont text-6xl animate-bounce'>Plan it.Do it.Done!</h2></div>
    </div>
  )
}
