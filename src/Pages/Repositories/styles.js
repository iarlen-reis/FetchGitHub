import styled from "styled-components";

export const SectionStyled = styled.section`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  text-align: center;

  margin: 2rem auto;

  h1 {
    color: #fff;
    font-weight: 600;
    font-style: italic;
    font-size: 2rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 3rem;
    row-gap: 1rem;
    margin: 2rem auto;
  }
`;
