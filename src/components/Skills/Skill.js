import React from 'react';
import skillImage from '../../assets/skills.png';
import tickImage from '../../assets/tick2.png';
import './skills.css';

const Skill = () => {
    let frontEndSkills=['HTML','CSS','JavaScript','TailWind CSS','React JS','Aptitude','Soft Skills'];
    let backEndSkills=['Git','GitHub']
  return (
    <section id='skills' className='skills-height flex flex-col justify-center items-center skill-screen'>
        <p className='font-mono text-2xl text-center mt-3'>Explore my</p>
        <h1 className='font-poppins text-5xl font-bold text-center mt-3'>Skills <img src={skillImage} alt="SkillImage" className='h-16 w-16 ml-7 mt-5 skills-image'/></h1>
        <div className='flex gap-20 skills-box'>
            <div className='border-2 border-black p-10 rounded-3xl skills-card'>
                <h1 className='text-center font-bold text-3xl'>Front End Development</h1>
                <ul className='mt-3 flex flex-col justify-center '>
                   {frontEndSkills.map((Skills,index)=>(
                        <li key={index} className='flex gap-2 mt-2 ml-20 font-poppins text-xl'><img src={tickImage} alt='ListImage' className='h-6 w-6'></img>{Skills}</li>
                   ))}
                </ul>
            </div>
            <div className='border-2 border-black p-10 rounded-3xl skills-card'>
                <h1 className='text-center font-bold text-3xl'>Back End Development</h1>
                <ul className='mt-3 flex flex-col justify-center'>
                {backEndSkills.map((Skills,index)=>(
                        <li key={index} className='flex gap-2 mt-2 ml-20 font-poppins text-xl'><img src={tickImage} alt='ListImage' className='h-6 w-6'></img>{Skills}</li>
                   ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Skill