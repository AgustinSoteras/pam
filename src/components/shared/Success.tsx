import React from 'react'
import { DataContainer, Title, Logo } from './SharedStyles'
import Header from './Header'
import Footer from './Footer'
import { Btn } from './button/ButtonStyle'
import { success } from '../../assets'
import { useNavigate } from "react-router-dom";

const SuccessCampaing = () => {
  const navigate = useNavigate();

  const confirmButton = () => {
    navigate("/campañas");
  };

  return (
  <>
    <Header></Header>
    <DataContainer>
        <Logo src={success} alt="Ok"/>
        <Title spaceBottom={true} big={true}>¡Listo!</Title>
        <Title spaceBottom={true}>Operación realizada con éxito</Title>
        <Btn onClick={confirmButton}>Aceptar</Btn>
    </DataContainer>
    <Footer></Footer>
  </>
  )
}

export default SuccessCampaing