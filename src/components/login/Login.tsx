import React from 'react'
import { DataContainer, Input, InputContainer, Label, End, Isotype } from '../shared/SharedStyles'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { Btn } from '../shared/button/ButtonStyle'
import { useNavigate } from "react-router-dom";
import { isotipo } from '../../assets'

const Login = () => {
  const navigate = useNavigate();

  const confirmButton = () => {
    navigate("/campañas");
  };

  return (
    <>
      <Header></Header>
      <DataContainer>
        <End>
          <Isotype src={isotipo}/>
        </End>
        <InputContainer>
          <Label>Email o usuario</Label>
          <Input></Input>
        </InputContainer>
        <InputContainer>
          <Label>Contraseña</Label>
          <Input></Input>
        </InputContainer>
        <Btn onClick={confirmButton}>Iniciar sesión</Btn>
      </DataContainer>
      <Footer></Footer>
    </>
  )
}

export default Login