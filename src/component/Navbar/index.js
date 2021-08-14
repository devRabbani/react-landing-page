import React, { useEffect, useState } from 'react'
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  Navlogo,
  NavMenu,
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'

import { animateScroll as rScroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
  const [scroll,setScroll]=useState(false)

  const scrollNav=()=>{
    if (window.scrollY>=90){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',scrollNav)
  },[])

  return (
    <>
      <Nav scrollNow={scroll}>
        <NavbarContainer>
          <Navlogo to='/' onClick={()=>rScroll.scrollToTop()}>CanWeBe</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks smooth=
              {true} duration={500} spy={true} exact='true' to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth=
              {true} duration={500} spy={true} exact='true' to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth=
              {true} duration={500} spy={true} exact='true' to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth=
              {true} duration={500} spy={true} exact='true' to='signup'>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
