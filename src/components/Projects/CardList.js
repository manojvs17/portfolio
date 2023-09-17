import React from 'react';
import handcricket from '../../assets/Projects Image/handcricket.png';
import analog from '../../assets/Projects Image/analog.png';
import design from '../../assets/Projects Image/design.png';
import retro from '../../assets/Projects Image/retro.png';
import stopwatch from '../../assets/Projects Image/stopwatch.png';
import dice from '../../assets/Projects Image/dice.png';
import currencyconvert from '../../assets/Projects Image/currencyconvert.png';
import website from '../../assets/Projects Image/website.png';

import { useState } from 'react';

const CardList = () => {
    let [imageData] = useState([
        {
          title: 'Website Project',
          imageSrc: website,
          live:'https://mnj-table-website.netlify.app/',
          github:'https://github.com/manojvs17/website-project.git'
        },
        {
            title: 'Hand Cricket Game',
            imageSrc: handcricket,
            live:'https://mnj-hand-cricket.netlify.app/',
            github:'https://github.com/manojvs17/hand-cricket.git'
          },
          {
            title: 'Analog Clock',
            imageSrc: analog,
            live:'https://mnj-analog-clock.netlify.app/',
            github:'https://github.com/manojvs17/analog-clock.git'
          },
          {
            title: 'Colorful Design',
            imageSrc: design,
            live:'https://mnj-design-1.netlify.app/',
            github:'https://github.com/manojvs17/circle-design.git'
          },
          {
            title: 'Retro Vibe',
            imageSrc: retro,
            live:'https://mnj-retro-vibe.netlify.app/',
            github:'https://github.com/manojvs17/retro-vibe.git'
          },
          {
            title: 'Stop Watch',
            imageSrc: stopwatch,
            live:'https://mnj-stop-watch.netlify.app/',
            github:'https://github.com/manojvs17/Stop-Watch.git'
          },
          {
            title: 'Dice Roll',
            imageSrc: dice,
            live:'https://mnj-dice-roll.netlify.app/',
            github:'https://github.com/manojvs17/dice-roll.git'
          },
          {
            title: 'Currency Converter',
            imageSrc: currencyconvert,
            live:'https://mnj-currency-converter.netlify.app/',
            github:'https://github.com/manojvs17/Currency-Converter.git'
          }
      ]);

    return (
    <>
    {imageData.map((info,index)=>(
        <li key={index} className='list-none'>
        <div className='border-4 border-red-900 p-5 rounded-lg flex flex-col flex-wrap'>
            <img src={info.imageSrc} alt="ProjectImage" className='h-52 w-52 self-center object-contain'/>
            <h1 className='text-2xl font-poppins text-center mt-1 font-bold'>{info.title}</h1>
            <div className='mt-2 flex gap-2 justify-center'>
              <a href={info.live} target='_blank' rel="noopener noreferrer" className='border-2 border-black p-1 rounded-xl font-bold hover:bg-black hover:text-white' title='Currently Under Maintanence'>
                  Live Demo
              </a>
              <a href={info.github} target='_blank' rel="noopener noreferrer" className='border-2 border-black p-1 rounded-xl font-bold hover:bg-black hover:text-white'>
                  GitHub Link
              </a>
            </div>
          </div>
        </li>
    ))}
    
    </>
  )
}

export default CardList