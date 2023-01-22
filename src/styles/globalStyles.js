import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #DFDFDF;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 90vh;

  text-align: center;

  padding: 1.5rem 1rem;
  margin: 0 auto;
`;

export default GlobalStyle;
