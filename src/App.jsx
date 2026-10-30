import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './component/to-do list/Todolist'
import Home from './component/Home'
import AboutUs from './component/AboutUs'
import OurTeam from './component/OurTeam'
import Footer from './component/Footer'
import Ourfeat from './component/Ourfeat'

function App() {


  return (
    <>
<Home></Home>
    <div className='w-4/5 mx-auto'>
    <AboutUs/>
    <Ourfeat></Ourfeat>
    <Todolist/>
    <OurTeam/>
    
     </div>
     <Footer/>
    </>
  )
}

export default App
