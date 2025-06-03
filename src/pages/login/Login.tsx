import React, {useState} from 'react'
import { DataContainer, Input, InputContainer, Label, End, Isotype, ErrorText, Title } from '../../GlobalStyles'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Btn } from '../../components/button/ButtonStyle'
import { useNavigate } from "react-router-dom";
import { isotipo } from '../../assets'

const Login = () => {
  const [error, setError] = useState(false)
  const [emailValue, setEmailValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const navigate = useNavigate();

  const confirmButton = () => {
    validateForm() === true ?
    navigate("/campañas") : setError(true);
  };

  const validateForm = () => {
    const invalidEmail = emailValue.includes('@');
    const invalidPass = passValue.length >= 5;
    return invalidEmail && invalidPass;
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassValue(event.target.value);
  };

  return (
    <>
      <Header/>
      <Title>Iniciar sesión</Title>
      <DataContainer>
        <End>
          <Isotype src={isotipo}/>
        </End>
        <InputContainer margin0={true}>
          <Label>Email o usuario</Label>
          <Input
            type="text"
            value={emailValue}
            onChange={handleEmailChange}>
        </Input>
        </InputContainer>
        <InputContainer margin0={true}>
          <Label>Contraseña</Label>
          <Input
              type="text"
              value={passValue}
              onChange={handlePassChange}>
          </Input>
        </InputContainer>
        <ErrorText isError={error}>Correo o contraseña no válidos</ErrorText>
        <Btn onClick={confirmButton}>Iniciar sesión</Btn>
      </DataContainer>
      <Footer/>
    </>
  )
}

export default Login