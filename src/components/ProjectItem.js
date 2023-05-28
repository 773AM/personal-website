import React from 'react'
import '../styles/Project.css'


function ProjectItem({ image, name, link }) {
  return (
    <div className='projectItem' >
      <a target='_blank' rel="noopener noreferrer" href={link}>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'></div>
        <h1>{name}</h1>
      </a>
    </div>
  )
}

export default ProjectItem