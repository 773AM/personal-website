import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu'


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const location = useLocation()

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

  return (
    <div className='navbar' id={menuOpen ? 'open' : 'close'}>
        <div className='toggleButton'>
            <button onClick={() => {setMenuOpen((state) => !state)}}><MenuIcon/> </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar