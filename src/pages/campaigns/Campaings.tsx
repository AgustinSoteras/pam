import React, {useState} from 'react'
import { DataContainer, Title, Text, TextSecondary, Icon, Row, Column  } from '../../GlobalStyles'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Btn } from '../../components/button/ButtonStyle'
import { add, arrow } from '../../assets'
import { useNavigate } from "react-router-dom";
import ClientList from './ClientList'
import { campaingDataMock } from '../../mocks/CampaingDatamock'
import { 
  CampaingCard,
  Pill, 
  ClientContainer, 
  CampaingContainer, 
  TextCampaing, 
  DropContainer, 
  Description, 
  DropItem, 
  BtnContainer 
} from './CampaingStyles'

const Campaings = () => {
  const [campaings, setCampaings] = useState(true) // ¿hay campañas para ver?
  const [isOpen, setIsOpen] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const [campaingStatus, setCampaingStatus] = useState("Generada")

  const mockStatus = ["Generada", "Clientes listados","Pendiente de emisión","Rechazada", "Aprobada"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
 
  const navigate = useNavigate();

  const aproveButton = () => {
    navigate("/operacion-exitosa");
    setCampaingStatus(mockStatus[4])
    scrollToTop()
  };

  const declineButton = () => {
    navigate("/operacion-rechazada");
    setCampaingStatus(mockStatus[3])
    scrollToTop()
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
          <DataContainer>
            <Text bold={true}>Campaña activa</Text>
            <CampaingCard>
              <TextCampaing bold={true}>Campaña 1</TextCampaing>
              <Row>
                <Pill onClick={toggleClientList} status={campaingStatus}>{campaingStatus}</Pill>
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

          <ClientContainer show={showClients}>
              <ClientList/>
          </ClientContainer>

          <DataContainer>
          <Text bold={true}>Últimas campañas</Text>
            <CampaingCard>
              <TextCampaing bold={true}>Campaña 1</TextCampaing>
              <Row>
                  <Pill status='Generada'>Generada</Pill>
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
          <Row onClick={editButton}>
            <Icon src={add} alt="+"/>
            <TextSecondary>Generar nueva campaña</TextSecondary>
          </Row>
        </Column>
      </CampaingContainer>
    : // vista que muestra si aun no existen campañas
      <DataContainer>
        <Text>No tenés una campaña activa, seleccioná el botón + para generar una nueva</Text>
        <Row onClick={editButton}>
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