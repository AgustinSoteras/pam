import React, { useState } from "react";
import {
  DataContainer,
  Input,
  InputContainer,
  Label,
  End,
  Isotype,
  ErrorText,
  Title,
} from "../../GlobalStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Btn } from "../../components/button/ButtonStyle";
import { useNavigate } from "react-router-dom";
import { isotipo, errorIcon } from "../../assets";
import { ContainerErrorText } from "./styles";

const Login = () => {
  const [error, setError] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const navigate = useNavigate();

  const confirmButton = () => {
    validateForm() === true ? navigate("/campañas") : setError(true);
  };

  const validateForm = () => {
    const invalidEmail = emailValue.includes("@");
    const invalidPass = passValue.length >= 5;
    return invalidEmail && invalidPass;
  };

  const handleEmailChange = (event) => {
    setError(false);
    setEmailValue(event.target.value);
  };

  const handlePassChange = (event) => {
    setError(false);
    setPassValue(event.target.value);
  };
  
  return (
    <>
      <Header />
      <DataContainer>
        <End>
          <Isotype src={isotipo} />
        </End>
        <InputContainer margin0={true}>
          <Label>Email o usuario</Label>
          <Input
            hasContent={emailValue.length > 0 && !error}
            error={error}
            type="text"
            value={emailValue}
            onChange={handleEmailChange}
          />
        </InputContainer>
        <InputContainer margin0={true}>
          <Label>Contraseña</Label>
          <Input
            hasContent={passValue.length > 0 && !error}
            error={error}
            type="password"
            value={passValue}
            onChange={handlePassChange}
          />
        </InputContainer>
        {error && (
          <ContainerErrorText>
            <img src={errorIcon} alt="Icono error" />
            <ErrorText isError={error}>
              Email o contraseña incorrectos
            </ErrorText>
          </ContainerErrorText>
        )}
        <Btn onClick={confirmButton}>Iniciar sesión</Btn>
      </DataContainer>
      <Footer />
    </>
  );
};

export default Login;
