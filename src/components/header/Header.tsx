import React from 'react'
import { HeaderContainer, Logo } from '../../GlobalStyles'
import { headerLogo } from '../../assets'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
        <Logo src={headerLogo} onClick={backHome} alt="Banco Formosa"/>
    </HeaderContainer>
  )
}

export default Header