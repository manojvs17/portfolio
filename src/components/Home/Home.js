import React from 'react';
import myImage from '../../assets/23.jpg';
import gitHub from '../../assets/github.png';
import linkedIn from '../../assets/linkedin.png';
import cssbattle from '../../assets/bat.png';
import './Home.css';
import { useState } from 'react';
import resume from '../../assets/resume.pdf'
import { useTypewriter } from 'react-simple-typewriter'

const Home = () => {
  let [text]=useTypewriter({
    words:['FrontEnd Developer','Football Player'],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80,
  });
  let [profileList] = useState([
    {title: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/manoj-v-s-fb17',              src:linkedIn},
    {title: 'GitHub Profile',   url: 'https://github.com/manojvs17',                            src:gitHub},
    {title: 'CssBattle Profile',url: 'https://cssbattle.dev/player/manojvs',                    src:cssbattle}
  ]);

  return (
    <>
    <section className='home-height flex justify-center items-center gap-20 py-20 home-screen' id='home'>
     <img src={myImage} alt='MyImage' className='rounded-full home-img blob-animation'></img>
     <div className='flex flex-col gap-2 justify-center home-content'>
        <p className='text-2xl font-mono'>Hello, I'm</p>
        <h1 className='text-6xl font-bold font-poppins'>Manoj V S</h1>
        <p className='text-[1.8em] font-bold font-mono mt-[.5em] h-[1em] text-[green]'>{text}</p>
        <div className='flex gap-10 mt-5'>
          <a href={resume} target='_blank' rel="noopener noreferrer" className='font-poppins font-bold btn'>
            View CV
          </a>
          <a href='#contact' className='font-poppins font-bold btn'>
            Contact Info
          </a>
        </div>
        <div className='flex gap-10 mt-5 ml-7'>
        {profileList.map((profile,index)=>(
            <li key={index} className='list-none'>
              <a href={profile.url} target='_blank' rel="noopener noreferrer" title={profile.title}><img src={profile.src} alt={profile.title} className='h-10 w-10 hover:scale-110'></img></a>
            </li>
          ))}
        </div>   
     </div>
    </section>
    </>
  )
}

export default Home