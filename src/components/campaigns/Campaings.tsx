import React from 'react'
import { DataContainer, Title, Text, TextSecondary, Icon, Row } from '../shared/SharedStyles'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { Btn } from '../shared/button/ButtonStyle'
import { add } from '../../assets'

const Campaings = () => {
  return (
    <>
    <Header></Header>
    <Title>Mis campañas</Title>
    <DataContainer>
        <Text>No tenés una campaña activa, seleccioná el botón + para generar una nueva</Text>
        <Row>
            <Icon src={add} alt="+"/>
            <TextSecondary>Generar nueva campaña</TextSecondary>
        </Row>
    </DataContainer>
    <Footer></Footer>
  </>
  )
}

export default Campaings