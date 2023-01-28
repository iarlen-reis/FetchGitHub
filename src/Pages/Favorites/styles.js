import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;

  row-gap: 2rem;
  max-width: 1200px;
  height: 100vh;

  align-items: center;

  text-align: center;

  margin: 0 auto;
  padding: 1rem;
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;

  h1 {
    font-size: 2rem;
    color: #fff;
  }

  p {
    font-style: italic;
    color: #aaa;
  }
`;

export const ContainerImageManutention = styled.div`
  max-width: 500px;

  h2 {
    color: #fff;
    font-size: 1.3rem;
  }

  img {
    max-width: 100%;
    transition: all 0.5s;

    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
