import React, { useState } from "react";
import {
  DataContainer,
  Text,
  TextSecondary,
  Icon,
  Row,
  Column,
  Title,
} from "../../GlobalStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Btn } from "../../components/button/ButtonStyle";
import { add, arrow, arrowDown, arrowUp, download, upload } from "../../assets";
import { useNavigate } from "react-router-dom";
import ClientList from "./ClientList";
import { campaingDataMock } from "../../mocks/CampaingDatamock";
import {
  CampaingCard,
  Pill,
  ClientContainer,
  CampaingContainer,
  TextCampaing,
  DropContainer,
  Description,
  DropItem,
  BtnContainer,
} from "./CampaingStyles";

interface CampaingValues {
  title?: string;
  brand?: string;
  targetAudience?: string;
  preEmissionFile?: string;
  targetFile?: string;
}

const Campaings = () => {
  const [campaings, setCampaings] = useState(true); // ¿hay campañas para ver?
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [showClients, setShowClients] = useState(false);
  const [campaingStatus, setCampaingStatus] = useState("En proceso");

  const navigate = useNavigate();

  const valuesMock = campaingDataMock.reduce<CampaingValues>((acc, item) => {
    if (item.name === "Título") acc.title = item.value;
    if (item.name === "Marca") acc.brand = item.value;
    if (item.name === "Público objetivo") acc.targetAudience = item.value;
    if (item.name === "Archivo de pre emisión (BT)")
      acc.preEmissionFile = item.value;
    if (item.name === "Archivo de público objetivo (Inteligencia comercial)")
      acc.targetFile = item.value;

    return acc;
  }, {});

  const editButton = () => {
    navigate("/nueva-campaña", {
      state: valuesMock,
    });
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };

  const toggleClientList = () => {
    setShowClients(!showClients);
  };

  return (
    <>
      <Header />
      {campaings ? (
        <CampaingContainer>
          <Column>
            <DataContainer onClick={() => toggleDropdown(0)}>
              <Text bold={true}>Campaña activa</Text>
              <CampaingCard>
                <TextCampaing bold={true}>Campaña 1</TextCampaing>
                <Row>
                  <Pill
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleClientList();
                    }}
                    status={campaingStatus}
                  >
                    {campaingStatus}
                  </Pill>
                  {openDropdownIndex === null ? (
                    <img
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(0);
                      }}
                      src={arrowDown}
                      alt="Arrow Down"
                    />
                  ) : (
                    <img
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(0);
                      }}
                      src={arrowUp}
                      alt="Arrow Up"
                    />
                  )}
                </Row>
              </CampaingCard>

              <DropContainer show={openDropdownIndex === 0}>
                {campaingDataMock.map((item, index) => (
                  <DropItem key={index}>
                    <TextCampaing bold={true}>{item.name}</TextCampaing>
                    <Description>{item.value}</Description>
                  </DropItem>
                ))}

                <BtnContainer>
                  <Btn bold secondary={true} onClick={editButton}>
                    Modificar
                  </Btn>
                </BtnContainer>
              </DropContainer>
            </DataContainer>

            <ClientContainer show={showClients}>
              <ClientList />
            </ClientContainer>

            <DataContainer>
              <Text bold={true}>Últimas campañas</Text>
              <CampaingCard>
                <TextCampaing>Campaña 1</TextCampaing>
                <Row>
                  <Pill status="Generada">Generada</Pill>
                  <Icon src={arrow} alt=">" onClick={() => toggleDropdown(1)} />
                </Row>
              </CampaingCard>
              <DropContainer show={openDropdownIndex === 1}>
                {campaingDataMock.map((item, index) => (
                  <DropItem key={index}>
                    <TextCampaing>{item.name}</TextCampaing>
                    <Description>{item.value}</Description>
                  </DropItem>
                ))}
              </DropContainer>
            </DataContainer>
            <Row onClick={editButton}>
              <Icon src={add} alt="+" />
              <TextSecondary>Generar nueva campaña</TextSecondary>
            </Row>
          </Column>
        </CampaingContainer>
      ) : (
        // vista que muestra si aun no existen campañas
        <>
          <Title margin="0px 0px 32px 0px">Mis campañas</Title>
          <DataContainer>
            <Text>
              No tenés una campaña activa, seleccioná el <br /> botón + para
              generar una nueva
            </Text>
            <Row onClick={editButton}>
              <Icon paddingRight="16px" src={add} alt="+" />
              <TextSecondary fontSize="20px">
                Generar nueva campaña
              </TextSecondary>
            </Row>
          </DataContainer>
        </>
      )}
      <Footer />
    </>
  );
};

export default Campaings;
