import React, { useState } from 'react'
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from './HeroSectionElements'
import video from '../../video/video.mp4'
import { Button } from '../Button/ButtonElement'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={video} autoPlay loop muted type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to CanWeBe</HeroH1>
        <HeroP>If you want to success leave the CanWeBe to us.</HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
