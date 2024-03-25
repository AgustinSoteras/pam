import React, {useState} from 'react'
import { DataContainer, Title, Text, TextSecondary, Icon, Row, Column  } from '../shared/SharedStyles'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { Btn } from '../shared/button/ButtonStyle'
import { add, arrow } from '../../assets'
import { useNavigate } from "react-router-dom";
import ClientList from './ClientList'
import { campaingDataMock } from '../../mocks/CampaingDatamock'
import { CampaingCard, Pill, ClientContainer, CampaingContainer, TextCampaing, DropContainer, Description, DropItem, BtnContainer } from './CampaingStyles'

const Campaings = () => {
  const [campaings, setCampaings] = useState(true) // ¿hay campañas para ver?
  const [isOpen, setIsOpen] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const [campaingStatus, setCampaingStatus] = useState(["Generada", "Clientes listados","Pendiente de emisión","Rechazada"])

  const navigate = useNavigate();

  const aproveButton = () => {
    navigate("/operacion-exitosa");
  };

  const declineButton = () => {
    navigate("/operacion-rechazada");
  };

  const editButton = () => {
    navigate("/nueva-campaña");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleClientList = () => {
    setShowClients(!showClients)
  };

  return (
    <>
      <Header/>
      <Title big={true}>Mis campañas</Title>
      {campaings?
      <CampaingContainer>
        <Column>
          <DataContainer fullWidth={showClients}>
            <Text bold={true}>Campaña activa</Text>
            <CampaingCard>
              <TextCampaing bold={true}>Campaña 1</TextCampaing>
              <Row>
                <Pill onClick={toggleClientList} status={campaingStatus[1]}>{campaingStatus[1]}</Pill>
                <Icon src={arrow} alt=">" onClick={toggleDropdown}/>
              </Row>
            </CampaingCard>
            <DropContainer show={isOpen}>
            {
            campaingDataMock.map((item, index)=>
              <DropItem key={index}>
                <TextCampaing bold={true}>{item.name}</TextCampaing>
                <Description>{item.value}</Description>
              </DropItem>
            )}
              <BtnContainer show={isOpen}>
                <Btn onClick={aproveButton}>Aprobar</Btn>
                <Btn secondary={true} onClick={declineButton}>Rechazar</Btn>
                <Btn secondary={true} onClick={editButton}>Modificar</Btn>
              </BtnContainer>
            </DropContainer>
          </DataContainer>

          <DataContainer fullWidth={showClients}>
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
            campaingDataMock.map((item, index)=>
              <DropItem key={index}>
                <TextCampaing bold={true}>{item.name}</TextCampaing>
                <Description>{item.value}</Description>
              </DropItem>
            )}
            </DropContainer>
          </DataContainer>
        </Column>
        <ClientContainer show={showClients}>
              <ClientList/>
        </ClientContainer>
      </CampaingContainer>
    : 
    // vista que muestra si aun no existen campañas
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