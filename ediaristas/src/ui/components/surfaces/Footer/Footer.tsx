import React from "react";
import { Typography, Box } from "@material-ui/core";
import {
  FooterStyled,
  FooterContainer,
  FooterTittle,
  AppList,
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTittle>Quem somos</FooterTittle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            E-Diarista te ajuda a encontra um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos a melhor profissional com
            total segurança a praticidade!São milhares de clientes satisfeitos
            por todos o país.
          </Typography>
        </Box>
        <div>
          <FooterTittle>Baixe nossos aplicativos</FooterTittle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"AppStore"} />
              </a>
            </li>

            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google PLay"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
