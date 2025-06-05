import React, { useState } from "react";
import {
  DataContainer,
  SpaceBetween,
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
import { add, arrow, download, upload } from "../../assets";
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
  TextFile,
  UploadBox,
} from "./CampaingStyles";

const Campaings = () => {
  const [campaings, setCampaings] = useState(true); // ¿hay campañas para ver?
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [showClients, setShowClients] = useState(false);
  const [campaingStatus, setCampaingStatus] = useState("Generada");

  const mockStatus = [
    "Generada",
    "Clientes listados",
    "Pendiente de emisión",
    "Rechazada",
    "Aprobada",
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  const aproveButton = () => {
    navigate("/operacion-exitosa");
    setCampaingStatus(mockStatus[4]);
    scrollToTop();
  };

  const declineButton = () => {
    navigate("/operacion-rechazada");
    setCampaingStatus(mockStatus[3]);
    scrollToTop();
  };

  const editButton = () => {
    navigate("/nueva-campaña");
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
            <DataContainer>
              <Text bold={true}>Campaña activa</Text>
              <CampaingCard>
                <TextCampaing bold={true}>Campaña 1</TextCampaing>
                <Row>
                  <Pill onClick={toggleClientList} status={campaingStatus}>
                    {campaingStatus}
                  </Pill>
                  <Icon src={arrow} alt=">" onClick={() => toggleDropdown(0)} />
                </Row>
              </CampaingCard>

              <DropContainer show={openDropdownIndex === 0}>
                {campaingDataMock.map((item, index) => (
                  <DropItem key={index}>
                    <TextCampaing bold={true}>{item.name}</TextCampaing>
                    <Description>{item.value}</Description>
                  </DropItem>
                ))}
                <SpaceBetween>
                  <TextCampaing>Archivo Resultante</TextCampaing>
                  <Icon onClick={() => {}} src={download} alt="⬇️" />
                </SpaceBetween>
                <UploadBox>
                  <label
                    htmlFor="file-upload"
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Icon src={upload} alt="Subir archivo" />
                    <TextFile>Adjuntar Log</TextFile>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files && files.length > 0) {
                        const file = files[0];
                        console.log("Archivo seleccionado:", file.name);
                      }
                    }}
                  />
                </UploadBox>
                <BtnContainer>
                  <Btn secondary={true} onClick={declineButton}>
                    Registrar observaciones
                  </Btn>
                  <Btn onClick={editButton}>Finalizar campaña</Btn>
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
