import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>

      
        <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>CWB</SocialLogo>
            <WebsiteRights>CWB © {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target="_blank"><FaFacebook/></SocialIconLink>
              <SocialIconLink href='/' target="_blank"><FaTwitter/></SocialIconLink>
              <SocialIconLink href='/' target="_blank"><FaInstagram/></SocialIconLink>
              <SocialIconLink href='/' target="_blank"><FaLinkedin/></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
        </FooterContainer>
     
    </>
  )
}

export default Footer
