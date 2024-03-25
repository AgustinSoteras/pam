import React from 'react'
import { DataContainer, Title, Logo } from './SharedStyles'
import Header from './Header'
import Footer from './Footer'
import { Btn } from './button/ButtonStyle'
import { decline } from '../../assets'
import { useNavigate } from "react-router-dom";

const Decline = () => {
  const navigate = useNavigate();

  const confirmButton = () => {
    navigate("/campañas");
  };

  return (
    <>
        <Header></Header>
        <DataContainer>
            <Logo src={decline} alt="Ok"/>
            <Title spaceBottom={true} big={true}>¡Listo!</Title>
            <Title spaceBottom={true}>La campaña fue rechazada</Title>
            <Btn onClick={confirmButton}>Aceptar</Btn>
        </DataContainer>
        <Footer></Footer>
    </>
  )
}

export default Decline