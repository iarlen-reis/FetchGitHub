import React from "react";

import {
  SectionStyled,
  HeaderStyled,
  ContainerImageManutention,
} from "./styles";

import maintenance from "/maintenance.png";

const Favorites = () => {
  return (
    <SectionStyled>
      <HeaderStyled>
        <h1>Repositórios favoritos</h1>
        <p>Aqui estão seus repositórios favoritos!</p>
      </HeaderStyled>
      <ContainerImageManutention>
        <h2>Funcionalidade em desenvolvimento!</h2>
        <img src={maintenance} alt="maintenance image" />
      </ContainerImageManutention>
    </SectionStyled>
  );
};

export default Favorites;
