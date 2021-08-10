import React from 'react'
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

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to='/'>CanWeBe</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Sign Up</NavLinks>
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
