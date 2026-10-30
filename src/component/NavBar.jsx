import React, { useEffect } from 'react'
import { useState } from 'react'

export default function NavBar() {

const[scrolle,setScrolle] =useState(false);
useEffect(() => {
  function handleScroll() {
    if (window.scrollY > 600) {
      setScrolle(true);
    } else {
      setScrolle(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div>
      

<nav class={`fixed w-full transition-all duration-300 ${
          scrolle?"bg-white shadow-md text-black" : "bg-transparent text-amber-50"
        }`}
      >
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
       
        <span class="self-center text-5xl font-semibold whitespace-nowrap :text-white font-homeFont">Done Zone</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
     <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
  <li>
    <a href="#home" class="block py-2 px-3  rounded-sm hover:text-blue-700 md:p-0" aria-current="page">Home</a>
  </li>
  <li>
    <a href="#about-us" class="block py-2 px-3  rounded-sm hover:text-blue-700 md:p-0">About Us</a>
  </li>
  <li>
    <a href="#feature" class="block py-2 px-3  rounded-sm hover:text-blue-700 md:p-0">Our Features</a>
  </li>
  <li>
    <a href="#todo" class="block py-2 px-3  rounded-sm hover:text-blue-700 md:p-0">To-Do List</a>
  </li>
  <li>
    <a href="#team" class="block py-2 px-3  rounded-sm hover:text-blue-700 md:p-0">Our Team</a>
  </li>
</ul>
    </div>
  </div>
</nav>

    </div>
  )
}
