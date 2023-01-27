import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  padding: 1rem;

  row-gap: 2rem;
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
  row-gap: 0.3rem;

  h1 {
    color: #fff;

    font-style: italic;

    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 600px;

    font-style: italic;
    font-size: 1.2rem;
    font-weight: 500;

    color: #aaa;
  }

  p a {
    color: #000;
    transition: 0.4s;

    &:hover {
      color: crimson;
    }
  }
`;

export const ImageContainerStyled = styled.div`
  max-width: 500px;
  margin: 0 auto;

  img {
    max-width: 100%;
    transition: 0.6s;

    cursor: pointer;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
