import React from 'react'
import { HeaderContainer, Logo } from './SharedStyles'
import { headerLogo } from '../../assets'

const Header = () => {
  return (
    <HeaderContainer>
        <Logo src={headerLogo} alt="Banco Formosa"/>
    </HeaderContainer>
  )
}

export default Header