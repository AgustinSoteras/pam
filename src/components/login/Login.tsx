import React from 'react'
import { DataContainer, Input, InputContainer, Label } from '../shared/SharedStyles'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { Btn } from '../shared/button/ButtonStyle'

const Login = () => {
  return (
    <>
      <Header></Header>
      <DataContainer>
        <InputContainer>
          <Label>Email o usuario</Label>
          <Input></Input>
        </InputContainer>
        <InputContainer>
          <Label>Contraseña</Label>
          <Input></Input>
        </InputContainer>
        <Btn>Iniciar sesión</Btn>
      </DataContainer>
      <Footer></Footer>
    </>
  )
}

export default Login