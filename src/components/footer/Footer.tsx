import { FooterContainer } from "../../GlobalStyles";
import { Banner, LogoFoot } from "../../GlobalStyles";
import { banner, footerLogo } from "../../assets";

const Footer = () => {
  return (
    <FooterContainer>
      <Banner src={banner} alt="Banco Formosa" />
      <LogoFoot src={footerLogo} alt="Banco Formosa" />
    </FooterContainer>
  );
};

export default Footer;
