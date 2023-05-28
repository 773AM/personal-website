import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email'
import '../styles/Home.css'


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Abraham</h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning and creating. 
            My hobbies include weightlifting, working on my car, losing money in the stock market, 
            and winning soccer matches with my friends on the weekends. 
          </p>
          <a href='https://www.linkedin.com/in/abraham-munoz-752396207/'><LinkedInIcon/></a>
          <a href='mailto: abrmunoz@outlook.com'><EmailIcon/></a>
          <a href='https://github.com/773AM'><GitHubIcon/></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, HTML5, CSS3, BootStrap, MaterialUI, Starlette(FastAPI)</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, MySQL, SQLite, ExpressJS</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home