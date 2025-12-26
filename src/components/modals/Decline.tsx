import { DataContainer, Title, Logo } from "../../GlobalStyles";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Btn } from "../button/ButtonStyle";
import { decline } from "../../assets";
import { useNavigate } from "react-router-dom";

const Decline = () => {
  const navigate = useNavigate();

  const confirmButton = () => {
    navigate("/campañas");
  };

  return (
    <>
      <Header />
      <DataContainer>
        <Logo src={decline} alt="Ok" />
        <Title spaceBottom={true} big={true}>
          ¡Listo!
        </Title>
        <Title spaceBottom={true}>La campaña fue rechazada</Title>
        <Btn onClick={confirmButton}>Aceptar</Btn>
      </DataContainer>
      <Footer />
    </>
  );
};

export default Decline;
