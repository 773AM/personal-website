import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.instagram.com/maharbamunoz/'><InstagramIcon /></a>
            <a href='https://www.linkedin.com/in/abraham-munoz-752396207/'><LinkedInIcon /></a>
            <a href='https://open.spotify.com/user/31tyzzncytpnbpavte3yvlflz4ha?si=def534d86c514f7e'><LibraryMusicIcon /></a>
        </div>
        <p> &copy; 2023 | amunoz.tech</p>
    </div>
  )
}

export default Footer