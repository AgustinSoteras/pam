import { DataContainer, Title, Logo, Text } from "../../GlobalStyles";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Btn } from "../button/ButtonStyle";
import { success } from "../../assets";
import { useNavigate } from "react-router-dom";

const SuccessCampaing = () => {
  const navigate = useNavigate();

  const confirmButton = () => {
    navigate("/campañas");
  };

  return (
    <>
      <Header />
      <DataContainer>
        <Logo src={success} alt="Ok" />
        <Title fontSize="20px">
          ¡Listo! <br /> La campaña fue guardada con éxito y se encuentra en
          <br />
          proceso
        </Title>
        <Text fontSize="20px">
          El operador de campañas recibirá un correo con los
          <br />
          datos de la campaña creada.
        </Text>
        <Btn onClick={confirmButton}>Aceptar</Btn>
      </DataContainer>
      <Footer />
    </>
  );
};

export default SuccessCampaing;
