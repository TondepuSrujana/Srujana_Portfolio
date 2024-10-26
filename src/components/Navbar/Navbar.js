import React, { useState } from 'react'
import './Navbar.css'
import contactImg from '../../assests/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assests/menu.png';
import Resume from '../../assests/Tondepu-Srujana-Resume.pdf'


const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
    
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>

        </div>
        <div className='resumeDownload'>
        <a href={Resume} download="Srujana-Tondepu-Resume.pdf">
          <button className='downloadButton'>Download Resume</button>
        </a>
      </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt='' className='desktopMenuImg'/> Contact Me </button>

            <img src={menu} alt='Menu' className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-10} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>

            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>


        </div>
        </nav>

  )
}

export default Navbar


