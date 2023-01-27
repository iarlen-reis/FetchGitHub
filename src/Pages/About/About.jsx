import React from "react";

import { Main, HeaderStyled, ImageContainerStyled } from "./styles";
import aboutImage from "/home/iarlen/Documentos/GithubRepository/public/about-image.png";

const About = () => {
  return (
    <div>
      <Main>
        <HeaderStyled>
          <h1>FindRepository</h1>
          <p>
            Essa aplicação foi desenvolvida utilizando a
            <a href="https://api.github.com/"> API</a> do próprio github.
          </p>
          <p>
            O intuito da criação do projeto foi praticar os conceitos de
            componentização do reactJs e requisição com axios, junto ao reactJs.
          </p>
        </HeaderStyled>
        <ImageContainerStyled>
          <img
            src={aboutImage}
            alt="Uma mulher ao lado de um computador, tablet e celular"
          />
        </ImageContainerStyled>
      </Main>
    </div>
  );
};

export default About;
