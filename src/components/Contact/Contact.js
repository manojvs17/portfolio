import React, { useState } from 'react'
import gitHub from '../../assets/github.png';
import linkedIn from '../../assets/linkedin.png';
import cssbattle from '../../assets/bat.png';
import youtube from '../../assets/youtube.png'
const Contact = () => {
  let [contactList] = useState([
        {title: 'LinkedIn', url: 'https://www.linkedin.com/in/manoj-v-s-fb17',              src:linkedIn},
        {title: 'GitHub',   url: 'https://github.com/manojvs17',                            src:gitHub},
        {title: 'CssBattle',url: 'https://cssbattle.dev/player/manojvs',                    src:cssbattle},
        {title: 'Youtube',  url: 'https://www.youtube.com/channel/UCXDZqMrDNJOWB4wS1bSKk9g',src:youtube}
      ]);
  return (
    <section id='contact' className='flex flex-col justify-center items-center py-10'> 
        <p className='text-center font-mono text-2xl'>Feel free to</p>
        <h1 className='text-center font-poppins text-5xl font-bold mt-2'>Contact Me</h1>
        
          <ul className='border-2 border-black h-fit w-fit p-2 mt-5 rounded-[1em]'>
            <li className='m-5'><span className='font-bold text-[1.3em]'>Email-Id: </span><span className='text-blue-900 font-poppins'>manojvs0170@gmail.com</span></li>
          {contactList.map((contacts,index)=>(
            <li key={index} className='flex gap-10 m-5 '>
                <span className='w-[5em] h-fit font-bold self-center text-[1.3em]'>{contacts.title}</span>-<a href={contacts.url} target='_blank' rel="noopener noreferrer" title='Click the Icon to visit'><img src={contacts.src} alt={contacts.title} className='h-12 w-12 hover:scale-110'></img></a>
            </li>
          ))}
          </ul>
        
    </section>
  )
}

export default Contact