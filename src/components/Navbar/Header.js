import React, { useState } from 'react'
import './Header.css'
import hamBurger from '../../assets/hamburger.png'
const Header = () => {
  let [showMenu,setShowMenu]=useState(false);
  return (
    <header className='flex justify-around content-center bg-slate-200 navbar h-16' id='header'>
        <h1 className="text-left text-blue-500 text-5xl font-bold uppercase my-2">
            Manoj V S
        </h1>
        {/* Desktop Nav Menu */}
        <div className='py-5 header-nav-buttons nav-buttons-visible'>
           <ul className='flex gap-10 font-bold font-poppins'>
            <li><a href="#home" className='hover:text-red-500 hover:underline hover:underline-offset-8'>Home</a></li>
            <li><a href="#about" className='hover:text-red-500 hover:underline hover:underline-offset-8'>About</a></li>
            <li><a href="#skills" className='hover:text-red-500 hover:underline hover:underline-offset-8'>Skills</a></li>
            <li><a href="#project" className='hover:text-red-500 hover:underline hover:underline-offset-8'>Projects</a></li>
            <li><a href="#contact" className='hover:text-red-500 hover:underline hover:underline-offset-8'>Contact</a></li>
           </ul>
        </div>
        {/* Mobile Nav Menu */}
        <div className='hamburger-icon-visible hidden'>
          <img src={hamBurger} alt='icon' className='h-10 w-10 m-3 cursor-pointer' onClick={()=>setShowMenu(!showMenu)}></img>
          <ul className='mobile-nav flex-col absolute top-15 right-0 gap-5 font-bold font-poppins text-center h-fit w-[60%] p-3 border-4 border-black rounded-lg' style={{display: showMenu? 'flex':'none'}}>
              <li><a href="#home" onClick={()=>setShowMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={()=>setShowMenu(false)}>About</a></li>
              <li><a href="#skills" onClick={()=>setShowMenu(false)}>Skills</a></li>
              <li><a href="#project" onClick={()=>setShowMenu(false)}>Projects</a></li>
              <li><a href="#contact" onClick={()=>setShowMenu(false)}>Contact</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header