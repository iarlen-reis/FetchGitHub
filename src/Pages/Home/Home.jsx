import React from "react";

import { Header } from "./style";
import { Container } from "../../styles/globalStyles";

const Home = () => {
  return (
    <Container>
      <Header>
        <h1>Template de ReactJs + Styled components</h1>
        <p>Essa é página home da aplicação!</p>
      </Header>
    </Container>
  );
};

export default Home;
