import React from 'react'
import { DataContainer, Title, Logo } from '../shared/SharedStyles'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { Btn } from '../shared/button/ButtonStyle'
import { success } from '../../assets'

const SuccessCampaing = () => {
  return (
    <>
    <Header></Header>
    <DataContainer>
        <Logo src={success} alt="Ok"/>
        <Title spaceBottom={true} big={true}>¡Listo!</Title>
        <Title spaceBottom={true}>La campaña fue generada con éxito</Title>
        <Btn>Aceptar</Btn>
    </DataContainer>
    <Footer></Footer>
  </>
  )
}

export default SuccessCampaing