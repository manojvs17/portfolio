import React from 'react'

const Footer = () => {
    let date=new Date();
    let year=date.getFullYear();

  return (
    <footer className='text-center font-bold text-[1.2em] w-[100%] h-[2em] p-2 bg-black text-white'>
        Copyright &#169; {year} Manoj V S
    </footer>         
  )
}

export default Footer