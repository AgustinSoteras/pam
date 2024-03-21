import React from 'react'
import { FooterContainer } from './SharedStyles'
import { Banner, LogoFoot } from './SharedStyles'
import { banner, footerLogo } from '../../assets'

const Footer = () => {
  return (
    <FooterContainer>
        <Banner src={banner} alt="Banco Formosa"/>
        <LogoFoot src={footerLogo} alt="Banco Formosa"/>
    </FooterContainer>
  )
}

export default Footer