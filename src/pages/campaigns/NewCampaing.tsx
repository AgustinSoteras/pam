import React, { useState } from "react";
import {
  DataContainer,
  Title,
  Input,
  InputContainer,
  Label,
  Form,
} from "../../GlobalStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Btn } from "../../components/button/ButtonStyle";
import { useNavigate } from "react-router-dom";
import Select from "../../components/select/select";

const NewCampaing = () => {
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");
  const [fileInput1, setFileInput1] = useState(null);
  const [fileInput2, setFileInput2] = useState(null);
  const [selectValue, setSelectValue] = useState("");

  const handleTextInput1Change = (event) => {
    setTextInput1(event.target.value);
  };

  const handleTextInput2Change = (event) => {
    setTextInput2(event.target.value);
  };

  const handleTextInput3Change = (event) => {
    setTextInput3(event.target.value);
  };

  const handleFileInput1Change = (event) => {
    setFileInput1(event.target.files[0]);
  };

  const handleFileInput2Change = (event) => {
    setFileInput2(event.target.files[0]);
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  const aproveButton = () => {
    navigate("/operacion-exitosa");
    scrollToTop();
  };

  const optionsSelect = ["Option 1", "Option 2"];

  return (
    <>
      <Header />
      <Title margin="0px 0px 32px 0px">Generar campaña</Title>
      <DataContainer>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Título</Label>
            <Input
              hasContent={textInput1.length > 0}
              type="text"
              value={textInput1}
              onChange={handleTextInput1Change}
            />
          </InputContainer>
          <InputContainer>
            <Label>Marca</Label>
            <Select options={optionsSelect} />
          </InputContainer>
          <InputContainer>
            <Label>Público objetivo</Label>
            <Input
              type="text"
              value={textInput2}
              onChange={handleTextInput2Change}
            />
          </InputContainer>
          <InputContainer>
            <Label>Periodicidad de recordatorios</Label>
            <Input
              type="text"
              value={textInput3}
              onChange={handleTextInput3Change}
            />
          </InputContainer>
          <InputContainer>
            <Label margin0={true} bold={true}>
              {" "}
              Adjuntar una imagen
            </Label>
            <Label tiny={true}>
              Esta imagen se utilizará en las notificaciones a los prospectos
            </Label>
            <Input type="file" onChange={handleFileInput1Change} />
            <Label tiny={true}>Hasta 50 MB en .jpg, .jpeg o .png</Label>
          </InputContainer>
          <InputContainer>
            <Label bold={true}> Listado de clientes con Scoring</Label>
            <Input type="file" onChange={handleFileInput2Change} />
            <Label tiny={true}>Hasta 100 MB en .jpg, .jpeg o .png</Label>
          </InputContainer>
          <Btn type="submit" onClick={aproveButton}>
            Guardar
          </Btn>
        </Form>
      </DataContainer>
      <Footer />
    </>
  );
};

export default NewCampaing;
