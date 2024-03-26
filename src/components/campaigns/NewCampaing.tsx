import React from 'react'
import { DataContainer, 
        Title, 
        Input, 
        InputContainer, 
        Label, 
        Select 
    } from '../shared/SharedStyles'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { Btn } from '../shared/button/ButtonStyle'
import { useNavigate } from "react-router-dom";

const NewCampaing = () => {
  const navigate = useNavigate();

  const aproveButton = () => {
    navigate("/operacion-exitosa");
  };

  return (
    <>
    <Header></Header>
    <Title>Generar campaña</Title>
    <DataContainer>
      <InputContainer>
        <Label>Título</Label>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Label>Marca</Label>
        <Select></Select>
      </InputContainer>
      <InputContainer>
        <Label>Público objetivo</Label>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Label>Periodicidad de recordatorios</Label>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Label bold={true}> Adjuntar una imagen</Label>
        <Label>Esta imagen se utilizará en las notificaciones a los prospectos</Label>
        <Input type="file"></Input>
        <Label tiny={true}>Hasta 50 MB en .jpg, .jpeg o .png</Label>
      </InputContainer>
      <InputContainer>
        <Label bold={true}> Listado de clientes con Scoring</Label>
        <Input type="file"></Input>
        <Label tiny={true}>Hasta 100 MB en .jpg, .jpeg o .png</Label>
      </InputContainer>
      <Btn onClick={aproveButton}>Guardar</Btn>
    </DataContainer>
    <Footer></Footer>
  </>
  )
}

export default NewCampaing