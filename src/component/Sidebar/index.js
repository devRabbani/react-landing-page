import React from 'react'
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrapper,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink onClick={toggle} to='about'>
              About
            </SidebarLink>
            <SidebarLink onClick={toggle} to='discover'>
              Discover
            </SidebarLink>
            <SidebarLink onClick={toggle} to='services'>
              Services
            </SidebarLink>
            <SidebarLink onClick={toggle} to='signup'>
              Sign Up
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrapper>
            <SidebarRoute onClick={toggle} to='/signin'>
              Sign In
            </SidebarRoute>
          </SideBtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
