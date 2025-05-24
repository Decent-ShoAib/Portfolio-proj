import React, { useRef } from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'

function Nav() {
  let mobile = useRef();
  let menu = useRef();
  const handleCloseMenu = () => {
    mobile.current.classList.remove("activeMobile");
    menu.current.classList.remove("activeham");
  };
  return (
    <>
      <nav>
        <h1>PortFolio</h1>
        <ul className='deskstopMenu'>
          <Link to='home' smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
          <Link to='about' smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
          <Link to='projects' smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
          <Link to='contact' smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
        </ul >

        <div className="hamburger" ref={menu} onClick={() => {
          mobile.current.classList.toggle("activeMobile")
          menu.current.classList.toggle("activeham")
        }}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        <ul className='mobileMenu' ref={mobile}>
          <Link onClick={handleCloseMenu} to='home' smooth={true} duration={500} activeClass='active' spy={true}><li>Home</li></Link>
          <Link onClick={handleCloseMenu} to='about' smooth={true} duration={500} activeClass='active' spy={true}><li>About</li></Link>
          <Link onClick={handleCloseMenu} to='projects' smooth={true} duration={500} activeClass='active' spy={true}><li>Projects</li></Link>
          <Link onClick={handleCloseMenu} to='contact' smooth={true} duration={500} activeClass='active' spy={true}><li>Contact</li></Link>
        </ul >

      </nav >
    </>
  )
}

export default Nav