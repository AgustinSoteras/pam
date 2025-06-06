import React, { useRef, useState } from "react";
import {
  DataContainer,
  Title,
  Input,
  InputContainer,
  Label,
  Form,
  FileUploadLabel,
  TextFileUploadLabel,
  ContainerFileName,
  IconTrash,
} from "../../GlobalStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Btn } from "../../components/button/ButtonStyle";
import { useNavigate } from "react-router-dom";
import Select from "../../components/select/select";
import { downloadIconBlue, trashIcon } from "../../assets";

const NewCampaing = () => {
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [fileName1, setFileName1] = useState<string | null>(null);
  const [fileName2, setFileName2] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTextInput1Change = (event) => {
    setTextInput1(event.target.value);
  };

  const handleTextInput2Change = (event) => {
    setTextInput2(event.target.value);
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

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName1(file.name);
    }
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName2(file.name);
    }
  };

  const handleRemove1 = () => {
    setFileName1(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleRemove2 = () => {
    setFileName2(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const optionsSelect = ["Option 1", "Option 2"];

  return (
    <>
      <Header />
      <Title margin="0px 0px 32px 0px">Generar campaña</Title>
      <DataContainer fitContent>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Título*</Label>
            <Input
              hasContent={textInput1.length > 0}
              type="text"
              value={textInput1}
              onChange={handleTextInput1Change}
            />
          </InputContainer>
          <InputContainer>
            <Label>Marca*</Label>
            <Select options={optionsSelect} />
          </InputContainer>
          <InputContainer>
            <Label>Público objetivo (Opcional)</Label>
            <Input
              type="text"
              value={textInput2}
              onChange={handleTextInput2Change}
              hasContent={textInput2.length > 0}
            />
          </InputContainer>
          <InputContainer>
            <Label margin0 bold>
              Archivo de pre emisión (BT)
            </Label>
            <Label margin="8px">(Opcional)</Label>
            <Input
              id="fileInput1"
              style={{ display: "none" }}
              type="file"
              onChange={handleChange1}
            />
            <FileUploadLabel htmlFor="fileInput1">
              {fileName1 ? (
                <ContainerFileName>
                  <TextFileUploadLabel>{fileName1}</TextFileUploadLabel>
                  <img
                    src={trashIcon}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemove1();
                    }}
                  />
                </ContainerFileName>
              ) : (
                <>
                  <img src={downloadIconBlue} />
                  <TextFileUploadLabel>Subir archivo</TextFileUploadLabel>
                </>
              )}
            </FileUploadLabel>
            <Label tiny>Hasta 50 MB en .jpg, .jpeg o .png</Label>
          </InputContainer>
          <InputContainer>
            <Label margin0 bold>
              Archivo de público objetivo (Inteligencia comercial)
            </Label>
            <Label margin="8px">(Opcional)</Label>
            <Input
              id="fileInput2"
              style={{ display: "none" }}
              type="file"
              onChange={handleChange2}
            />
            <FileUploadLabel htmlFor="fileInput2">
              {fileName2 ? (
                <ContainerFileName>
                  <TextFileUploadLabel>{fileName2}</TextFileUploadLabel>
                  <IconTrash
                    src={trashIcon}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemove2();
                    }}
                  />
                </ContainerFileName>
              ) : (
                <>
                  <IconTrash src={downloadIconBlue} />
                  <TextFileUploadLabel>Subir archivo</TextFileUploadLabel>
                </>
              )}
            </FileUploadLabel>
            <Label tiny>Hasta 100 MB en .jpg, .jpeg o .png</Label>
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
