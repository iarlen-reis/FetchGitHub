import styled from "styled-components";

export const UserContainer = styled.div`
  max-width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

export const SectionStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 400px;
  row-gap: 0.5rem;
  margin: 0 auto;

  padding: 1rem;

  border-radius: 4px;

  background: #191948;

  svg {
    color: #aaa;
  }

  h2 {
    color: #fff;
    font-style: italic;

    margin-bottom: 0.5rem;
  }

  div > img {
    max-width: 100%;

    border-radius: 4px;
    border: 1px solid #0e091b;
  }

  button {
    font-weight: 600;
    width: 100%;

    padding: 0.5rem;
    margin-top: 0.4rem;

    cursor: pointer;

    border: none;

    color: #fff;
    background: #988f33;

    &:hover {
      background: #454118;
    }
  }

  @media (max-width: 430px) {
    width: 300px;
  }

  @media (max-width: 358px) {
    width: 280px;
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 0.3rem;

  p {
    font-style: italic;
    font-weight: 600;

    margin-top: 0.2rem;

    flex-wrap: wrap;

    color: #fff;
  }

  p + div {
    width: 100%;
    display: flex;
    justify-content: center;

    column-gap: 0.8rem;
  }

  p + div span {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.3rem;

    font-style: italic;

    margin: 0.2rem;

    color: #fff;
  }

  div + div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.3rem;

    font-style: italic;
    font-weight: 500;

    margin: 0.2rem;

    color: #fff;
  }
`;

export const ContainerFavoriteStyled = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;

  cursor: pointer;

  color: #fff;
`;
