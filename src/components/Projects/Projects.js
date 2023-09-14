import React from 'react';
import './project.css';
import CardList from './CardList';

const Projects = () => {
  return (
    <section id='project' className='projects-height  flex flex-col justify-start items-center gap-5'>
        <h3 className='font-mono text-2xl text-center mt-5'>Browse My Recent</h3>
        <h1 className='font-poppins text-5xl font-bold text-center'>Projects</h1>
        <div className='flex flex-wrap items-center justify-center p-10 rounded-3xl gap-10 project-cardlist'>
          <CardList></CardList>
        </div>
    </section>
  )
}

export default Projects