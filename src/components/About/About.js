import React from 'react';
import myImage from '../../assets/20.png';
import './about.css';

const About = () => {
  return (
    <section className='about-screen about-height flex gap-5 justify-center items-center ' id='about'>
        <div className=''>
            <img src={myImage} alt="MyImage" className='rounded-full about-image'/>
        </div>
        <div className='pr-20 text-center about-content-padding'>
            <h3 className='text-center font-mono text-2xl'>Get to know more</h3>
            <h1 className='text-center font-poppins text-5xl font-bold mt-2'>About Me</h1>
            <p className='about-headline mt-10 text-center font-mono font-bold text-2xl border-2 border-black rounded-lg p-1 text-blue-900'>
            Aspiring Front-End Developer | Seeking Entry-Level Opportunities
            </p>
            <p className='font-poppins mt-5 text-lg about-para'>
            <p>As a passionate Front End Developer, I specialize in turning creative ideas into captivating online experiences.</p><br></br><p>With expertise in HTML, CSS,JavaScript and React JS, I craft websites that not only look great but also engage and delight users.</p> <br></br><p>My commitment to innovation and staying at the cutting edge of web design ensures I deliver exceptional results.</p><br></br> <span className='font-bold bg-yellow-400'>Let's connect and discuss how I can elevate your digital projects to new heights!</span>
            </p>
            <p className='text-center text-blue-600 text-lg mt-5'>
                <span className='font-bold pr-2 font-poppins text-red-700'>Email:</span><span className='hover:underline cursor-pointer'>manojvs0170@gmail.com</span>
            </p>
        </div>
    </section>
  )
}

export default About