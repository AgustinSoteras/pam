import React, {useState} from 'react'
import { DataContainer, Title, Text, TextSecondary, Icon, Row, Column  } from '../shared/SharedStyles'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { Btn } from '../shared/button/ButtonStyle'
import { add, arrow } from '../../assets'
import { CampaingCard, Pill, CampaingContainer, TextCampaing, DropContainer, Description, DropItem, BtnContainer } from './CampaingStyles'

const Campaings = () => {
  const [campaings, setCampaings] = useState(true) // ¿hay campañas para ver?
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const mockData = [
    {name: "Título", value: "Campaña 1"},
    {name: "Marca", value: "Visa"},
    {name: "Público objetivo", value: "Pequeños comercianes"},
    {name: "Periodicidad de recordatorios", value:" 10 dias"},
    {name: "Imagen", value: "foto.png"},
    {name: "Listado de clientes con Scoring", value: "listado.pdf"}
    ]

  return (
    <>
    <Header/>
    <Title big={true}>Mis campañas</Title>
    {campaings?
      <CampaingContainer>
        <Column>
          <DataContainer>
            <Text bold={true}>Campaña activa</Text>
            <CampaingCard>
              <TextCampaing bold={true}>Campaña 1</TextCampaing>
              <Row>
                <Pill>Generada</Pill>
                <Icon src={arrow} alt=">" onClick={toggleDropdown}/>
              </Row>
            </CampaingCard>
            <DropContainer show={isOpen}>
            {
            mockData.map((item, index)=>
              <DropItem key={index}>
                <TextCampaing bold={true}>{item.name}</TextCampaing>
                <Description>{item.value}</Description>
              </DropItem>
            )}
              <BtnContainer show={isOpen}>
                <Btn>Aprobar</Btn>
                <Btn secondary={true}>Rechazar</Btn>
                <Btn secondary={true}>Modificar</Btn>
              </BtnContainer>
            </DropContainer>
          </DataContainer>

          <DataContainer>
          <Text bold={true}>Últimas campañas</Text>
          <CampaingCard>
            <TextCampaing bold={true}>Campaña 1</TextCampaing>
            <Row>
                <Pill>Generada</Pill>
                <Icon src={arrow} alt=">" onClick={toggleDropdown}/>
              </Row>
            </CampaingCard>
            <DropContainer show={isOpen}>
            {
            mockData.map((item, index)=>
              <DropItem key={index}>
                <TextCampaing bold={true}>{item.name}</TextCampaing>
                <Description>{item.value}</Description>
              </DropItem>
            )}
            </DropContainer>
          </DataContainer>
        </Column>
      </CampaingContainer>
    :
      <DataContainer>
        <Text>No tenés una campaña activa, seleccioná el botón + para generar una nueva</Text>
        <Row>
            <Icon src={add} alt="+"/>
            <TextSecondary>Generar nueva campaña</TextSecondary>
        </Row>
      </DataContainer>
    }
    <Footer/>
  </>
  )
}

export default Campaings